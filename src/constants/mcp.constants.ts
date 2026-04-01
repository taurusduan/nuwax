import { dict } from '@/services/i18nRuntime';
import { AgentComponentTypeEnum } from '@/types/enums/agent';
import {
  FilterDeployEnum,
  McpEditHeadMenusEnum,
  McpInstallTypeEnum,
  McpManageSegmentedEnum,
  McpMoreActionEnum,
} from '@/types/enums/mcp';

// 过滤部署状态
export const FILTER_DEPLOY = [
  { value: FilterDeployEnum.All, label: dict('PC.Common.Global.all') },
  {
    value: FilterDeployEnum.Deployed,
    label: dict('PC.Constants.Mcp.deployed'),
  },
];

// MCP更多操作
export const MCP_MORE_ACTION = [
  {
    type: McpMoreActionEnum.Stop_Service,
    label: dict('PC.Constants.Mcp.stopService'),
  },
  {
    type: McpMoreActionEnum.Service_Export,
    label: dict('PC.Constants.Mcp.serviceExport'),
  },
  { type: McpMoreActionEnum.Log, label: dict('PC.Common.Global.log') },
  {
    type: McpMoreActionEnum.Del,
    label: dict('PC.Common.Global.delete'),
    isDel: true,
  },
];

// MCP安装方式列表
export const MCP_INSTALL_TYPE_LIST = [
  { value: McpInstallTypeEnum.NPX, label: 'npx' },
  { value: McpInstallTypeEnum.UVX, label: 'uvx' },
  { value: McpInstallTypeEnum.SSE, label: 'sse' },
  { value: McpInstallTypeEnum.STREAMABLE_HTTP, label: 'streamableHttp' },
  {
    value: McpInstallTypeEnum.COMPONENT,
    label: dict('PC.Constants.Space.componentLibrary'),
  },
];

// MCP服务配置组件列表
export const MCP_COLLAPSE_COMPONENT_LIST: {
  type: AgentComponentTypeEnum;
  label: string;
}[] = [
  {
    type: AgentComponentTypeEnum.Agent,
    label: '智能体',
  },
  {
    type: AgentComponentTypeEnum.Plugin,
    label: '插件',
  },
  {
    type: AgentComponentTypeEnum.Workflow,
    label: '工作流',
  },
  {
    type: AgentComponentTypeEnum.Knowledge,
    label: '知识库',
  },
  {
    type: AgentComponentTypeEnum.Table,
    label: '数据表',
  },
];

// MCP编辑head菜单列表
export const MCP_EDIT_HEAD_MENU_LIST = [
  { value: McpEditHeadMenusEnum.Overview, label: '概览' },
  { value: McpEditHeadMenusEnum.Tool, label: '工具' },
  { value: McpEditHeadMenusEnum.Resource, label: '资源' },
  { value: McpEditHeadMenusEnum.Prompt, label: '提示词' },
];

// MCP管理分段器列表
export const MCP_MANAGE_SEGMENTED_LIST = [
  { value: McpManageSegmentedEnum.Custom, label: '自定义服务' },
  { value: McpManageSegmentedEnum.Official, label: '官方服务' },
];
