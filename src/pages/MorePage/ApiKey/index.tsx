import { TableActions, XProTable } from '@/components/ProComponents';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import { apiApiKeyList } from '@/services/account';
import type { ApiKeyInfo } from '@/types/interfaces/account';
import { copyTextToClipboard } from '@/utils/clipboard';
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, message, Space, Tag, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';

export const STATUS_MAP: Record<number, { color: string; text: string }> = {
  1: { color: 'green', text: '活跃' },
  0: { color: 'red', text: '停用' },
};

const { Text } = Typography;

const ApiKeyPage: React.FC = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const actionRef = useRef<ActionType>();

  const toggleShowKey = (id: string | number) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    copyTextToClipboard(text, () => {
      message.success('API KEY 已成功复制到剪贴板');
    });
  };

  // 脱敏处理
  const maskApiKey = (key: string) => {
    if (!key || key.length < 10) return key;
    return `${key.slice(0, 10)}••••••••••••••••••••${key.slice(-4)}`;
  };

  const columns: ProColumns<ApiKeyInfo>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      search: false,
      ellipsis: true,
    },
    {
      title: 'API KEY',
      dataIndex: 'accessKey',
      key: 'accessKey',
      search: false,
      width: 320,
      render: (_, record) => {
        const visible = showKeys[record.id];
        return (
          <Space size={8}>
            <Text className="font-mono">
              {visible ? record.accessKey : maskApiKey(record.accessKey)}
            </Text>
            <Tooltip title={visible ? '隐藏' : '显示'}>
              <Button
                type="text"
                size="small"
                icon={visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                onClick={() => toggleShowKey(record.id)}
              />
            </Tooltip>
            <Tooltip title="复制">
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
      title: '创建时间',
      dataIndex: 'created',
      key: 'created',
      search: false,
      valueType: 'dateTime',
    },
    {
      title: '过期时间',
      dataIndex: 'expire',
      key: 'expire',
      search: false,
      render: (_, record) => {
        const isNever =
          !record.expire ||
          record.expire === '永不过期' ||
          record.expire === '0000-00-00 00:00:00';
        return (
          <Text type={isNever ? 'success' : undefined}>
            {isNever ? '永不过期' : record.expire}
          </Text>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      search: false,
      valueEnum: STATUS_MAP,
      render: (_, record) => {
        const { color = 'default', text = '未知' } =
          STATUS_MAP[record.status] || {};
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      search: false,
      fixed: 'right',
      align: 'center',
      render: (_, record) => (
        <TableActions
          type="button"
          record={record}
          actions={[
            {
              key: 'edit',
              label: '编辑',
              icon: <EditOutlined />,
              onClick: (r) => {
                message.info(`正在编辑: ${r.name}`);
              },
            },
            {
              key: 'delete',
              label: '删除',
              icon: <DeleteOutlined />,
              danger: true,
              confirm: {
                title: (r) => `确认删除密钥 "${r.name}" 吗？`,
                description: '删除后将无法恢复，请谨慎操作。',
              },
              onClick: async () => {
                await new Promise((resolve) => {
                  setTimeout(resolve, 1000);
                });
                actionRef.current?.reload();
                message.success('删除成功');
              },
            },
          ]}
        />
      ),
    },
  ];

  return (
    <WorkspaceLayout title="API 密钥管理" tips="管理您的API密钥与访问权限">
      <XProTable<ApiKeyInfo>
        actionRef={actionRef}
        request={async () => {
          const result = await apiApiKeyList();
          return {
            data: result.data || [],
            success: result.success,
          };
        }}
        columns={columns}
        rowKey="id"
      />
    </WorkspaceLayout>
  );
};

export default ApiKeyPage;
