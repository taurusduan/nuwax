import WorkspaceLayout from '@/components/WorkspaceLayout';
import { apiI18nLangList } from '@/services/i18n';
import { dict } from '@/services/i18nRuntime';
import type { I18nLangDto } from '@/types/interfaces/i18n';
import { Button, Table, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import React from 'react';
import { useRequest } from 'umi';

/**
 * 语言列表管理页面
 */
const I18nManage: React.FC = () => {
  // 查询语言列表
  const {
    data: langList = [],
    loading,
    run: refresh,
  } = useRequest(apiI18nLangList);

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
  ];

  return (
    <WorkspaceLayout
      title={dict('PC.Pages.SystemConfigI18n.manageTitle')}
      rightSlot={
        <Button type="primary" onClick={() => refresh()}>
          {dict('PC.Common.Global.refresh')}
        </Button>
      }
    >
      <Table<I18nLangDto>
        rowKey="id"
        loading={loading}
        dataSource={langList}
        pagination={false}
        columns={columns}
      />
    </WorkspaceLayout>
  );
};

export default I18nManage;
