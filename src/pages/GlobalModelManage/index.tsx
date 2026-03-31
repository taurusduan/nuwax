import {
  ActionItem,
  TableActions,
  XProTable,
} from '@/components/ProComponents';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import { SUCCESS_CODE } from '@/constants/codes.constants';
import { dict } from '@/services/i18nRuntime';
import {
  apiSystemModelAccessControl,
  apiSystemModelDelete,
  apiSystemModelList,
  apiSystemModelSave,
} from '@/services/systemManage';
import { CreateUpdateModeEnum } from '@/types/enums/common';
import { ModelTypeEnum } from '@/types/enums/modelConfig';
import { ModelComponentStatusEnum } from '@/types/enums/space';
import { AccessControlEnum } from '@/types/enums/systemManage';
import { ModelConfigDto } from '@/types/interfaces/systemManage';
import { PlusOutlined } from '@ant-design/icons';
import type {
  ActionType,
  FormInstance,
  ProColumns,
} from '@ant-design/pro-components';
import { Button, message, Switch } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useModel } from 'umi';
import CreateModel from '../SpaceLibrary/CreateModel';
import TargetAuthModal from '../SystemManagement/Content/components/TargetAuthModal';

/**
 * 公共模型管理页面 (原全局模型管理)
 */
const GlobalModelManage: React.FC = () => {
  const { hasPermission } = useModel('menuModel');
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(false);
  const [modelId, setModelId] = useState<number>();
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [currentAuthModelId, setCurrentAuthModelId] = useState<number | null>(
    null,
  );
  const [currentAuthModelName, setCurrentAuthModelName] = useState<string>('');
  // 管控状态切换 loading 状态
  const [accessControlLoadingMap, setAccessControlLoadingMap] = useState<
    Record<number, boolean>
  >({});

  const selectOptions = [
    { label: dict('NuwaxPC.Pages.GlobalModelManage.all'), value: '' },
    { label: dict('NuwaxPC.Pages.GlobalModelManage.chatText'), value: ModelTypeEnum.Chat },
    { label: dict('NuwaxPC.Pages.GlobalModelManage.embeddings'), value: ModelTypeEnum.Embeddings },
    { label: dict('NuwaxPC.Pages.GlobalModelManage.chatMultiModal'), value: ModelTypeEnum.Multi },
  ];

  // 删除模型
  const handleConfirmDelete = async (id: number) => {
    const res = await apiSystemModelDelete({ id });
    if (res.code === SUCCESS_CODE) {
      message.success(dict('NuwaxPC.Toast.Global.deletedSuccessfully'));
      actionRef.current?.reload();
    } else {
      message.error(res.message || dict('NuwaxPC.Pages.GlobalModelManage.deleteFailed'));
    }
  };

  /**
   * 切换管控状态
   */
  const handleAccessControlChange = useCallback(
    async (record: ModelConfigDto, checked: boolean) => {
      const newStatus = checked
        ? AccessControlEnum.Filter
        : AccessControlEnum.NoFilter;
      setAccessControlLoadingMap((prev) => ({
        ...prev,
        [record.id]: true,
      }));
      try {
        const response = await apiSystemModelAccessControl(
          record.id,
          newStatus,
        );
        if (response.code === SUCCESS_CODE) {
          actionRef.current?.reload();
        } else {
          message.error(response.message || dict('NuwaxPC.Pages.GlobalModelManage.accessControlUpdateFailed'));
        }
      } finally {
        setAccessControlLoadingMap((prev) => ({
          ...prev,
          [record.id]: false,
        }));
      }
    },
    [],
  );

  const handleReset = useCallback(() => {
    // 重置表单
    formRef.current?.resetFields();
    // 重置表格状态
    actionRef.current?.reset?.();
    // 设置分页参数:第1页,每页15条
    actionRef.current?.setPageInfo?.({ current: 1, pageSize: 15 });
    // 延迟一下再重新加载,确保分页参数已设置
    actionRef.current?.reload();
  }, []);

  // 监听 location.state 变化
  // 当 state 中存在 _t 变量时，说明是通过菜单切换过来的，需要清空 query 参数
  useEffect(() => {
    const state = location.state as any;
    if (state?._t) {
      handleReset();
    }
  }, [location.state, handleReset]);

  // 操作列配置
  const getActions = useCallback(
    (record: ModelConfigDto): ActionItem<ModelConfigDto>[] => {
      return [
        {
          key: 'edit',
          label: dict('NuwaxPC.Pages.GlobalModelManage.edit'),
          disabled: !hasPermission('model_manage_modify'),
          onClick: () => {
            setModelId(record.id);
            setVisible(true);
          },
        },
        {
          key: 'auth',
          label: dict('NuwaxPC.Pages.GlobalModelManage.auth'),
          // 只有开启管控才显示授权按钮
          isShow: record.accessControl === AccessControlEnum.Filter,
          disabled: !hasPermission('model_manage_access_control'),
          onClick: () => {
            setCurrentAuthModelId(record.id);
            setCurrentAuthModelName(record.name);
            setAuthModalOpen(true);
          },
        },
        {
          key: 'delete',
          label: dict('NuwaxPC.Common.Global.delete'),
          confirm: {
            title: dict('NuwaxPC.Pages.GlobalModelManage.deleteModel'),
            description: (
              <div>
                {dict('NuwaxPC.Pages.GlobalModelManage.confirmDeleteModel', <span style={{ color: 'red' }}>{record.name}</span>)}
              </div>
            ),
          },
          disabled: !hasPermission('model_manage_delete'),
          onClick: (r) => handleConfirmDelete(r.id),
        },
      ];
    },
    [hasPermission],
  );

  const columns: ProColumns<ModelConfigDto>[] = [
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnModelName'),
      dataIndex: 'name',
      width: 200,
      fixed: 'left',
      hideInSearch: true,
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnType'),
      dataIndex: 'type',
      width: 160,
      valueType: 'select',
      valueEnum: {
        [ModelTypeEnum.Chat]: { text: dict('NuwaxPC.Pages.GlobalModelManage.chatText') },
        [ModelTypeEnum.Embeddings]: { text: dict('NuwaxPC.Pages.GlobalModelManage.embeddings') },
        [ModelTypeEnum.Multi]: { text: dict('NuwaxPC.Pages.GlobalModelManage.chatMultiModal') },
      },
      fieldProps: {
        options: selectOptions.filter((v) => v.value !== ''),
      },
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnModelId'),
      dataIndex: 'model',
      width: 200,
      hideInSearch: true,
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnDescription'),
      dataIndex: 'description',
      width: 260,
      hideInSearch: true,
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnStatus'),
      dataIndex: 'enabled',
      width: 100,
      hideInSearch: true,
      valueEnum: {
        [ModelComponentStatusEnum.Enabled]: { text: dict('NuwaxPC.Pages.GlobalModelManage.statusEnabled') },
        [ModelComponentStatusEnum.Disabled]: { text: dict('NuwaxPC.Pages.GlobalModelManage.statusDisabled') },
      },
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnCreator'),
      dataIndex: ['creator', 'nickName'],
      width: 160,
      hideInSearch: true,
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnUpdateTime'),
      dataIndex: 'created',
      width: 200,
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnAccessControl'),
      tooltip: dict('NuwaxPC.Pages.GlobalModelManage.accessControlTooltip'),
      dataIndex: 'accessControl',
      align: 'center',
      width: 100,
      fixed: 'right',
      valueEnum: {
        [AccessControlEnum.NoFilter]: { text: dict('NuwaxPC.Pages.GlobalModelManage.accessControlOff'), status: 'Default' },
        [AccessControlEnum.Filter]: { text: dict('NuwaxPC.Pages.GlobalModelManage.accessControlOn'), status: 'Processing' },
      },
      valueType: 'select',
      render: (_, record: ModelConfigDto) => (
        <Switch
          checked={record.accessControl === AccessControlEnum.Filter}
          loading={accessControlLoadingMap[record.id] || false}
          onChange={(checked) => handleAccessControlChange(record, checked)}
        />
      ),
    },
    {
      title: dict('NuwaxPC.Pages.GlobalModelManage.columnActions'),
      valueType: 'option',
      width: 180,
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <TableActions<ModelConfigDto>
          record={record}
          actions={getActions(record)}
        />
      ),
    },
  ];

  const request = async (params: any) => {
    const { type } = params;
    const res = await apiSystemModelList();

    if (res.code !== SUCCESS_CODE) {
      message.error(res.message || dict('NuwaxPC.Pages.GlobalModelManage.fetchDataFailed'));
      return { data: [], total: 0, success: false };
    }

    let data = res.data || [];
    if (type) {
      data = data.filter((v) => v.type === type);
    }
    const { accessControl } = params;
    if (accessControl !== undefined) {
      data = data.filter((v) => v.accessControl === Number(accessControl));
    }

    return {
      data,
      total: data.length,
      success: true,
    };
  };

  return (
    <WorkspaceLayout
      title={dict('NuwaxPC.Pages.GlobalModelManage.pageTitle')}
      hideScroll
      rightSlot={
        hasPermission('model_manage_add') && (
          <Button
            key="add"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setModelId(undefined);
              setVisible(true);
            }}
          >
            {dict('NuwaxPC.Pages.GlobalModelManage.addModel')}
          </Button>
        )
      }
    >
      <XProTable<ModelConfigDto>
        actionRef={actionRef}
        formRef={formRef}
        rowKey="id"
        columns={columns}
        request={request}
        onReset={handleReset}
        showQueryButtons={hasPermission('model_manage_query_list')}
      />
      {visible && (
        <CreateModel
          action={apiSystemModelSave}
          id={modelId}
          mode={
            modelId ? CreateUpdateModeEnum.Update : CreateUpdateModeEnum.Create
          }
          open={visible}
          onCancel={() => setVisible(false)}
          onConfirm={() => {
            setVisible(false);
            actionRef.current?.reload();
          }}
        />
      )}
      <TargetAuthModal
        open={authModalOpen}
        targetId={currentAuthModelId || 0}
        targetType="model"
        targetName={currentAuthModelName}
        onCancel={() => {
          setAuthModalOpen(false);
          setCurrentAuthModelId(null);
          setCurrentAuthModelName('');
        }}
      />
    </WorkspaceLayout>
  );
};

export default GlobalModelManage;
