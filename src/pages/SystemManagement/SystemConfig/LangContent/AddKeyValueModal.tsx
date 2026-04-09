import CustomFormModal from '@/components/CustomFormModal';
import { apiI18nConfigAddOrUpdate } from '@/services/i18n';
import { dict } from '@/services/i18nRuntime';
import type { I18nSlideLangInfo } from '@/types/interfaces/i18n';
import { customizeRequiredMark } from '@/utils/form';
import { Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useRequest } from 'umi';

interface AddKeyValueModalProps {
  // 是否打开
  open: boolean;
  // 编辑时的当前项
  currentItem?: I18nSlideLangInfo | null;
  // 语言
  lang: string;
  // 取消回调
  onCancel: () => void;
  onSuccess: () => void;
}

interface AddKeyValueFormValues {
  key: string;
  value: string;
  remark?: string;
}

/**
 * 新增或编辑键值对弹窗
 */
const AddKeyValueModal: React.FC<AddKeyValueModalProps> = ({
  open,
  currentItem,
  lang,
  onCancel,
  onSuccess,
}) => {
  const isEdit = Boolean(currentItem?.key);
  // 表单
  const [form] = Form.useForm<AddKeyValueFormValues>();

  // 新增或更新多语言配置
  const { run: runAddOrUpdate, loading } = useRequest(
    apiI18nConfigAddOrUpdate,
    {
      manual: true,
      onSuccess: () => {
        message.success(
          isEdit
            ? dict('PC.Pages.SystemConfig.LangContent.updateSuccess')
            : dict('PC.Pages.SystemConfig.LangContent.addSuccess'),
        );
        form.resetFields();
        onSuccess();
      },
    },
  );

  // 初始化表单
  useEffect(() => {
    if (!open) return;
    form.resetFields();
    // 编辑时，设置表单值
    if (isEdit && currentItem) {
      form.setFieldsValue({
        key: currentItem.key,
        value: currentItem.value,
        remark: currentItem.remark,
      });
    }
  }, [open, isEdit, currentItem, form]);

  // 添加键值对
  const handleOk = async () => {
    const values = await form.validateFields();
    const keyText = values.key.trim();
    await runAddOrUpdate({
      ...values,
      lang,
      key: keyText,
    });
  };

  return (
    <CustomFormModal
      form={form}
      title={
        isEdit
          ? dict('PC.Pages.SystemConfig.LangContent.editKeyValTitle')
          : dict('PC.Pages.SystemConfig.LangContent.addKeyValTitle')
      }
      open={open}
      onCancel={onCancel}
      onConfirm={handleOk}
      okText={
        isEdit
          ? dict('PC.Pages.SystemConfig.LangContent.updateBtn')
          : dict('PC.Pages.SystemConfig.LangContent.addBtn')
      }
      loading={loading}
    >
      <Form form={form} layout="vertical" requiredMark={customizeRequiredMark}>
        <Form.Item
          label="Key"
          name="key"
          rules={[
            {
              required: true,
              message: dict('PC.Pages.SystemConfig.LangContent.keyRequired'),
            },
          ]}
        >
          <Input
            placeholder={dict(
              'PC.Pages.SystemConfig.LangContent.keyPlaceholder',
            )}
            disabled={isEdit}
          />
        </Form.Item>
        <Form.Item
          label={dict('PC.Pages.SystemConfig.LangContent.textContentLabel')}
          name="value"
          rules={[
            {
              required: true,
              message: dict(
                'PC.Pages.SystemConfig.LangContent.textContentRequired',
              ),
            },
          ]}
        >
          <Input
            placeholder={dict(
              'PC.Pages.SystemConfig.LangContent.textContentPlaceholder',
            )}
          />
        </Form.Item>
        <Form.Item
          label={dict('PC.Pages.SystemConfig.LangContent.remarkLabel')}
          name="remark"
        >
          <Input.TextArea
            placeholder={dict(
              'PC.Pages.SystemConfig.LangContent.remarkPlaceholder',
            )}
            autoSize={{ minRows: 3, maxRows: 4 }}
          />
        </Form.Item>
      </Form>
    </CustomFormModal>
  );
};

export default AddKeyValueModal;
