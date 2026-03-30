import {
  I18N_LOCAL_DEFAULT_MAP,
  I18N_LOCAL_IMPORT_DEFAULTS,
} from '@/locales/i18n';
import { NUWAXPC_I18N_EN_US } from '@/locales/i18n/nuwaxpc-en-us';
import { NUWAXPC_I18N_ZH_CN } from '@/locales/i18n/nuwaxpc-zh-cn';

export const DEFAULT_I18N_LANG = 'en-us';

export const I18N_STORAGE_KEYS = {
  ACTIVE_LANG: 'XAGI_I18N_ACTIVE_LANG',
  LANG_MAP_CACHE: 'XAGI_I18N_LANG_MAP_CACHE',
  LANG_MAP_CACHE_AT: 'XAGI_I18N_LANG_MAP_CACHE_AT',
  LANG_MAP_CACHE_LANG: 'XAGI_I18N_LANG_MAP_CACHE_LANG',
} as const;

export const I18N_MAP_CACHE_TTL = 24 * 60 * 60 * 1000;

// Runtime fallback dictionaries
export const MIN_EN_I18N_MAP: Record<string, string> = NUWAXPC_I18N_EN_US;
export const MIN_ZH_I18N_MAP: Record<string, string> = NUWAXPC_I18N_ZH_CN;
export const LOCAL_DEFAULT_I18N_MAP = I18N_LOCAL_DEFAULT_MAP;

// Platform defaults for i18n management import
export const I18N_IMPORT_DEFAULTS = I18N_LOCAL_IMPORT_DEFAULTS;

export const I18N_CLIENTS = ['NuwaxPC', 'NuwaxMobile', 'NuwaClaw'] as const;

export const I18N_SCOPES = [
  'Pages',
  'Components',
  'Toast',
  'Modal',
  'Common',
] as const;

export const I18N_KEY_REGEX =
  /^(NuwaxPC|NuwaxMobile|NuwaClaw)\.(Pages|Components|Toast|Modal|Common)\.[A-Z][A-Za-z0-9]*\.[a-z][A-Za-z0-9]*$/;
