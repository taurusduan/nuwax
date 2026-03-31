/**
 * AppDev 模型选择器 Hook
 * 管理模型列表加载和选择逻辑
 */
import { listModels } from '@/services/appDev';
import type { ModelLisDto } from '@/types/interfaces/appDev';
import { jumpBack } from '@/utils/router';
import { message, Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';

export const useAppDevModelSelector = (
  spaceId: number,
  projectId: string,
  hasPermission: boolean = true,
) => {
  // 模型对象（包含编码模型列表、视觉模型列表）
  const [models, setModels] = useState<ModelLisDto>();
  // 编码模型ID
  const [selectedModelId, setSelectedModelId] = useState<number | null>(null);
  // 视觉模型ID
  const [selectedMultiModelId, setSelectedMultiModelId] = useState<
    number | null
  >(null);
  // 模型列表加载状态
  const [isLoadingModels, setIsLoadingModels] = useState(false);

  /**
   * 加载模型列表
   */
  const loadModels = useCallback(async () => {
    if (!projectId) return;

    setIsLoadingModels(true);
    try {
      const { data, message, success } = await listModels(projectId);
      if (success) {
        setModels(data);

        // 获取编码模型列表
        const { chatModelList } = data || {};

        // 如果没有编码模型列表，则提示用户先配置默认聊天模型
        if (!chatModelList?.length) {
          Modal.confirm({
            title: 'Notice',
            content:
              'Please configure a coding model in System Management or the component library. Choose a model that supports the Anthropic protocol. Recommended: Zhipu Coding Plan https://bigmodel.cn/glm-coding',
            // 核心代码：通过样式隐藏取消按钮
            cancelButtonProps: { style: { display: 'none' } },
            onOk() {
              jumpBack(`/space/${spaceId}/page-develop`);
            },
          });
        }
      } else {
        throw new Error(message || 'Failed to get model list');
      }
    } catch (error) {
      console.error('Failed to load model list:', error);
      message.error('Failed to load model list. Please refresh and try again.');
    } finally {
      setIsLoadingModels(false);
    }
  }, [projectId]);

  /**
   * 选择编码模型
   */
  const selectModel = (modelId: number) => {
    setSelectedModelId(modelId);
  };

  /**
   * 选择视觉模型
   */
  const selectMultiModel = (modelId: number) => {
    setSelectedMultiModelId(modelId);
  };

  /**
   * 获取当前选中的模型信息
   */
  const selectedModel =
    models?.chatModelList?.find((m) => m.id === selectedModelId) || null;

  // 组件初始化时加载模型列表
  useEffect(() => {
    if (projectId && hasPermission) {
      loadModels();
    }
  }, [projectId, hasPermission]); // 移除 loadModels 依赖，避免重复执行

  return {
    models,
    selectedModelId,
    selectedModel,
    selectedMultiModelId,
    selectMultiModel,
    isLoadingModels,
    selectModel,
    reloadModels: loadModels,
  };
};
