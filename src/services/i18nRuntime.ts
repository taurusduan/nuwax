import { SUCCESS_CODE } from '@/constants/codes.constants';
import {
  DEFAULT_I18N_LANG,
  I18N_KEY_REGEX,
  I18N_MAP_CACHE_TTL,
  I18N_STORAGE_KEYS,
  MIN_EN_I18N_MAP,
  MIN_ZH_I18N_MAP,
} from '@/constants/i18n.constants';
import type { I18nKeyPattern, SystemLangMap } from '@/types/interfaces/i18n';
import { apiI18nQuery } from './i18n';

let currentLang = DEFAULT_I18N_LANG;
let langMap: SystemLangMap = { ...MIN_EN_I18N_MAP };
let zhBaseMap: SystemLangMap = { ...MIN_ZH_I18N_MAP };
let zhValueToKeyMap: Record<string, string> = {};
let initialized = false;
const warnedLegacyKeys = new Set<string>();
const warnedInvalidKeys = new Set<string>();
const warnedMissingKeys = new Set<string>();

const normalizeLang = (lang?: string | null) =>
  (lang || DEFAULT_I18N_LANG).toLowerCase();

const isZhLang = (lang?: string | null): boolean =>
  normalizeLang(lang).startsWith('zh');

const getLocalDefaultMapByLang = (lang?: string | null): SystemLangMap =>
  isZhLang(lang) ? MIN_ZH_I18N_MAP : MIN_EN_I18N_MAP;

const isLegacySystemKey = (key: string): boolean => key.startsWith('System.');

const isValidI18nKey = (key: string): key is I18nKeyPattern =>
  I18N_KEY_REGEX.test(key);

const warnOnce = (
  cache: Set<string>,
  key: string,
  logger: (payload: string) => void,
): void => {
  if (cache.has(key)) return;
  cache.add(key);
  logger(key);
};

const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore cache failures
  }
};

const getBrowserLang = (): string => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_I18N_LANG;
  }
  return normalizeLang(navigator.language);
};

const formatText = (template: string, values: string[]): string => {
  if (!values.length) return template;
  let text = template;
  values.forEach((value, index) => {
    text = text.replace(new RegExp(`\\{${index}\\}`, 'g'), value);
  });
  let cursor = 0;
  text = text.replace(/\{\}/g, () => values[cursor++] ?? '');
  return text;
};

const readMapFromCache = (lang: string): SystemLangMap | null => {
  const cacheAt = Number(safeGetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE_AT));
  const cacheText = safeGetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE);
  const cacheLangRaw = safeGetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE_LANG);
  const cacheLang = cacheLangRaw ? normalizeLang(cacheLangRaw) : '';
  if (!cacheText || !cacheAt) return null;
  if (Date.now() - cacheAt > I18N_MAP_CACHE_TTL) return null;
  if (cacheLang && cacheLang !== normalizeLang(lang)) return null;
  try {
    const cacheValue = JSON.parse(cacheText) as SystemLangMap;
    if (cacheValue && typeof cacheValue === 'object') {
      return cacheValue;
    }
  } catch {
    // ignore invalid cache
  }
  return null;
};

const persistMapCache = (lang: string, map: SystemLangMap): void => {
  safeSetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE, JSON.stringify(map));
  safeSetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE_AT, String(Date.now()));
  safeSetItem(I18N_STORAGE_KEYS.LANG_MAP_CACHE_LANG, normalizeLang(lang));
};

const readLangFromCache = (): string | null => {
  return safeGetItem(I18N_STORAGE_KEYS.ACTIVE_LANG);
};

const parseLangMapResult = (result: any): SystemLangMap | null => {
  const resultData =
    result?.data && typeof result.data === 'object' ? result.data : result;
  const isSuccess = result?.code ? result.code === SUCCESS_CODE : true;
  if (!isSuccess || !resultData || typeof resultData !== 'object') {
    return null;
  }
  return resultData as SystemLangMap;
};

const buildZhValueToKeyMap = (map: SystemLangMap): void => {
  const nextMap: Record<string, string> = {};
  Object.entries(map).forEach(([key, value]) => {
    const normalizedValue = String(value || '').trim();
    if (!normalizedValue) return;
    if (!(normalizedValue in nextMap)) {
      nextMap[normalizedValue] = key;
    }
  });
  zhValueToKeyMap = nextMap;
};

const fetchAndApplyLangMap = async (lang?: string): Promise<boolean> => {
  const targetLang = normalizeLang(lang || currentLang);
  try {
    const result = await apiI18nQuery(lang);
    const parsedMap = parseLangMapResult(result);
    if (!parsedMap) return false;
    langMap = {
      ...getLocalDefaultMapByLang(targetLang),
      ...parsedMap,
    };
    persistMapCache(targetLang, langMap);
    return true;
  } catch {
    return false;
  }
};

