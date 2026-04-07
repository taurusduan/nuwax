import WorkspaceLayout from '@/components/WorkspaceLayout';
import { apiI18nDeleteLang, apiI18nLangList } from '@/services/i18n';
import { dict } from '@/services/i18nRuntime';
import {
  I18nLangIsDefaultEnum,
  type I18nLangDto,
} from '@/types/interfaces/i18n';
import { modalConfirm } from '@/utils/ant-custom';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import { ColumnType } from 'antd/lib/table';
import React, { useState } from 'react';
import { useRequest } from 'umi';
import AddLangModal from './AddLangModal';

/**
 * 语言列表管理页面
 */
const I18nManage: React.FC = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [langInfo, setLangInfo] = useState<I18nLangDto | null>(null);

  // 查看语言
  const handleView = (record: I18nLangDto) => {
    // TODO: 查看详情逻辑
    console.log('view', record);
  };

  // 编辑语言
  const handleEdit = (record: I18nLangDto) => {
    setLangInfo(record);
    setAddModalOpen(true);
  };

  // 新增语言
  const handleAdd = () => {
    setLangInfo(null);
    setAddModalOpen(true);
  };

  // 查询语言列表
  const {
    data: langList = [],
    loading,
    run: refresh,
  } = useRequest(apiI18nLangList);

  // 删除语言
  const { run: runDeleteLang } = useRequest(apiI18nDeleteLang, {
    manual: true,
    onSuccess: () => {
      refresh();
    },
  });

  // 删除语言
  const handleDelete = (record: I18nLangDto) => {
    modalConfirm(
      '删除语言',
      `您确定要删除语言「${record.name}」吗？删除后将无法恢复。`,
      async () => {
        await runDeleteLang(record.id);
        return Promise.resolve();
      },
    );
  };

  // Table columns.
  const columns: ColumnType<I18nLangDto>[] = [
    {
      title: dict('PC.Pages.SystemConfigI18n.columnName'),
      dataIndex: 'name',
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnLang'),
      dataIndex: 'lang',
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnDefault'),
      dataIndex: 'isDefault',
      render: (isDefault) =>
        isDefault === 1 ? (
          <Tag color="success">
            {dict('PC.Pages.SystemConfigI18n.defaultYes')}
          </Tag>
        ) : (
          <Tag>{dict('PC.Pages.SystemConfigI18n.defaultNo')}</Tag>
        ),
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnStatus'),
      dataIndex: 'status',
      render: (status) =>
        status === 1 ? (
          <Tag color="processing">
            {dict('PC.Pages.SystemConfigI18n.statusEnabled')}
          </Tag>
        ) : (
          <Tag color="default">
            {dict('PC.Pages.SystemConfigI18n.statusDisabled')}
          </Tag>
        ),
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnSort'),
      dataIndex: 'sort',
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnModified'),
      dataIndex: 'modified',
      render: (modified) => new Date(modified).toLocaleString(),
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnCreated'),
      dataIndex: 'created',
      render: (created) => new Date(created).toLocaleString(),
    },
    {
      title: dict('PC.Pages.SystemConfigI18n.columnAction'),
      key: 'actions',
      width: 140,
      render: (_value, record) => {
        const isDefaultLang = record.isDefault === I18nLangIsDefaultEnum.Yes;
        return (
          <Space size="small">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => handleView(record)}
            />
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
            <Tooltip title={isDefaultLang ? '默认语言不能删除' : ''}>
              <Button
                type="text"
                icon={<DeleteOutlined />}
                disabled={isDefaultLang}
                onClick={() => handleDelete(record)}
              />
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <WorkspaceLayout
      title={dict('PC.Pages.SystemConfigI18n.manageTitle')}
      rightSlot={
        <>
          <Button type="primary" onClick={() => refresh()}>
            {dict('PC.Common.Global.refresh')}
          </Button>
          <Button type="primary" onClick={() => handleAdd()}>
            {dict('PC.Pages.SystemConfigI18n.addLang')}
          </Button>
        </>
      }
    >
      <Table<I18nLangDto>
        rowKey="id"
        loading={loading}
        dataSource={langList}
        pagination={false}
        columns={columns}
      />

      {/* 新增语言弹窗 */}
      <AddLangModal
        open={addModalOpen}
        langInfo={langInfo}
        onCancel={() => {
          setAddModalOpen(false);
          setLangInfo(null);
        }}
        onSuccess={() => {
          setAddModalOpen(false);
          setLangInfo(null);
          refresh();
        }}
      />
    </WorkspaceLayout>
  );
};

export default I18nManage;
