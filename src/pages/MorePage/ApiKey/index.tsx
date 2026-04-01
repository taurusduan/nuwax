import { TableActions, XProTable } from '@/components/ProComponents';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import { apiApiKeyDelete, apiApiKeyList } from '@/services/account';
import { dict } from '@/services/i18nRuntime';
import type { ApiKeyInfo } from '@/types/interfaces/account';
import { copyTextToClipboard } from '@/utils/clipboard';
import {
  BarChartOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PlusOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, message, Space, Tag, Tooltip, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'umi';
import ApiKeyFormModal from './ApiKeyFormModal';
import ApiKeyPermissionModal from './ApiKeyPermissionModal';
import ApiKeyStatsModal from './ApiKeyStatsModal';

export const STATUS_MAP: Record<number, { color: string; text: string }> = {
  1: { color: 'green', text: dict('PC.Pages.MorePage.ApiKey.statusEnabled') },
  0: { color: 'red', text: dict('PC.Pages.MorePage.ApiKey.statusDisabled') },
};

const { Text } = Typography;

const ApiKeyPage: React.FC = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const actionRef = useRef<ActionType>();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<ApiKeyInfo | undefined>();
  const [statsOpen, setStatsOpen] = useState(false);
  const [statsRecord, setStatsRecord] = useState<ApiKeyInfo | undefined>();
  const [permissionOpen, setPermissionOpen] = useState(false);
  const [permissionRecord, setPermissionRecord] = useState<
    ApiKeyInfo | undefined
  >();
  const location: any = useLocation();
  const [pageSize, setPageSize] = useState(15);
  const [allData, setAllData] = useState<ApiKeyInfo[]>([]);

  useEffect(() => {
    if (location.state?._t) {
      setPageSize(15);
      setAllData([]); // 重置全量数据缓存
      actionRef.current?.reloadAndRest?.();
    }
  }, [location.state?._t]);

  const toggleShowKey = (id: string | number) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    copyTextToClipboard(text, () => {
      message.success(dict('PC.Pages.MorePage.ApiKey.copiedToClipboard'));
    });
  };

  // 脱敏处理
  const maskApiKey = (key: string) => {
    if (!key || key.length < 10) return key;
    return `${key.slice(0, 10)}••••••••••••••••••••${key.slice(-4)}`;
  };

  const columns: ProColumns<ApiKeyInfo>[] = [
    {
      title: dict('PC.Pages.MorePage.ApiKey.keyName'),
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'API KEY',
      dataIndex: 'accessKey',
      key: 'accessKey',
      search: false,
      width: 360,
      render: (_, record) => {
        const visible = showKeys[record.id];
        return (
          <Space size={8}>
            <Text className="font-mono">
              {visible ? record.accessKey : maskApiKey(record.accessKey)}
            </Text>
            <Tooltip
              title={
                visible
                  ? dict('PC.Pages.MorePage.ApiKey.hide')
                  : dict('PC.Pages.MorePage.ApiKey.show')
              }
            >
              <Button
                type="text"
                size="small"
                icon={visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                onClick={() => toggleShowKey(record.id)}
              />
            </Tooltip>
            <Tooltip title={dict('PC.Common.Global.copy')}>
              <Button
                type="text"
                size="small"
                icon={<CopyOutlined />}
                onClick={() => copyToClipboard(record.accessKey)}
              />
            </Tooltip>
          </Space>
        );
      },
    },
    {
      title: dict('PC.Pages.MorePage.ApiKey.createdTime'),
      dataIndex: 'created',
      key: 'created',
      search: false,
      valueType: 'dateTime',
    },
    {
      title: dict('PC.Pages.MorePage.ApiKey.expireTime'),
      dataIndex: 'expire',
      key: 'expire',
      search: false,
      render: (_, record) => {
        const val = record.expire;
        const isNever =
          !val || val === '永不过期' || val === '0000-00-00 00:00:00'; // backend literal value comparison

        // 如果后端返回的是 ISO 格式字符串，使用 dayjs 格式化显示成标准的日期时间
        const display = val && !isNever ? dayjs(val).format('YYYY-MM-DD') : val;

        return (
          <Text type={isNever ? 'success' : undefined}>
            {isNever ? dict('PC.Pages.MorePage.ApiKey.neverExpire') : display}
          </Text>
        );
      },
    },
    {
      title: dict('PC.Pages.MorePage.ApiKey.status'),
      dataIndex: 'status',
      key: 'status',
      search: false,
      valueEnum: STATUS_MAP,
      render: (_, record) => {
        const {
          color = 'default',
          text = dict('PC.Pages.MorePage.ApiKey.unknownStatus'),
        } = STATUS_MAP[record.status] || {};
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: dict('PC.Pages.MorePage.ApiKey.actions'),
      key: 'action',
      width: 220,
      search: false,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        <TableActions
          type="button"
          record={record}
          actions={[
            {
              key: 'stats',
              label: dict('PC.Pages.MorePage.ApiKey.callStats'),
              icon: <BarChartOutlined />,
              onClick: (r) => {
                setStatsRecord(r);
                setStatsOpen(true);
              },
            },
            {
              key: 'permission',
              label: dict('PC.Pages.MorePage.ApiKey.permissionConfig'),
              icon: <SafetyCertificateOutlined />,
              onClick: (r) => {
                setPermissionRecord(r);
                setPermissionOpen(true);
              },
            },
            {
              key: 'edit',
              label: dict('PC.Pages.MorePage.ApiKey.edit'),
              icon: <EditOutlined />,
              onClick: (r) => {
                setCurrentRecord(r);
                setModalOpen(true);
              },
            },
            {
              key: 'delete',
              label: dict('PC.Pages.MorePage.ApiKey.delete'),
              icon: <DeleteOutlined />,
              danger: true,
              confirm: {
                title: (r) =>
                  dict('PC.Pages.MorePage.ApiKey.confirmDeleteKey', r.name),
                description: dict('PC.Pages.MorePage.ApiKey.deleteWarning'),
              },
              onClick: async () => {
                await apiApiKeyDelete(record.accessKey);
                setAllData([]); // 重置缓存以重新获取最新数据
                actionRef.current?.reload();
                message.success(dict('PC.Pages.MorePage.ApiKey.deleteSuccess'));
              },
            },
          ]}
        />
      ),
    },
  ];

  return (
    <WorkspaceLayout
      title={dict('PC.Pages.MorePage.ApiKey.pageTitle')}
      tips={dict('PC.Pages.MorePage.ApiKey.pageTips')}
      rightSlot={
        <Button
          key="add"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setCurrentRecord(undefined);
            setModalOpen(true);
          }}
        >
          {dict('PC.Pages.MorePage.ApiKey.createKey')}
        </Button>
      }
    >
      <XProTable<ApiKeyInfo>
        key={location.state?._t || 'api-key-table'}
        actionRef={actionRef}
        request={async (params) => {
          let data = allData;
          if (data.length === 0) {
            const result = await apiApiKeyList();
            data = result.data || [];
            setAllData(data);
          }

          // 本地检索逻辑
          const filteredData = data.filter((item) => {
            const nameMatch = params.name
              ? item.name.toLowerCase().includes(params.name.toLowerCase())
              : true;
            return nameMatch;
          });

          return {
            data: filteredData,
            success: true,
          };
        }}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize,
          onChange: (_, size) => setPageSize(size),
        }}
      />
      <ApiKeyFormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        record={currentRecord}
        onSuccess={() => {
          setModalOpen(false);
          setAllData([]); // 重置缓存以获取最新数据
          actionRef.current?.reload();
        }}
      />
      <ApiKeyStatsModal
        open={statsOpen}
        onOpenChange={setStatsOpen}
        record={statsRecord}
      />
      <ApiKeyPermissionModal
        open={permissionOpen}
        onOpenChange={setPermissionOpen}
        record={permissionRecord}
        onSuccess={() => {
          setAllData([]); // 重置缓存以获取最新数据
          actionRef.current?.reload();
        }}
      />
    </WorkspaceLayout>
  );
};

export default ApiKeyPage;
