import { XModalForm } from '@/components/ProComponents';
import { t } from '@/services/i18nRuntime';
import { ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Form } from 'antd';
import React, { useEffect } from 'react';

import { SandboxConfigItem as SandboxItem } from '@/types/interfaces/systemManage';

// Default sandbox configuration values
const DEFAULT_SANDBOX_CONFIG_VALUE = {
  agentPort: 9086,
  vncPort: 9088,
  fileServerPort: 60001,
  maxUsers: 30,
};

interface SandboxModalProps {
  open: boolean;
  mode: 'add' | 'edit';
  initialData?: SandboxItem | null;
  onCancel: () => void;
  onFinish: (values: any) => Promise<boolean>;
}

const SandboxModal: React.FC<SandboxModalProps> = ({
  open,
  mode,
  initialData,
  onCancel,
  onFinish,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      if (mode === 'edit' && initialData) {
        form.setFieldsValue({
          name: initialData.name,
          configValue: initialData.configValue,
        });
      } else {
        form.resetFields();
        // Set default values
        form.setFieldsValue({
          configValue: DEFAULT_SANDBOX_CONFIG_VALUE,
        });
      }
    }
  }, [open, mode, initialData, form]);

  return (
    <XModalForm
      title={
        mode === 'add'
          ? t('NuwaxPC.Pages.SystemConfigSandboxModal.addTitle')
          : t('NuwaxPC.Pages.SystemConfigSandboxModal.editTitle')
      }
      open={open}
      form={form}
      grid={true}
      autoFocusFirstInput
      modalProps={{
        destroyOnHidden: true,
        onCancel: onCancel,
      }}
      submitter={{
        searchConfig: {
          resetText: t('NuwaxPC.Common.Global.cancel'),
          submitText: t('NuwaxPC.Common.Global.save'),
        },
      }}
      onFinish={onFinish}
    >
      <ProFormText
        name="name"
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.name')}
        placeholder={t(
          'NuwaxPC.Pages.SystemConfigSandboxModal.namePlaceholder',
        )}
        colProps={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.nameRequired'),
          },
          {
            max: 100,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.nameMaxLength'),
          },
        ]}
        fieldProps={{
          maxLength: 100,
          showCount: true,
        }}
      />
      <ProFormText
        name={['configValue', 'hostWithScheme']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.host')}
        placeholder={t(
          'NuwaxPC.Pages.SystemConfigSandboxModal.hostPlaceholder',
        )}
        colProps={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.hostRequired'),
          },
          {
            max: 255,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.hostMaxLength'),
          },
          {
            pattern: /^https?:\/\/.+/,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.hostInvalid'),
          },
        ]}
        fieldProps={{
          maxLength: 255,
          showCount: true,
        }}
      />
      <ProFormDigit
        name={['configValue', 'agentPort']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.agentPort')}
        placeholder="9086"
        colProps={{ span: 8 }}
        fieldProps={{ precision: 0, min: 1, max: 65535 }}
        rules={[
          {
            required: true,
            message: t(
              'NuwaxPC.Pages.SystemConfigSandboxModal.agentPortRequired',
            ),
          },
        ]}
      />
      <ProFormDigit
        name={['configValue', 'vncPort']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.vncPort')}
        placeholder="9088"
        colProps={{ span: 8 }}
        fieldProps={{ precision: 0, min: 1, max: 65535 }}
        rules={[
          {
            required: true,
            message: t(
              'NuwaxPC.Pages.SystemConfigSandboxModal.vncPortRequired',
            ),
          },
        ]}
      />
      <ProFormDigit
        name={['configValue', 'fileServerPort']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.fileServerPort')}
        placeholder="60001"
        colProps={{ span: 8 }}
        fieldProps={{ precision: 0, min: 1, max: 65535 }}
        rules={[
          {
            required: true,
            message: t(
              'NuwaxPC.Pages.SystemConfigSandboxModal.fileServerPortRequired',
            ),
          },
        ]}
      />
      <ProFormText
        name={['configValue', 'apiKey']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.apiKey')}
        placeholder={t(
          'NuwaxPC.Pages.SystemConfigSandboxModal.apiKeyPlaceholder',
        )}
        colProps={{ span: 24 }}
        fieldProps={{
          maxLength: 128,
          showCount: true,
        }}
      />
      <ProFormDigit
        name={['configValue', 'maxUsers']}
        label={t('NuwaxPC.Pages.SystemConfigSandboxModal.maxUsers')}
        placeholder="30"
        colProps={{ span: 8 }}
        fieldProps={{ precision: 0, min: 1, max: 9999 }}
        rules={[
          {
            required: true,
            message: t(
              'NuwaxPC.Pages.SystemConfigSandboxModal.maxUsersRequired',
            ),
          },
          {
            type: 'number',
            max: 9999,
            message: t('NuwaxPC.Pages.SystemConfigSandboxModal.maxUsersMax'),
          },
        ]}
      />
    </XModalForm>
  );
};

export default SandboxModal;
