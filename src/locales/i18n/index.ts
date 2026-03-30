import type { SystemLangMap } from '@/types/interfaces/i18n';
import { NUWAXPC_I18N_EN_US } from './nuwaxpc-en-us';
import { NUWAXPC_I18N_ZH_CN } from './nuwaxpc-zh-cn';

export const I18N_LOCAL_DEFAULT_MAP: Record<string, SystemLangMap> = {
  'en-us': NUWAXPC_I18N_EN_US,
  'zh-cn': NUWAXPC_I18N_ZH_CN,
};

export const I18N_LOCAL_IMPORT_DEFAULTS = {
  NuwaxPC: {
    'en-us': NUWAXPC_I18N_EN_US,
    'zh-cn': NUWAXPC_I18N_ZH_CN,
  },
} as const;

export const getLocalDefaultLangMap = (lang?: string): SystemLangMap => {
  const normalizedLang = String(lang || '').toLowerCase();
  if (normalizedLang.startsWith('zh')) {
    return { ...NUWAXPC_I18N_ZH_CN };
  }
  return { ...NUWAXPC_I18N_EN_US };
};
