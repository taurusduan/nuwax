import { apiUserUpdate } from '@/services/account';
import type { I18nLangDto, SystemLangMap } from '@/types/interfaces/i18n';
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
