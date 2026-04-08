import SvgIcon from '@/components/base/SvgIcon';
import TooltipIcon from '@/components/custom/TooltipIcon';
import { XProTable } from '@/components/ProComponents';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import { SUCCESS_CODE } from '@/constants/codes.constants';
import { ACCESS_TOKEN } from '@/constants/home.constants';
import {
  apiI18nConfigBatchDelete,
  apiI18nConfigList,
  apiI18nConfigTranslate,
} from '@/services/i18n';
import type { I18nSlideLangInfo } from '@/types/interfaces/i18n';
import type { Page } from '@/types/interfaces/request';
import { modalConfirm } from '@/utils/ant-custom';
import { createSSEConnection } from '@/utils/fetchEventSourceConversationInfo';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type {
  ActionType,
  FormInstance,
  ProColumns,
} from '@ant-design/pro-components';
import { Button, Space, Tag, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { history, useParams, useSearchParams } from 'umi';
import AddKeyValueModal from './AddKeyValueModal';
import BatchKeyValueModal from './BatchKeyValueModal';
import styles from './index.less';

/**
 * 语言内容页面
 */
const LangContent: React.FC = () => {
  // ====================== 语言 ======================
  const { lang } = useParams();
  const [searchParams] = useSearchParams();
  // 默认语言, 如果存在，则翻译时需要将默认语言的值翻译成当前语言的值
  const defaultLang = searchParams.get('defaultLang') || '';

  // ====================== 添加键值对弹窗 ======================
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<I18nSlideLangInfo | null>(
    null,
  );
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  // 单个翻译 key 的 loading 状态
  const [translateLoadingMap, setTranslateLoadingMap] = useState<
    Record<string, boolean>
  >({});
  // 翻译全部 loading 状态
  const [translateAllLoading, setTranslateAllLoading] =
    useState<boolean>(false);
  // 翻译全部 SSE 连接中断函数
  const translateAllAbortRef = useRef<(() => void) | null>(null);

  // ====================== 批量新增或更新键值对弹窗 ======================
  const [batchModalOpen, setBatchModalOpen] = useState<boolean>(false);

  // ====================== 多语言端 ======================
  const side = String(history.location.query?.side || 'PC');

  // 组件卸载时主动中断 SSE，避免内存泄漏和状态更新异常
  useEffect(() => {
    return () => {
      translateAllAbortRef.current?.();
      translateAllAbortRef.current = null;
    };
  }, []);

  // 打开添加键值对弹窗
  const handleOpenAddModal = () => {
    setCurrentItem(null);
    setAddModalOpen(true);
  };

  // 编辑
  const handleEdit = (record: I18nSlideLangInfo) => {
    setCurrentItem(record);
    setAddModalOpen(true);
  };

  // 翻译单个key
  const handleTranslate = async (record: I18nSlideLangInfo) => {
    const rowKey = record.key;
    setTranslateLoadingMap((prev) => ({ ...prev, [rowKey]: true }));
    try {
      await apiI18nConfigTranslate({
        side,
        lang,
        value: record.value,
        key: record.key,
      });
      message.success('翻译成功');
      actionRef.current?.reload();
    } finally {
      setTranslateLoadingMap((prev) => {
        const next = { ...prev };
        delete next[rowKey];
        return next;
      });
    }
  };

  // 翻译全部
  const handleTranslateAll = async () => {
    setTranslateAllLoading(true);
    const token = localStorage.getItem(ACCESS_TOKEN) ?? '';

    // 避免重复点击导致并发 SSE
    translateAllAbortRef.current?.();

    translateAllAbortRef.current = createSSEConnection({
      url: `${process.env.BASE_URL}/api/system/i18n/config/translateAll?sourceLang=${defaultLang}&targetLang=${lang}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json, text/plain, */* ',
      },
      onMessage: (res: any) => {
        console.log('res', res);
        // message.success('翻译成功');
        // actionRef.current?.reload();
      },
      onClose: () => {
        translateAllAbortRef.current = null;
        setTranslateAllLoading(false);
      },
      onError: () => {
        translateAllAbortRef.current = null;
        setTranslateAllLoading(false);
      },
    });
  };

  // 翻译全部（二次确认）
  const handleTranslateAllWithConfirm = () => {
    modalConfirm(
      '翻译全部',
      '翻译将会消耗您的token，您确认将默认语言(' +
        defaultLang +
        ')全部的键值对翻译成当前语言(' +
        lang +
        ')吗？',
      async () => {
        await handleTranslateAll();
        return Promise.resolve();
      },
    );
  };

  // 删除单个键值对（二次确认）
  const handleDeleteWithConfirm = (record: I18nSlideLangInfo) => {
    modalConfirm('确认删除', '是否删除当前键值对？', async () => {
      await apiI18nConfigBatchDelete([record]);
      message.success('删除成功');
      actionRef.current?.reload();
      return Promise.resolve();
    });
  };

  // 列配置（使用表格内置搜索）
  const columns: ProColumns<I18nSlideLangInfo>[] = [
    {
      title: '模块',
      dataIndex: 'module',
      width: 120,
      fieldProps: {
        placeholder: '搜索模块...',
        allowClear: true,
      },
      search: {
        transform: (value: string) => ({ module: value }),
      },
      render: (_, record) => {
        const moduleText = String(record.key || '').split('.')[0] || '-';
        return <Tag>{moduleText}</Tag>;
      },
    },
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      fieldProps: {
        placeholder: '搜索 Key...',
        allowClear: true,
      },
    },
    {
      title: '文本内容',
      dataIndex: 'value',
      key: 'value',
      fieldProps: {
        placeholder: '搜索文本内容...',
        allowClear: true,
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      width: 300,
      hideInSearch: true,
    },
    {
      title: '操作',
      key: 'actions',
      width: 140,
      hideInSearch: true,
      align: 'center',
      valueType: 'option',
      render: (_value, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          {defaultLang && (
            <TooltipIcon
              title={record.value ? '翻译' : '文本内容为空，不能翻译'}
              icon={
                <Button
                  type="text"
                  disabled={!record.value}
                  icon={
                    <SvgIcon
                      name="icons-common-icon_translate"
                      className={styles['lang-content-translate-icon']}
                      style={{ fontSize: 16 }}
                    />
                  }
                  loading={translateLoadingMap[record.key] || false}
                  onClick={() => handleTranslate(record)}
                />
              }
            ></TooltipIcon>
          )}
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteWithConfirm(record)}
          />
        </Space>
      ),
    },
  ];

  // 查询多语言配置列表
  const request = async (params: {
    current?: number;
    pageSize?: number;
    module?: string;
    key?: string;
    value?: string;
  }) => {
    const response = await apiI18nConfigList({
      side,
      lang,
      module: params.module,
      key: params.key,
      pageNo: params.current || 1,
      pageSize: params.pageSize || 15,
    });
    const data = response.data;
    if (Array.isArray(data)) {
      return {
        data,
        total: data.length,
        success: response.code === SUCCESS_CODE,
      };
    }
    const pageData = data as Page<I18nSlideLangInfo>;
    return {
      data: pageData.records || [],
      total: pageData.total || 0,
      success: response.code === SUCCESS_CODE,
    };
  };

  return (
    <WorkspaceLayout
      title={`${lang} - 键值对管理`}
      back={true}
      rightSlot={
        <>
          {defaultLang && (
            <Button
              loading={translateAllLoading}
              onClick={handleTranslateAllWithConfirm}
            >
              翻译全部
            </Button>
          )}
          <Button type="primary" onClick={() => setBatchModalOpen(true)}>
            批量新增或更新
          </Button>
          <Button type="primary" onClick={handleOpenAddModal}>
            新增
          </Button>
        </>
      }
    >
      <XProTable<I18nSlideLangInfo>
        actionRef={actionRef}
        formRef={formRef}
        rowKey={(record) => `${record.key || ''}-${record.lang || ''}`}
        columns={columns}
        request={request}
      />

      {/* 新增或编辑键值对弹窗 */}
      <AddKeyValueModal
        open={addModalOpen}
        currentItem={currentItem}
        lang={lang}
        side={side}
        onCancel={() => {
          setAddModalOpen(false);
          setCurrentItem(null);
        }}
        onSuccess={() => {
          setAddModalOpen(false);
          setCurrentItem(null);
          actionRef.current?.reload();
        }}
      />

      {/* 批量新增或更新键值对弹窗 */}
      <BatchKeyValueModal
        side={side}
        lang={lang}
        open={batchModalOpen}
        onCancel={() => setBatchModalOpen(false)}
        onSuccess={() => {
          setBatchModalOpen(false);
          actionRef.current?.reload();
        }}
      />
    </WorkspaceLayout>
  );
};

export default LangContent;
