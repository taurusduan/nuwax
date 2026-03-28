/**
 * 用户 API KEY 信息
 */
export interface ApiKeyInfo {
  id: number;
  tenantId: number;
  userId: number;
  /** 名称 */
  name: string;
  targetType: string;
  targetId: string;
  /** API Key */
  accessKey: string;
  config: {
    isDevMode: number;
    enabled: boolean;
    modelId: number;
    modelBaseUrl: string;
    modelApiKey: string;
    conversationId: string;
    modelName: string;
    protocol: string;
    scope: string;
    userName: string;
    requestId: string;
    apiConfigs: {
      key: string;
      rpm: number;
    }[];
  };
  /** 状态 0 停用; 1 启用 */
  status: number;
  /** 过期时间 */
  expire: string;
  creator: {
    userId: number;
    userName: string;
  };
  /** 创建时间 */
  created: string;
}

/**
 * 创建 API KEY 参数
 */
export interface ApiKeyCreateParams {
  /** 名称 */
  name: string;
  /** 过期时间（时间戳，当天 23:59:59） */
  expire?: number | null;
}

/**
 * 更新 API KEY 参数
 */
export interface ApiKeyUpdateParams {
  /** API Key */
  accessKey: string;
  /** 状态 0 停用; 1 启用 */
  status: number;
  /** 名称 */
  name: string;
  /** 过期时间（时间戳，当天 23:59:59） */
  expire?: number | null;
}
