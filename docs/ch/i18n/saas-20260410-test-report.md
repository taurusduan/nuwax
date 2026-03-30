# 测试与验证记录

## 2026-03-30

### 已执行

- 命令：`pnpm exec tsc --noEmit`
  - 结果：失败（项目历史问题：缺少 `testing-library__jest-dom` 类型定义）
- 命令：`pnpm build:dev`
  - 结果：失败（当前环境依赖问题：`No such module: http_parser`）
- 命令：`pnpm test -- --run`
  - 结果：失败（项目历史问题：`tests/*` 仍依赖 `Antv-X6/v2` 已移除路径）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（当前改动新增行未引入硬编码中文字符串）
- 命令：`pnpm exec prettier --check ...`
  - 结果：通过（本次改动文件格式合规）
- 变更说明：新增运行时自动翻译兜底层（文本节点 + 常见属性）
  - 状态：已接入，待页面级手工走查（重点关注聊天内容与编辑器区域）

### 手工验证计划

- 启动后无参调用 `/api/i18n/query`
- 个人资料语言切换成功后整页刷新
- `/api/i18n/query` 失败时缓存/英文兜底生效

### 新增验证（2026-03-30）

- 命令：`node scripts/check-hardcoded-i18n.js`
  - 结果：通过（新增行符合 i18n 治理规则）
- 命令：`node scripts/i18n-governance-report.js`
  - 结果：通过（生成 `docs/ch/i18n/saas-20260410-inventory.md`）
  - 汇总：扫描 `781` 个文件，问题总量 `4476`
- 命令：`rg -n "System\\." src --glob '**/*.{ts,tsx,js,jsx}'`
  - 结果：仅 `src/services/i18nRuntime.ts` 存在 legacy 检测逻辑，业务页面未再引用 `System.*`

### 本轮回归结论

- 登录/验证码、设置中心、导航用户区、系统配置-多语言页、AgentHeader 核心文案已切换至 `NuwaxPC.*`
- 请求层语言头透传、启动初始化、语言保存刷新链路保持可用
- 受项目历史基线影响，`tsc/build/test` 仍有既有问题（见上文“已执行”），本轮未新增相关失败

### 新增验证（components/pages 第二批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增 `components/pages` 改动符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4476` 下降至 `4462`
- 覆盖文件：
  - `src/pages/403/index.tsx`
  - `src/pages/404/index.tsx`
  - `src/pages/SetPassword/index.tsx`
  - `src/pages/Home/DraggableHomeContent/ErrorBoundary/index.tsx`
  - `src/components/NoMoreDivider/index.tsx`
  - `src/components/WorkspaceLayout/components/WorkspaceSearch/index.tsx`
  - `src/components/UploadAvatar/index.tsx`

### 新增验证（Top 模块第三批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（本批改造符合新增门禁规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4462` 下降至 `4451`
- 命令：`dict key 一致性校验（临时脚本）`
  - 结果：通过（`dict` 使用 key `112` 个，词典定义 `114` 个，缺失 `0`）
- 覆盖文件：
  - `src/pages/AppDev/components/FileOperatingMask/index.tsx`
  - `src/pages/AppDev/components/ImageViewer/index.tsx`
  - `src/pages/SystemManagement/Dashboard/components/ResourceGrid/index.tsx`
  - `src/pages/SystemManagement/LogQuery/RunningLog/index.tsx`
  - `src/pages/SystemManagement/LogQuery/OperationLog/index.tsx`
  - `src/pages/Antv-X6/components/VersionAction/index.tsx`
  - `src/pages/Antv-X6/component/data.tsx`
  - `src/pages/Antv-X6/v3/component/data.tsx`
  - `src/pages/Antv-X6/header.tsx`

### 新增验证（Top 模块第四批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4451` 下降至 `4444`
- 命令：`dict key 一致性校验（临时脚本）`
  - 结果：通过（`used=127`、`defined=128`、`missing=0`）
- 覆盖文件：
  - `src/pages/SystemManagement/TaskManage/index.tsx`
  - `src/pages/SystemManagement/Dashboard/components/SessionStats/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ChatAreaTabs.tsx`
  - `src/pages/AppDev/components/FilePathHeader/index.tsx`
  - `src/pages/Antv-X6/components/NodePanelDrawer/index.tsx`
  - `src/pages/Antv-X6/components/NewSkill/index.tsx`

