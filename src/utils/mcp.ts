import { DeployStatusEnum } from '@/types/enums/mcp';
import { dict } from '@/services/i18nRuntime';

// 获取mcp部署状态
export const getMcpDeployStatus = (status?: DeployStatusEnum) => {
  switch (status) {
    case DeployStatusEnum.Initialization:
      return dict('NuwaxPC.Utils.Mcp.pendingDeploy');
    case DeployStatusEnum.Deploying:
      return dict('NuwaxPC.Utils.Mcp.deploying');
    case DeployStatusEnum.Deployed:
      return dict('NuwaxPC.Utils.Mcp.deployed');
    case DeployStatusEnum.DeployFailed:
      return dict('NuwaxPC.Utils.Mcp.deployFailed');
    case DeployStatusEnum.Stopped:
      return dict('NuwaxPC.Utils.Mcp.stopped');
    default:
      return '';
  }
};
