import { I18N_IMPORT_DEFAULTS } from '@/constants/i18n.constants';
import { apiUserUpdate } from '@/services/account';
import type {
  I18nClient,
  I18nLangDto,
  SystemLangMap,
} from '@/types/interfaces/i18n';
import type { UserUpdateParams } from '@/types/interfaces/login';
import type { RequestResponse } from '@/types/interfaces/request';
import { request } from 'umi';

export async function apiI18nQuery(
  lang?: string,
): Promise<RequestResponse<SystemLangMap>> {
  return request('/api/i18n/query', {
    method: 'GET',
    params: lang ? { lang } : undefined,
    skipErrorHandler: true,
  });
}

export async function apiI18nLangList(): Promise<
  RequestResponse<I18nLangDto[]>
> {
  return request('/api/i18n/lang/list', {
    method: 'GET',
  });
}

export async function saveUserLang(
  lang: string,
): Promise<RequestResponse<null>> {
  const params: UserUpdateParams = {
    lang,
  };
  return apiUserUpdate(params);
}

export function getI18nImportDefaults(
  client: I18nClient = 'NuwaxPC',
): Record<string, SystemLangMap> {
  const clientDefaults =
    (I18N_IMPORT_DEFAULTS as Record<string, Record<string, SystemLangMap>>)[
      client
    ] || {};

  return Object.entries(clientDefaults).reduce<Record<string, SystemLangMap>>(
    (acc, [lang, langMap]) => {
      acc[lang] = { ...langMap };
      return acc;
    },
    {},
  );
}

export function getI18nImportDefaultMap(
  lang: string,
  client: I18nClient = 'NuwaxPC',
): SystemLangMap {
  const defaults = getI18nImportDefaults(client);
  const normalizedLang = String(lang || '').toLowerCase();
  if (normalizedLang.startsWith('zh')) {
    return { ...(defaults['zh-cn'] || {}) };
  }
  return { ...(defaults['en-us'] || {}) };
}