### 新增验证（本地默认词典 + Top 模块第五批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4439` 下降至 `4397`
- 关键验证点：
  - 运行时兜底从“仅英文最小词典”升级为“按语言匹配本地中英文默认词典”
  - 语言缓存增加 `LANG_MAP_CACHE_LANG`，避免跨语言缓存串用
  - 服务层新增 `getI18nImportDefaults/getI18nImportDefaultMap` 作为平台维护导入默认源
- 覆盖文件：
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
  - `src/locales/i18n/index.ts`
  - `src/services/i18nRuntime.ts`
  - `src/services/i18n.ts`
  - `src/pages/AppDev/components/AppDevHeader/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx`
  - `src/pages/SystemManagement/Content/Agent/index.tsx`
  - `src/pages/Antv-X6/Published.tsx`

### 新增验证（Top 模块第六批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
  - 说明：`ToolCallProcess` 中 `总计` 识别改为 unicode 字面量并兼容 `total`
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4397` 下降至 `4339`
- 覆盖文件：
  - `src/pages/SystemManagement/Content/DataTable/index.tsx`
  - `src/pages/SystemManagement/Content/KnowledgeBase/index.tsx`
  - `src/pages/SystemManagement/Content/Mcp/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ToolCallProcess/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/MessageAttachment/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（`t()` 命名收敛 + ChatInputHome 补充）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4339` 下降至 `4328`
- 覆盖文件：
  - `src/services/i18nRuntime.ts`（新增 `t()` 导出，`dict` 兼容保留）
  - `src/pages/AppDev/components/ChatArea/components/ChatInputHome/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ToolCallProcess/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/MessageAttachment/index.tsx`
  - `src/pages/SystemManagement/Content/DataTable/index.tsx`
  - `src/pages/SystemManagement/Content/KnowledgeBase/index.tsx`
  - `src/pages/SystemManagement/Content/Mcp/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第七批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4255` 下降至 `4082`
- 覆盖文件：
  - `src/pages/SystemManagement/Content/WebApplication/index.tsx`
  - `src/pages/SystemManagement/Dashboard/index.tsx`
  - `src/pages/SystemManagement/LogQuery/OperationLog/LogProTable/index.tsx`
  - `src/pages/SystemManagement/LogQuery/OperationLog/LogDetailDrawer/index.tsx`
  - `src/pages/AppDev/components/ContentViewer/index.tsx`
  - `src/pages/AppDev/components/ChatArea/index.tsx`
  - `src/pages/AppDev/components/DesignViewer/index.tsx`
  - `src/pages/Antv-X6/component/ExceptionItem.tsx`
  - `src/pages/Antv-X6/component/commonNode.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第八批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4082` 下降至 `4050`
- 覆盖文件：
  - `src/pages/SystemManagement/LogQuery/RunningLog/LogProTable/index.tsx`
  - `src/pages/SystemManagement/LogQuery/RunningLog/NodeDetails/index.tsx`
  - `src/pages/AppDev/components/EditorHeaderRight/index.tsx`
  - `src/pages/AppDev/components/FileTreePanel/DataResourceList/index.tsx`
  - `src/pages/Antv-X6/component/eventHandlers.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第九批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `4050` 下降至 `3948`
- 覆盖文件：
  - `src/pages/SystemManagement/MenuPermission/MenuManage/components/MenuFormModal/index.tsx`
  - `src/pages/SystemManagement/MenuPermission/MenuManage/index.tsx`
  - `src/pages/AppDev/components/Preview/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十批）

- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3948` 下降至 `3922`
- 覆盖文件：
  - `src/pages/Antv-X6/component/complexNode.tsx`
  - `src/pages/SystemManagement/MenuPermission/MenuManage/components/MenuFormModal/index.tsx`
  - `src/pages/SystemManagement/MenuPermission/MenuManage/index.tsx`
  - `src/pages/AppDev/components/Preview/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十一批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/MenuPermission/PermissionResources/components/ResourceFormModal/index.tsx src/pages/SystemManagement/MenuPermission/PermissionResources/index.tsx src/pages/Antv-X6/component/database.tsx src/pages/Antv-X6/component/nodeItem.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3922` 下降至 `3811`