const fetchZhBaseMap = async (): Promise<void> => {
  zhBaseMap = { ...MIN_ZH_I18N_MAP };
  try {
    const result = await apiI18nQuery('zh-cn');
    const parsedMap = parseLangMapResult(result);
    if (parsedMap) {
      zhBaseMap = {
        ...MIN_ZH_I18N_MAP,
        ...parsedMap,
      };
    }
  } catch {
    // ignore zh fallback fetch errors
  }
  buildZhValueToKeyMap(zhBaseMap);
};

export const getCurrentLang = (): string => currentLang;

export const getCurrentLangMap = (): SystemLangMap => ({ ...langMap });

export const setCurrentLang = (lang?: string | null): void => {
  const resolvedLang = normalizeLang(lang || getBrowserLang());
  currentLang = resolvedLang;
  safeSetItem(I18N_STORAGE_KEYS.ACTIVE_LANG, resolvedLang);
};

export const syncLangFromUserInfo = async (user?: {
  lang?: string | null;
}): Promise<void> => {
  if (!user?.lang) return;
  const targetLang = normalizeLang(user.lang);
  setCurrentLang(targetLang);
  const fetched = await fetchAndApplyLangMap(targetLang);
  if (!fetched) {
    langMap = { ...getLocalDefaultMapByLang(targetLang) };
  }
  if (isZhLang(targetLang)) {
    zhBaseMap = { ...MIN_ZH_I18N_MAP };
    buildZhValueToKeyMap(zhBaseMap);
  }
  initialized = true;
};

export const dict = (key: string, ...values: string[]): string => {
  const normalizedKey = String(key || '').trim();
  if (!normalizedKey) return '';

  if (isLegacySystemKey(normalizedKey)) {
    warnOnce(warnedLegacyKeys, normalizedKey, (k) => {
      console.error(
        `[i18n] Legacy key is not supported anymore and should be migrated: ${k}`,
      );
    });
    return normalizedKey;
  }

  if (!isValidI18nKey(normalizedKey)) {
    warnOnce(warnedInvalidKeys, normalizedKey, (k) => {
      console.error(
        `[i18n] Invalid key format. Expected {Client}.{Scope}.{Domain}.{key}: ${k}`,
      );
    });
    return normalizedKey;
  }

  const template =
    langMap[normalizedKey] ||
    MIN_EN_I18N_MAP[normalizedKey] ||
    MIN_ZH_I18N_MAP[normalizedKey];
  if (!template) {
    warnOnce(warnedMissingKeys, normalizedKey, (k) => {
      console.error(`[i18n] Missing translation entry for key: ${k}`);
    });
    return normalizedKey;
  }

  return formatText(template, values);
};

export const translateLiteralText = (rawText: string): string => {
  const originalText = String(rawText || '');
  const trimmedText = originalText.trim();
  if (!trimmedText) return originalText;

  // 直接支持新规范 key 文本
  if (isValidI18nKey(trimmedText)) {
    return originalText.replace(trimmedText, dict(trimmedText));
  }

  if (isLegacySystemKey(trimmedText)) {
    dict(trimmedText);
    return originalText;
  }

  // 中文界面无需替换
  if (getCurrentLang().startsWith('zh')) {
    return originalText;
  }

  const key = zhValueToKeyMap[trimmedText];
  if (!key) return originalText;

  const translated = dict(key);
  if (!translated || translated === key) return originalText;
  return originalText.replace(trimmedText, translated);
};

export const initI18n = async (): Promise<void> => {
  if (initialized) return;

  const cachedLang = readLangFromCache();
  const resolvedLang = normalizeLang(cachedLang || getBrowserLang());
  setCurrentLang(resolvedLang);

  langMap = { ...getLocalDefaultMapByLang(resolvedLang) };

  const cachedMap = readMapFromCache(resolvedLang);
  if (cachedMap) {
    langMap = {
      ...getLocalDefaultMapByLang(resolvedLang),
      ...cachedMap,
    };
  }

  const fetched = await fetchAndApplyLangMap();
  if (isZhLang(getCurrentLang())) {
    zhBaseMap = { ...langMap };
    buildZhValueToKeyMap(zhBaseMap);
  } else {
    await fetchZhBaseMap();
  }

  if (!Object.keys(zhValueToKeyMap).length) {
    buildZhValueToKeyMap(MIN_ZH_I18N_MAP);
  }

  if (!fetched && !cachedMap) {
    langMap = { ...getLocalDefaultMapByLang(resolvedLang) };
  }
  initialized = true;
};
