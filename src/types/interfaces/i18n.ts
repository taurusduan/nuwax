export interface I18nLangDto {
  id: number;
  name: string;
  lang: string;
  status: number;
  isDefault: number;
  sort: number;
  modified: string;
  created: string;
}

export type SystemLangMap = Record<string, string>;

export type I18nClient = 'PC' | 'Mobile' | 'Claw';

export type I18nScope = 'Pages' | 'Components' | 'Toast' | 'Modal' | 'Common';

// key format: {Client}.{Scope}.{Domain}.{specific}
export type I18nKeyPattern = `${I18nClient}.${I18nScope}.${string}.${string}`;