- 覆盖文件：
  - `src/pages/SystemManagement/MenuPermission/PermissionResources/components/ResourceFormModal/index.tsx`
  - `src/pages/SystemManagement/MenuPermission/PermissionResources/index.tsx`
  - `src/pages/Antv-X6/component/database.tsx`
  - `src/pages/Antv-X6/component/nodeItem.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十二批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/component/library.tsx src/pages/Antv-X6/component/registerCustomNodes.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3811` 下降至 `3792`
- 覆盖文件：
  - `src/pages/Antv-X6/component/library.tsx`
  - `src/pages/Antv-X6/component/registerCustomNodes.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十三批）

- 命令：`pnpm prettier --write src/pages/AppDev/components/PageEditModal/index.tsx src/pages/AppDev/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3792` 下降至 `3734`
- 覆盖文件：
  - `src/pages/AppDev/index.tsx`
  - `src/pages/AppDev/components/PageEditModal/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十四批）

- 命令：`pnpm prettier --write src/pages/AppDev/index.tsx src/pages/AppDev/components/PageEditModal/index.tsx src/pages/Antv-X6/component/runResult.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3734` 下降至 `3727`
- 覆盖文件：
  - `src/pages/Antv-X6/component/runResult.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十五批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/component/pluginNode.tsx`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3727` 下降至 `3726`
- 覆盖文件：
  - `src/pages/Antv-X6/component/pluginNode.tsx`

### 新增验证（Top 模块第十六批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/component/condition.tsx src/pages/Antv-X6/component/stencil.tsx src/pages/Antv-X6/controlPanel.tsx src/pages/Antv-X6/errorList.tsx src/pages/Antv-X6/component/graph.tsx src/pages/Antv-X6/config.ts src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3726` 下降至 `3710`
- 覆盖文件：
  - `src/pages/Antv-X6/component/condition.tsx`
  - `src/pages/Antv-X6/component/stencil.tsx`
  - `src/pages/Antv-X6/controlPanel.tsx`
  - `src/pages/Antv-X6/errorList.tsx`
  - `src/pages/Antv-X6/component/graph.tsx`
  - `src/pages/Antv-X6/config.ts`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十七批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/params.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3710` 下降至 `3600`
- 覆盖文件：
  - `src/pages/Antv-X6/params.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十八批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/Content/components/TargetAuthModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3600` 下降至 `3595`
- 覆盖文件：
  - `src/pages/SystemManagement/Content/components/TargetAuthModal/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第十九批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/MenuPermission/RoleManage/components/RoleFormModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3595` 下降至 `3573`
- 覆盖文件：
  - `src/pages/SystemManagement/MenuPermission/RoleManage/components/RoleFormModal/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第二十批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/LogQuery/RunningLog/LogDetailDrawer/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3573` 下降至 `3570`
- 覆盖文件：
  - `src/pages/SystemManagement/LogQuery/RunningLog/LogDetailDrawer/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第二十一批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/MenuPermission/RoleManage/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3570` 下降至 `3546`
- 覆盖文件：
  - `src/pages/SystemManagement/MenuPermission/RoleManage/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第二十二批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/v3/ParamsV3.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3546` 下降至 `3434`
- 覆盖文件：
  - `src/pages/Antv-X6/v3/ParamsV3.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第二十三批）

- 命令：`pnpm prettier --write src/pages/Antv-X6/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3434` 下降至 `3423`
- 覆盖文件：
  - `src/pages/Antv-X6/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`

### 新增验证（Top 模块第二十四批）

- 命令：`pnpm prettier --write src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - 结果：通过（本批改动文件格式化完成）
- 命令：`pnpm run check:i18n-hardcoded`
  - 结果：通过（新增行符合治理规则）
- 命令：`pnpm run report:i18n-governance`
  - 结果：通过（重新生成 inventory）
  - 汇总：问题总量从 `3423` 下降至 `3373`
- 覆盖文件：
  - `src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx`
  - `src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
