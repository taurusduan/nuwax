import WorkspaceLayout from '@/components/WorkspaceLayout';
import { apiI18nLangList } from '@/services/i18n';
import { dict } from '@/services/i18nRuntime';
import type { I18nLangDto } from '@/types/interfaces/i18n';
import { Button, Table, Tag } from 'antd';
import React from 'react';
import { useRequest } from 'umi';

const I18nManage: React.FC = () => {
  const {
    data: langResponse = [],
    loading,
    refresh,
  } = useRequest(apiI18nLangList);
  const langList: I18nLangDto[] = Array.isArray(langResponse)
    ? langResponse
    : (langResponse as any)?.data || [];

  return (
    <WorkspaceLayout
      title={dict('NuwaxPC.Pages.SystemConfigI18n.manageTitle')}
      extraContent={
        <Button type="primary" onClick={() => refresh()}>
          {dict('NuwaxPC.Common.Global.refresh')}
        </Button>
      }
    >
      <Table<I18nLangDto>
        rowKey="id"
        loading={loading}
        dataSource={langList}
        pagination={false}
        columns={[
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnName'),
            dataIndex: 'name',
          },
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnLang'),
            dataIndex: 'lang',
          },
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnDefault'),
            dataIndex: 'isDefault',
            render: (isDefault) =>
              isDefault === 1 ? (
                <Tag color="success">
                  {dict('NuwaxPC.Pages.SystemConfigI18n.defaultYes')}
                </Tag>
              ) : (
                <Tag>{dict('NuwaxPC.Pages.SystemConfigI18n.defaultNo')}</Tag>
              ),
          },
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnStatus'),
            dataIndex: 'status',
            render: (status) =>
              status === 1 ? (
                <Tag color="processing">
                  {dict('NuwaxPC.Pages.SystemConfigI18n.statusEnabled')}
                </Tag>
              ) : (
                <Tag color="default">
                  {dict('NuwaxPC.Pages.SystemConfigI18n.statusDisabled')}
                </Tag>
              ),
          },
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnSort'),
            dataIndex: 'sort',
          },
          {
            title: dict('NuwaxPC.Pages.SystemConfigI18n.columnModified'),
            dataIndex: 'modified',
          },
        ]}
      />
    </WorkspaceLayout>
  );
};

export default I18nManage;
