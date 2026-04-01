import type { SystemLangMap } from '@/types/interfaces/i18n';
import { EN_US } from './en-US';
import { ZH_CN } from './zh-CN';

export const I18N_LOCAL_DEFAULT_MAP: Record<string, SystemLangMap> = {
  'en-us': EN_US,
  'zh-cn': ZH_CN,
};

export const I18N_LOCAL_IMPORT_DEFAULTS = {
  NuwaxPC: {
    'en-us': EN_US,
    'zh-cn': ZH_CN,
  },
} as const;

export const getLocalDefaultLangMap = (lang?: string): SystemLangMap => {
  const normalizedLang = String(lang || '').toLowerCase();
  if (normalizedLang.startsWith('zh')) {
    return { ...ZH_CN };
  }
  return { ...EN_US };
};
