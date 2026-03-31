import { TableActions, XProTable } from '@/components/ProComponents';
import { SUCCESS_CODE } from '@/constants/codes.constants';
import {
  apiDeleteSpaceUser,
  apiGetSpaceUserList,
} from '@/services/teamSetting';
import { dict } from '@/services/i18nRuntime';
import { TeamStatusEnum } from '@/types/enums/teamSetting';
import type { SpaceUserInfo } from '@/types/interfaces/teamSetting';
import { PlusOutlined } from '@ant-design/icons';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, message } from 'antd'; // Added Tag
import React, { useRef, useState } from 'react';
import AddMember from './AddMember';

interface MemberManageTabProps {
  spaceId: number;
  role: TeamStatusEnum | undefined;
}

const MemberManageTab: React.FC<MemberManageTabProps> = ({ spaceId, role }) => {
  const actionRef = useRef<ActionType>();
  const [openAddMemberModal, setOpenAddMemberModal] = useState<boolean>(false);

  const handlerConfirmAddMember = () => {
    setOpenAddMemberModal(false);
    actionRef.current?.reload();
  };

  const request = async (params: any) => {
    const { current = 1, pageSize = 10, role, kw } = params;
    try {
      const res = await apiGetSpaceUserList({
        spaceId,
        role: role || undefined, // empty string to undefined
        kw,
      });

      if (res.code === SUCCESS_CODE) {
        const allList = res.data || [];
        // Manual pagination
        const start = (current - 1) * pageSize;
        const end = start + pageSize;
        const pageList = allList.slice(start, end);
        return {
          data: pageList,
          total: allList.length,
          success: true,
        };
      }
      return { data: [], total: 0, success: false };
    } catch (e) {
      return { data: [], total: 0, success: false };
    }
  };

  const removeUser = async (userId: number) => {
    const resp = await apiDeleteSpaceUser({ userId, spaceId });
    if (resp.code === SUCCESS_CODE) {
      message.success(dict('NuwaxPC.Toast.Global.deletedSuccessfully'));
      actionRef.current?.reload();
    }
  };

  const columns: ProColumns<SpaceUserInfo>[] = [
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.keyword'),
      dataIndex: 'kw',
      hideInTable: true,
      fieldProps: {
        placeholder: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.search'),
      },
    },
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.nickname'),
      dataIndex: 'nickName',
      search: false,
    },
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.username'),
      dataIndex: 'userName',
      search: false,
    },
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.role'),
      dataIndex: 'role',
      valueType: 'select',
      valueEnum: {
        [TeamStatusEnum.Owner]: { text: dict('NuwaxPC.Pages.TeamSetting.roleOwner') },
        [TeamStatusEnum.Admin]: { text: dict('NuwaxPC.Pages.TeamSetting.roleAdmin') },
        [TeamStatusEnum.User]: { text: dict('NuwaxPC.Pages.TeamSetting.roleMember') },
      },
      render: (_: any, record: SpaceUserInfo) => {
        const role = record.role;
        let text = dict('NuwaxPC.Pages.TeamSetting.roleMember');
        if (role === TeamStatusEnum.Owner) text = dict('NuwaxPC.Pages.TeamSetting.roleOwner');
        if (role === TeamStatusEnum.Admin) text = dict('NuwaxPC.Pages.TeamSetting.roleAdmin');
        return text;
      },
    },
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.joinTime'),
      dataIndex: 'created',
      search: false,
      width: 180,
      valueType: 'dateTime',
    },
    {
      title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.action'),
      valueType: 'option',
      align: 'center',
      width: 160,
      hideInTable: role === TeamStatusEnum.User, // Hide column if current user is just a member
      render: (_: any, record: SpaceUserInfo) => (
        <TableActions
          record={record}
          actions={[
            {
              key: 'delete',
              label: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.delete'),
              confirm: {
                title: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.confirmDelete'),
                description: dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.confirmDeleteUser'),
              },
              onClick: () => removeUser(record.userId),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <XProTable<SpaceUserInfo>
        actionRef={actionRef}
        rowKey="userId"
        columns={columns}
        request={request}
        toolBarRender={() => [
          role !== TeamStatusEnum.User && (
            <Button
              key="add"
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setOpenAddMemberModal(true)}
            >
              {dict('NuwaxPC.Pages.TeamSetting.MemberManageTab.addMember')}
            </Button>
          ),
        ]}
      />
      <AddMember
        spaceId={spaceId}
        open={openAddMemberModal}
        onCancel={() => setOpenAddMemberModal(false)}
        onConfirmAdd={handlerConfirmAddMember}
      />
    </>
  );
};

export default MemberManageTab;
