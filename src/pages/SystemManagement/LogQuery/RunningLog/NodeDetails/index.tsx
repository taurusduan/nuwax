import { EllipsisTooltip } from '@/components/custom/EllipsisTooltip';
import { t } from '@/services/i18nRuntime';
import { AgentComponentTypeEnum } from '@/types/enums/agent';
import classNames from 'classnames';
import dayjs from 'dayjs';
import type React from 'react';
import { useMemo } from 'react';
import { FinalResult } from '../LogDetailDrawer';
import styles from './index.less';

const cx = classNames.bind(styles);

export interface NodeDetailsProps {
  node: FinalResult | null;
}

// 节点详情
export const NodeDetails: React.FC<NodeDetailsProps> = ({ node }) => {
  const renderDetailItem = (
    label: string,
    value: string | number,
    className?: string,
  ) => {
    return (
      <div className={cx('flex', styles.box, className)}>
        <span className={cx(styles.label)}>{label}：</span>
        <EllipsisTooltip
          text={value || '--'}
          className={cx(styles.value, 'flex-1')}
        />
      </div>
    );
  };
  // 耗时
  const time = node
    ? `${node?.requestEndTime - node?.requestStartTime}ms`
    : '--';

  const nodeTypeName = useMemo(() => {
    switch (node?.targetType) {
      case AgentComponentTypeEnum.Agent:
        return t('NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeAgent');
      case AgentComponentTypeEnum.Plugin:
        return t('NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypePlugin');
      case AgentComponentTypeEnum.Workflow:
        return t(
          'NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeWorkflow',
        );
      case AgentComponentTypeEnum.Knowledge:
        return t(
          'NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeKnowledge',
        );
      case AgentComponentTypeEnum.Variable:
        return t(
          'NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeVariable',
        );
      case AgentComponentTypeEnum.Table:
        return t('NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeTable');
      case AgentComponentTypeEnum.Model:
        return t('NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeModel');
      case AgentComponentTypeEnum.MCP:
        return 'MCP';
      case AgentComponentTypeEnum.ToolCall:
        return t(
          'NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypeToolCall',
        );
      case AgentComponentTypeEnum.Plan:
        return t('NuwaxPC.Pages.SystemRunningLogNodeDetails.targetTypePlan');
      default:
        return '--';
    }
  }, [node?.targetType]);

  return (
    <>
      <div className={cx(styles.container)}>
        {renderDetailItem(
          t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelType'),
          nodeTypeName,
        )}
        {renderDetailItem(
          t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelStatus'),
          t('NuwaxPC.Pages.SystemRunningLogNodeDetails.statusSuccess'),
        )}
        {renderDetailItem(
          t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelName'),
          node?.targetName as string,
        )}
        {renderDetailItem(
          t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelElapsed'),
          time,
        )}
      </div>
      {renderDetailItem(
        t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelStartTime'),
        node?.requestStartTime
          ? dayjs(node?.requestStartTime).format('YYYY-MM-DD HH:mm')
          : '',
        styles['mt-10'],
      )}
      <div />
      {renderDetailItem(
        t('NuwaxPC.Pages.SystemRunningLogNodeDetails.labelEndTime'),
        node?.requestEndTime
          ? dayjs(node?.requestEndTime).format('YYYY-MM-DD HH:mm')
          : '',
        styles['mt-10'],
      )}
    </>
  );
};
