import { TableActions, XProTable } from '@/components/ProComponents';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, Space, Tag, Tooltip, Typography, message } from 'antd';
import React, { useState } from 'react';

const { Text } = Typography;

interface ApiKeyItem {
  id: string;
  name: string;
  description: string;
  apiKey: string;
  status: 'active' | 'inactive' | 'expired';
  createTime: string;
  expireTime: string;
}

const ApiKeyPage: React.FC = () => {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const [apiKeys, setApiKeys] = useState<ApiKeyItem[]>([
    {
      id: '1',
      name: '默认密钥',
      description: '用于系统核心后端的数据交换交互模型管理节点',
      apiKey: 'sk-prod-a82kdh93kals92kdkals92kdn4o5',
      status: 'active',
      createTime: '2026-03-25 10:24:38',
      expireTime: '永不过期',
    },
    {
      id: '2',
      name: '测试环境',
      description: '仅用于 dev 环境联调测试，请勿在正式环境中使用',
      apiKey: 'sk-prod-9e1d8ckals92kfdf2a71d8e92000',
      status: 'inactive',
      createTime: '2025-05-18 14:30:15',
      expireTime: '2026-05-18 14:30:15',
    },
    {
      id: '3',
      name: '过期密钥',
      description: '历史遗留配置，已不可使用',
      apiKey: 'sk-prod-8dka93kdkals92kfdf2a71aaaaaa',
      status: 'expired',
      createTime: '2024-01-10 12:00:00',
      expireTime: '2025-01-10 12:00:00',
    },
  ]);

  const toggleShowKey = (id: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success('API KEY 已成功复制到剪贴板');
  };

  // 脱敏处理
  const maskApiKey = (key: string) => {
    if (!key || key.length < 10) return key;
    return `${key.slice(0, 10)}••••••••••••••••••••${key.slice(-4)}`;
  };

  const columns: ProColumns<ApiKeyItem>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      search: false,
    },
    {
      title: 'API KEY',
      dataIndex: 'apiKey',
      key: 'apiKey',
      width: 320,
      render: (_, record) => {
        const visible = showKeys[record.id];
        return (
          <Space size={8}>
            <Text className="font-mono">
              {visible ? record.apiKey : maskApiKey(record.apiKey)}
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
                onClick={() => copyToClipboard(record.apiKey)}
              />
            </Tooltip>
          </Space>
        );
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      search: false,
    },
    {
      title: '过期时间',
      dataIndex: 'expireTime',
      key: 'expireTime',
      search: false,
      render: (_, record) => (
        <Text type={record.expireTime === '永不过期' ? 'success' : undefined}>
          {record.expireTime}
        </Text>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      search: false,
      render: (_, record) => {
        const status = record.status;
        let color = 'default';
        let text = '未知';
        if (status === 'active') {
          color = 'green';
          text = '活跃';
        } else if (status === 'expired') {
          color = 'orange';
          text = '已过期';
        } else if (status === 'inactive') {
          color = 'red';
          text = '停用';
        }
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
              onClick: async (r) => {
                await new Promise((resolve) => {
                  setTimeout(resolve, 2000);
                });
                setApiKeys((prev) => prev.filter((item) => item.id !== r.id));
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
      <XProTable<ApiKeyItem>
        dataSource={apiKeys}
        columns={columns}
        rowKey="id"
        headerTitle="鉴权秘钥 (API KEY)"
      />
    </WorkspaceLayout>
  );
};

export default ApiKeyPage;
