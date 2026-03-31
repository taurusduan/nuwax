# 进度记录（里程碑 + 每日）

## 2026-03-30

### 里程碑：分支与基础设施启动

- 时间：2026-03-30 13:xx
- 任务：拉取基线并创建实施分支
- 执行命令：
  - `git checkout feat-2026.4.10`
  - `git pull --ff-only origin feat-2026.4.10`
  - `git checkout -b feat/i18n-frontend-saas-20260410`
- 结果摘要：分支创建成功，基线已同步到最新提交
- 风险/阻塞：无
- 下一步：落地 L1 i18n 运行时与启动链路

### 里程碑：L1 框架层已落地（进行中）

- 时间：2026-03-30 13:xx
- 任务：新增 i18n 类型、接口服务、运行时、启动初始化、请求头语言透传
- 执行命令：通过 `apply_patch` 新增/修改以下文件
  - `src/types/interfaces/i18n.ts`
  - `src/constants/i18n.constants.ts`
  - `src/services/i18n.ts`
  - `src/services/i18nRuntime.ts`
  - `src/app.tsx`
  - `src/services/common.ts`
- 结果摘要：
  - 已提供 `initI18n()` / `dict()` / `saveUserLang(lang)`
  - 启动阶段先执行语言词典初始化
  - 请求头新增 `Accept-Language` 与 `X-Lang`
- 风险/阻塞：后端专用语言保存接口尚未交付，当前按 `apiUserUpdate` 临时适配
- 下一步：落地 L2 用户资料页语言切换与系统配置-多语言管理页

### 里程碑：L2 组件与页面接入已落地（进行中）

- 时间：2026-03-30 13:xx
- 任务：用户资料页接入语言列表与切换保存；关键设置/用户弹层文案接入 `dict(key)`
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/layouts/Setting/SettingAccount/index.tsx`
  - `src/layouts/Setting/SettingAccount/index.less`
  - `src/layouts/Setting/index.tsx`
  - `src/layouts/DynamicMenusLayout/User/index.tsx`
  - `src/layouts/DynamicMenusLayout/UserOperateArea/index.tsx`
- 结果摘要：
  - 个人资料新增语言选择与保存（保存后整页刷新）
  - 设置弹窗、用户菜单、消息未读文案接入 `dict(key)`
- 风险/阻塞：全站存量硬编码文案仍需继续批量替换
- 下一步：落地 L3 多语言管理页面与路由接入

### 里程碑：L3 后端渲染适配页面接入已落地（进行中）

- 时间：2026-03-30 13:xx
- 任务：新增系统配置-多语言管理页面（列表）
- 执行命令：通过 `apply_patch` 新增/修改以下文件
  - `src/pages/SystemManagement/SystemConfig/I18nManage/index.tsx`
  - `src/routes/index.ts`
  - `src/services/menuService.ts`
- 结果摘要：系统配置新增 `/system/config/i18n` 页面路由，支持语言列表查询展示
- 风险/阻塞：后端增删改接口未纳入本轮输入，当前页面以查询展示为主
- 下一步：补全验证与回归记录

### 里程碑：规范校验与格式化已完成

- 时间：2026-03-30 13:xx
- 任务：新增硬编码文案增量扫描脚本并完成代码格式化校验
- 执行命令：
  - `pnpm run check:i18n-hardcoded`
  - `pnpm exec prettier --write ...`
  - `pnpm exec prettier --check ...`
- 结果摘要：
  - 扫描脚本已接入 `package.json`（`check:i18n-hardcoded`）
  - 脚本已调整为仅扫描新增行，避免历史存量误报
  - 当前改动集 Prettier 校验通过
- 风险/阻塞：构建与测试存在仓库基线问题（详见 test-report）
- 下一步：等待后端专用语言保存接口，替换 `saveUserLang` 单点实现

### 里程碑：全局存量页面兜底翻译已接入

- 时间：2026-03-30 14:xx
- 任务：解决“大量页面/组件未逐一接入”问题，新增运行时自动翻译兜底层
- 执行命令：通过 `apply_patch` 新增/修改以下文件
  - `src/services/i18nRuntime.ts`
  - `src/services/i18nDomTranslator.ts`
  - `src/app.tsx`
- 结果摘要：
  - 新增 `translateLiteralText()`，支持“中文文案 -> key -> 当前语言文案”转换
  - 启动后自动扫描并翻译文本节点与 `placeholder/title/aria-label`
  - 添加忽略区域（markdown、editor、聊天内容区等）降低误替换风险
- 风险/阻塞：该方案为兜底层，仍建议后续逐页改成 `dict(key)` 获得确定性
- 下一步：在真实页面走查误替换场景并补充忽略选择器

### 里程碑：新 key 规范一次性切换（L1 + L2 核心路径）

- 时间：2026-03-30 14:xx
- 任务：将已接入 `System.*` key 一次性替换为 `NuwaxPC.*` 新规范，并在运行时禁用 legacy key
- 执行命令：
  - `perl -0pi -e "s/System.../NuwaxPC.../g" ...`
  - `apply_patch` 更新 `src/constants/i18n.constants.ts`
  - `apply_patch` 更新 `src/services/i18nRuntime.ts`
  - `apply_patch` 更新登录、验证码、设置、导航、系统配置、AgentHeader 等核心页面
- 结果摘要：
  - `dict()` key 已切换为 `{Client}.{Scope}.{Domain}.{key}`
  - `System.*` 不再作为可用标准 key，仅作为异常输入记录日志
  - 登录/鉴权链路、设置中心、系统配置、多会话核心入口（AgentHeader）完成显式改造
- 风险/阻塞：后端词典需按同样 key 规范提供，否则会触发 missing key 日志
- 下一步：继续按 inventory 报告分批推进全站页面替换

### 里程碑：i18n 命名守门与全量盘点

- 时间：2026-03-30 14:xx
- 任务：新增 i18n 治理门禁与全量扫描报告
- 执行命令：
  - `node scripts/check-hardcoded-i18n.js`
  - `node scripts/i18n-governance-report.js`
- 结果摘要：
  - 增量门禁通过（新增行无硬编码中文/legacy key/非法 key）
  - 生成全量报告 `docs/ch/i18n/saas-20260410-inventory.md`
  - 全量待治理问题总数：`4476`
- 风险/阻塞：存量规模大，需按模块分批治理，避免一次性大改导致联调风险
- 下一步：按模块 TopN（`Antv-X6`、`SystemManagement`、`AppDev`、`EditAgent`）分批提交

### 里程碑：components/pages 第二批实改

- 时间：2026-03-30 15:xx
- 任务：补齐 `src/components` 与 `src/pages` 可见文案改造，覆盖错误页、密码设置、通用组件与首页错误兜底
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/pages/403/index.tsx`
  - `src/pages/404/index.tsx`
  - `src/pages/SetPassword/index.tsx`
  - `src/pages/Home/DraggableHomeContent/ErrorBoundary/index.tsx`
  - `src/components/NoMoreDivider/index.tsx`
  - `src/components/WorkspaceLayout/components/WorkspaceSearch/index.tsx`
  - `src/components/UploadAvatar/index.tsx`
  - `src/constants/i18n.constants.ts`
- 结果摘要：
  - 页面与组件文案已改为 `dict('NuwaxPC.*')`
  - 新增对应 key 到最小英文词典
  - `System.*` 业务引用仍为 0
- 风险/阻塞：大模块（`AppDev`/`Antv-X6`/`SystemManagement`）仍有大量存量，需继续分批
- 下一步：按 inventory Top 模块继续滚动治理

### 里程碑：Top 模块第三批实改（AppDev / SystemManagement / Antv-X6）

- 时间：2026-03-30 15:xx
- 任务：按 inventory Top 模块继续滚动替换可见文案
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/pages/AppDev/components/FileOperatingMask/index.tsx`
  - `src/pages/AppDev/components/ImageViewer/index.tsx`
  - `src/pages/SystemManagement/Dashboard/components/ResourceGrid/index.tsx`
  - `src/pages/SystemManagement/LogQuery/RunningLog/index.tsx`
  - `src/pages/SystemManagement/LogQuery/OperationLog/index.tsx`
  - `src/pages/Antv-X6/components/VersionAction/index.tsx`
  - `src/pages/Antv-X6/component/data.tsx`
  - `src/pages/Antv-X6/v3/component/data.tsx`
  - `src/pages/Antv-X6/header.tsx`
  - `src/constants/i18n.constants.ts`
- 结果摘要：
  - 三大模块新增一批 `dict('NuwaxPC.*')` 显式改造
  - 新增 key 已补入最小英文词典，`dict` 使用与词典定义一致（缺失 0）
  - inventory 问题总量进一步下降
- 风险/阻塞：`AppDev` 与 `Antv-X6` 仍存在大量存量字符串，需继续拆批降低回归风险
- 下一步：继续按“高频页面 + 低风险字符串”策略推进下一批

### 里程碑：Top 模块第四批实改（AppDev / SystemManagement / Antv-X6）

- 时间：2026-03-30 15:xx
- 任务：继续按模块 TopN 推进中小文件可见文案替换
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/pages/SystemManagement/TaskManage/index.tsx`
  - `src/pages/SystemManagement/Dashboard/components/SessionStats/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ChatAreaTabs.tsx`
  - `src/pages/AppDev/components/FilePathHeader/index.tsx`
  - `src/pages/Antv-X6/components/NodePanelDrawer/index.tsx`
  - `src/pages/Antv-X6/components/NewSkill/index.tsx`
  - `src/constants/i18n.constants.ts`
- 结果摘要：
  - `TaskManage`、`SessionStats`、`ChatAreaTabs`、`FilePathHeader`、`NodePanelDrawer`、`NewSkill` 完成显式 key 替换
  - 本批新增 key 已全部纳入最小词典
  - `dict` 使用 key 与词典定义一致（缺失 0）
- 风险/阻塞：核心大文件（`AppDev/index.tsx`、`Antv-X6/index.tsx`、`SystemManagement/MenuPermission/*`）改造体量仍大
- 下一步：以页面入口文件为主再做一批，优先处理标题、按钮、提示语

### 里程碑：本地中英文默认词典落地（运行时 + 平台导入默认）

- 时间：2026-03-30 16:xx
- 任务：补齐本地 `en-us/zh-cn` 默认词典文件，并接入运行时兜底与平台导入默认源
- 执行命令：通过 `apply_patch` 新增/修改以下文件
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
  - `src/locales/i18n/index.ts`
  - `src/constants/i18n.constants.ts`
  - `src/services/i18nRuntime.ts`
  - `src/services/i18n.ts`
- 结果摘要：
  - 本地中英文词典从常量内联拆分为独立语言文件，作为正式默认词典
  - 新增 `I18N_IMPORT_DEFAULTS`，可作为多语言平台维护导入默认源
  - 运行时兜底改为“按当前语言使用本地默认词典”，并新增按语言缓存隔离字段
- 风险/阻塞：当前平台维护页尚未接入导入 UI，本轮先提供服务层可复用默认源
- 下一步：在多语言管理新增导入入口时复用 `getI18nImportDefaults/getI18nImportDefaultMap`

### 里程碑：Top 模块第五批实改（AppDev / SystemManagement / Antv-X6）

- 时间：2026-03-30 16:xx
- 任务：继续按 inventory Top 模块推进显式 `dict` 改造
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/pages/AppDev/components/AppDevHeader/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx`
  - `src/pages/SystemManagement/Content/Agent/index.tsx`
  - `src/pages/Antv-X6/Published.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - AppDev Header、执行计划组件、系统管理-智能体页、Antv-X6 发布弹窗完成核心可见文案替换
  - 新增 key 已同步本地中英词典，避免运行时缺 key
  - inventory 问题总量继续下降
- 风险/阻塞：`AppDev ChatInputHome`、`Antv-X6 complexNode/commonNode`、`SystemManagement Content` 其余子页仍是存量大头
- 下一步：继续按“高频页面 + 中小文件 + 低风险交互”策略推进批量替换

### 里程碑：Top 模块第六批实改（AppDev / SystemManagement）

- 时间：2026-03-30 16:xx
- 任务：继续推进内容管理子页与 ChatArea 组件的显式 `dict` 改造
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/pages/SystemManagement/Content/DataTable/index.tsx`
  - `src/pages/SystemManagement/Content/KnowledgeBase/index.tsx`
  - `src/pages/SystemManagement/Content/Mcp/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ToolCallProcess/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/MessageAttachment/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `SystemManagement/Content` 的 DataTable、KnowledgeBase、Mcp 三个页面完成可见文案替换
  - AppDev `ToolCallProcess` 与 `MessageAttachment` 的状态、类型与提示文案完成替换
  - `ToolCallProcess` 文件列表识别兼容 `total` 与 `总计`，避免不同语言环境下识别失效
- 风险/阻塞：`AppDev ChatInputHome` 与 `MentionSelector` 仍有较大量存量文案
- 下一步：继续处理 `AppDev` 高频输入区与 `Antv-X6` 复杂节点面板文案

### 里程碑：`t()` 命名收敛与第六批补充改造

- 时间：2026-03-30 17:xx
- 任务：按约定将本批新增调用统一为 `t(...)`，并补充 `ChatInputHome` 可见文案接入
- 执行命令：通过 `apply_patch` 修改以下文件
  - `src/services/i18nRuntime.ts`
  - `src/pages/AppDev/components/ChatArea/components/ChatInputHome/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/ToolCallProcess/index.tsx`
  - `src/pages/AppDev/components/ChatArea/components/MessageAttachment/index.tsx`
  - `src/pages/SystemManagement/Content/DataTable/index.tsx`
  - `src/pages/SystemManagement/Content/KnowledgeBase/index.tsx`
  - `src/pages/SystemManagement/Content/Mcp/index.tsx`
  - `src/locales/i18n/nuwaxpc-en-us.ts`
  - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 运行时新增 `t()`（`dict()` 兼容保留），本批代码调用统一为 `t(...)`
  - `ChatInputHome` 的占位轮播、模型区、上传区、发送限制提示等文案完成接入
  - inventory 问题总量继续下降
- 风险/阻塞：全仓仍存在大量历史 `dict(...)` 与硬编码文案，需滚动收敛
- 下一步：继续按 Top 模块批量推进，并逐批把新改造代码统一到 `t(...)`

### 里程碑：Top 模块第七批实改（SystemManagement / AppDev / Antv-X6）

- 时间：2026-03-30 18:xx
- 任务：继续补齐 Top 模块存量页面，覆盖系统内容管理、日志查询、AppDev 主交互区、Antv 异常配置与通用节点
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
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
- 结果摘要：
  - 新增并落地 `SystemContentWebApplication`、`SystemOperationLog`、`AppDevContentViewer`、`AppDevChatArea`、`AppDevDesignViewer`、`AntvX6ExceptionItem`、`AntvX6CommonNode` 等 key 域
  - AppDev 与 SystemManagement 多个高频页面已统一 `t('NuwaxPC.*')`
  - inventory 问题总量从 `4255` 降至 `4082`
- 风险/阻塞：
  - `Antv-X6/complexNode`、`SystemManagement/MenuPermission`、`AppDev/Preview` 仍是存量大头
  - `i18n-governance-report` 当前仅校验 `dict()` key 格式，未覆盖 `t()`（需后续脚本补强）
- 下一步：继续按 Top 文件滚动治理 `RunningLog/NodeDetails`、`DataResourceList`、`eventHandlers` 与 `MenuPermission`

### 里程碑：Top 模块第八批实改（RunningLog / DataResource / Antv 事件）

- 时间：2026-03-30 18:xx
- 任务：继续清理 System/AppDev/Antv Top 文件存量
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/LogQuery/RunningLog/LogProTable/index.tsx`
    - `src/pages/SystemManagement/LogQuery/RunningLog/NodeDetails/index.tsx`
    - `src/pages/AppDev/components/EditorHeaderRight/index.tsx`
    - `src/pages/AppDev/components/FileTreePanel/DataResourceList/index.tsx`
    - `src/pages/Antv-X6/component/eventHandlers.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - RunningLog 表格/节点详情与 AppDev 右上工具区、数据资源列表完成 `t(...)` 替换
  - Antv 事件提示/确认弹窗完成多语言 key 化
  - inventory 问题总量从 `4082` 降至 `4050`
- 风险/阻塞：`SystemManagement/MenuPermission` 与 `Antv-X6/complexNode` 仍为后续高优先治理点
- 下一步：继续按 inventory Top 文件逐批推进，保持“小批量 + 验证 + 留痕”节奏

### 里程碑：Top 模块第九批实改（MenuPermission / AppDev Preview）

- 时间：2026-03-30 19:xx
- 任务：清理系统菜单管理链路与 AppDev 预览链路中的硬编码文案
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/MenuManage/components/MenuFormModal/index.tsx`
    - `src/pages/SystemManagement/MenuPermission/MenuManage/index.tsx`
    - `src/pages/AppDev/components/Preview/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `MenuFormModal` 与 `MenuManage` 标题、表单、列头、按钮、Tooltip、成功提示统一改为 `t(...)`
  - `Preview` 的错误提示、按钮文案、保存提示、空态“查看完整错误信息”等文案完成 key 化
  - `Preview` 与 `MenuManage` 中被扫描命中的中文日志/注释文本已替换为英文描述
  - inventory 问题总量从 `4050` 下降至 `3948`
- 风险/阻塞：
  - `Antv-X6/complexNode` 与 `nodeItem/database` 仍为 Antv 模块主要存量
  - `AppDev` 剩余集中在 `PageEditModal/Preview` 关联子逻辑与少量工具文件
- 下一步：继续按 Top 文件推进 `Antv-X6/complexNode`、`SystemManagement/MenuPermission` 余量、`AppDev/PageEditModal`

### 里程碑：Top 模块第十批实改（Antv complexNode + MenuPermission 补齐）

- 时间：2026-03-30 19:xx
- 任务：继续压缩 Top 文件存量，重点处理 `Antv-X6/complexNode` 及菜单管理链路未覆盖文案
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/component/complexNode.tsx`
    - `src/pages/SystemManagement/MenuPermission/MenuManage/components/MenuFormModal/index.tsx`
    - `src/pages/SystemManagement/MenuPermission/MenuManage/index.tsx`
    - `src/pages/AppDev/components/Preview/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `complexNode` 的输入/提示词/问答/http 工具节点等 26 处硬编码完成 `t(...)` 接入
  - 菜单管理与预览链路剩余提示文案统一接入 key
  - `SystemMenuFormModal/SystemMenuManage/AppDevPreview/AntvX6ComplexNode` 中英词典已补齐
  - inventory 问题总量从 `3948` 下降至 `3922`
- 风险/阻塞：
  - `Antv-X6/nodeItem` 与 `database` 仍为 Antv 下一轮重点
  - `AppDev/PageEditModal`、`SystemManagement/MenuPermission` 仍有小批量存量
- 下一步：继续按 inventory Top 文件推进，保持每批“改造 + 校验 + 文档留痕”

### 里程碑：Top 模块第十一批实改（PermissionResources + Antv database/nodeItem）

- 时间：2026-03-30 17:31
- 任务：补齐 `SystemManagement/MenuPermission/PermissionResources` 与 `Antv-X6/database/nodeItem` 的可见文案 i18n 接入
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/PermissionResources/components/ResourceFormModal/index.tsx`
    - `src/pages/SystemManagement/MenuPermission/PermissionResources/index.tsx`
    - `src/pages/Antv-X6/component/database.tsx`
    - `src/pages/Antv-X6/component/nodeItem.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `ResourceFormModal` 与 `PermissionResources` 的标题、表单、列头、按钮、Tooltip、空态、消息提示统一改为 `t(...)`
  - `database.tsx` 与 `nodeItem.tsx` 的输入/输出、循环、变量、文本处理、SQL 生成相关可见文案完成 key 化
  - 新增 key 已同步本地中英文默认词典，保证离线兜底与平台默认导入源一致
  - inventory 问题总量从 `3922` 下降至 `3811`
- 风险/阻塞：
  - `SystemManagement/MenuPermission/PermissionResources/index.tsx` 仍存在较多中文注释（不影响运行，但会进入治理统计）
  - `Antv-X6` 与 `AppDev` 仍有大量存量页面待持续收敛
- 下一步：继续按 inventory Top 文件推进 `AppDev/index.tsx`、`PageEditModal` 与 `Antv-X6/library/graph/registerCustomNodes` 等大头文件

### 里程碑：Top 模块第十二批实改（Antv library/registerCustomNodes）

- 时间：2026-03-30 17:38
- 任务：继续清理 `Antv-X6` 核心节点渲染文件中的可见文案与中文日志
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/component/library.tsx`
    - `src/pages/Antv-X6/component/registerCustomNodes.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `library.tsx` 的“知识库/搜索策略/召回数量/匹配度/输出”等文案已统一接入 `t(...)`
  - `registerCustomNodes.tsx` 的问答节点文案、运行状态文案、异常标题、未配置提示与中文日志已完成替换
  - 新增 `AntvX6Library` 与 `AntvX6RegisterNodes` key 域已补齐中英文默认词典
  - inventory 问题总量从 `3811` 下降至 `3792`
- 风险/阻塞：
  - `AppDev/index.tsx`、`AppDev/components/PageEditModal` 仍有大量硬编码文案
  - `Antv-X6/graph.tsx`、`runResult.tsx`、`pluginNode.tsx` 仍存在较多存量
- 下一步：继续批量推进 `AppDev/index.tsx` 与 `PageEditModal` 的按钮/弹窗/提示语接入

### 里程碑：Top 模块第十三批实改（AppDev index + PageEditModal）

- 时间：2026-03-30 18:23
- 任务：补齐 `AppDev` 主页面与应用编辑弹窗的高频可见文案接入
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/AppDev/index.tsx`
    - `src/pages/AppDev/components/PageEditModal/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `AppDev/index.tsx` 发布/导出/上传/删除确认/缺少 projectId 提示/导入与单文件上传弹窗/顶部分段按钮 Tooltip 等文案统一接入 `t(...)`
  - `PageEditModal` 的标题、表单标签、占位、校验与成功提示完成接入
  - 新增 `AppDevIndex` 与 `AppDevPageEditModal` key 域并补齐中英文默认词典
  - inventory 问题总量从 `3792` 下降至 `3734`
- 风险/阻塞：
  - `AppDev/index.tsx` 中仍有大量中文注释（不影响运行，但仍计入治理统计）
  - 其余高存量集中在 `Antv-X6/graph.tsx`、`runResult.tsx`、`AppDev` 其他子组件
- 下一步：继续推进 `Antv-X6/runResult.tsx` 与 `AppDev` 剩余弹窗/提示链路

### 里程碑：Top 模块第十四批实改（Antv runResult 补齐）

- 时间：2026-03-30 18:26
- 任务：补齐 `Antv-X6/component/runResult.tsx` 的运行结果展示文案接入
- 执行命令：
  - `pnpm prettier --write ...`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/component/runResult.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `runResult.tsx` 的复制按钮提示、运行状态文案、总数、只看错误、批处理变量、输入输出标题统一接入 `t(...)`
  - 复用了已有 `AntvX6Data`、`AntvX6RegisterNodes` key，并新增 `AntvX6RunResult` key 域
  - inventory 问题总量从 `3734` 下降至 `3727`
- 风险/阻塞：
  - `Antv-X6/graph.tsx`、`pluginNode.tsx`、`registerCustomNodes.tsx` 注释与少量文案仍有余量
  - `AppDev/index.tsx` 仍有大量中文注释文本（治理统计口径下会持续计数）
- 下一步：继续滚动推进 `Antv-X6/graph.tsx` 与 `AppDev` 剩余高频子组件

### 里程碑：Top 模块第十五批实改（Antv pluginNode）

- 时间：2026-03-30 18:28
- 任务：补齐 `Antv-X6/component/pluginNode.tsx` 输入输出文案接入
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/component/pluginNode.tsx`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改：
    - `src/pages/Antv-X6/component/pluginNode.tsx`
- 结果摘要：
  - `pluginNode` 输入/输出标题统一替换为 `t('NuwaxPC.Pages.AntvX6Data.*')`
  - 中文注释替换为英文，避免继续计入治理统计
  - inventory 问题总量从 `3727` 下降至 `3726`
- 风险/阻塞：
  - 主要存量仍集中在 `Antv-X6/graph.tsx` 与 `AppDev/index.tsx` 的注释/文案
- 下一步：继续推进 `Antv-X6/graph.tsx` 与 `AppDev` 剩余弹窗/提示链路

### 里程碑：Top 模块第十六批实改（Antv condition/controlPanel/errorList/graph）

- 时间：2026-03-30 18:42
- 任务：继续推进 `Antv-X6` 核心交互链路文案接入，补齐条件分支、画布控制、错误列表、图编辑器提示
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/component/condition.tsx src/pages/Antv-X6/component/stencil.tsx src/pages/Antv-X6/controlPanel.tsx src/pages/Antv-X6/errorList.tsx src/pages/Antv-X6/component/graph.tsx src/pages/Antv-X6/config.ts src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/component/condition.tsx`
    - `src/pages/Antv-X6/component/stencil.tsx`
    - `src/pages/Antv-X6/controlPanel.tsx`
    - `src/pages/Antv-X6/errorList.tsx`
    - `src/pages/Antv-X6/component/graph.tsx`
    - `src/pages/Antv-X6/config.ts`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `condition/stencil/controlPanel/errorList/graph` 的高频可见文案统一接入 `t(...)`
  - 新增 `AntvX6Condition/AntvX6Stencil/AntvX6ControlPanel/AntvX6ErrorList/AntvX6Graph` key 域，并补齐本地中英文默认词典
  - `config.ts` 中开发日志与注释文本切换为英文，符合“日志英文”约定
  - inventory 问题总量从 `3726` 下降至 `3710`
- 风险/阻塞：
  - `src/pages/Antv-X6/params.tsx` 仍有高密度硬编码中文（节点目录、配置项、条件选项）
  - `SystemManagement` 与 `AppDev` 仍有大量存量文件待继续收敛
- 下一步：继续批量推进 `Antv-X6/params.tsx` 与 `SystemManagement` Top 文件

### 里程碑：Top 模块第十七批实改（Antv params 大批量）

- 时间：2026-03-30 18:50
- 任务：批量改造 `src/pages/Antv-X6/params.tsx` 节点目录、表单配置、条件操作符等高密度硬编码文案
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/params.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/params.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `asideList` 节点名/描述、`cycleOption`、输入输出配置校验文案、左侧菜单、比较操作符统一改为 `t(...)`
  - 清理 `params.tsx` 中中文注释与注释块，避免继续计入治理统计
  - 新增 `AntvX6Params` key 域并补齐本地中英文默认词典
  - inventory 问题总量从 `3710` 下降至 `3600`
- 风险/阻塞：
  - `SystemManagement` Top 文件（如 `TargetAuthModal`、`RoleFormModal`）仍有较大改造空间
  - `AppDev` 与 `Antv-X6/index.tsx` 仍有存量
- 下一步：继续推进 `SystemManagement` Top 文件并保持每批校验与留痕

### 里程碑：Top 模块第十八批实改（SystemManagement TargetAuthModal）

- 时间：2026-03-30 18:55
- 任务：补齐 `SystemManagement/Content/components/TargetAuthModal` 授权弹窗文案与提示的 i18n 接入
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/Content/components/TargetAuthModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/Content/components/TargetAuthModal/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 授权成功提示、页签名、空态引导文案、弹窗标题、全选/取消全选全部接入 `t(...)`
  - 中文注释和中文 JSDoc 转为英文，减少治理统计噪音
  - 新增 `SystemTargetAuthModal` key 域（Pages + Toast）并补齐本地中英文默认词典
  - inventory 问题总量从 `3600` 下降至 `3595`
- 风险/阻塞：
  - `SystemManagement` 仍有多个高存量文件（`RoleFormModal`、`LogDetailDrawer` 等）
- 下一步：继续推进 `SystemManagement/MenuPermission/RoleManage/components/RoleFormModal` 与 `RunningLog/LogDetailDrawer`

### 里程碑：Top 模块第十九批实改（SystemManagement RoleFormModal）

- 时间：2026-03-30 18:59
- 任务：补齐 `SystemManagement/MenuPermission/RoleManage/components/RoleFormModal` 的表单与提示文案 i18n 接入
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/MenuPermission/RoleManage/components/RoleFormModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/RoleManage/components/RoleFormModal/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 角色来源、弹窗标题、确认按钮、表单标签/占位/校验、状态 tooltip、启用禁用文案全部接入 `t(...)`
  - 成功提示与校验失败日志接入多语言 key
  - 中文注释/JSDoc 转为英文，减少治理统计噪音
  - inventory 问题总量从 `3595` 下降至 `3573`
- 风险/阻塞：
  - `SystemManagement` 仍存在日志详情、运行日志等高存量中文文案
- 下一步：继续推进 `RunningLog/LogDetailDrawer` 与 `RunningLog/LogProTable` 余量文件

### 里程碑：Top 模块第二十批实改（SystemManagement LogDetailDrawer）

- 时间：2026-03-30 19:03
- 任务：补齐 `SystemManagement/LogQuery/RunningLog/LogDetailDrawer` 的详情抽屉文案与复制提示 i18n 接入
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/LogQuery/RunningLog/LogDetailDrawer/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/LogQuery/RunningLog/LogDetailDrawer/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 抽屉标题、耗时、消息 ID、调用组件、节点详情、输入/输出、执行过程、空态全部接入 `t(...)`
  - 复制成功提示切换为全局通用 key
  - 中文注释和说明文案转为英文
  - inventory 问题总量从 `3573` 下降至 `3570`
- 风险/阻塞：
  - `SystemManagement` 仍有大头存量分布在 `RunningLog/LogProTable` 等文件
- 下一步：继续推进 `RunningLog/LogProTable` 与 `AppDev` 余量

### 里程碑：Top 模块第二十一批实改（SystemManagement RoleManage 主页面）

- 时间：2026-03-30 20:03
- 任务：批量改造 `SystemManagement/MenuPermission/RoleManage/index.tsx`，覆盖角色主列表页关键文案
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/MenuPermission/RoleManage/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/RoleManage/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 列头、状态提示、权限提示、操作按钮、删除确认、页面标题、新增按钮、空态文案统一接入 `t(...)`
  - 固定提示（系统内置角色限制、无权限）全部收敛为 key
  - 中文注释与中文日志文本切换为英文，减少治理统计噪音
  - inventory 问题总量从 `3570` 下降至 `3546`
- 风险/阻塞：
  - `SystemManagement` 仍有多文件存量（尤其 `RunningLog/LogProTable` 注释类中文）
- 下一步：继续推进 `Antv-X6/v3/ParamsV3.tsx`（高密度硬编码）与 `SystemManagement` 余量文件

### 里程碑：Top 模块第二十二批实改（Antv-X6 v3 ParamsV3）

- 时间：2026-03-30 20:07
- 任务：改造 `src/pages/Antv-X6/v3/ParamsV3.tsx`，复用已完成 i18n 的 `params.tsx` 基础配置并补齐 V3 专属节点
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/ParamsV3.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 shell 重写 + `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/ParamsV3.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `ParamsV3` 不再重复维护一套硬编码配置，改为复用 `../params` 的 `dataTypes/modelTypes/options` 等导出
  - V3 仅追加“变量聚合”节点（`NodeTypeEnum.VariableAggregation`），并接入 `t(...)`
  - 新增 `AntvX6Params.nodeVariableAggregationName/Description` 中英文默认词典
  - inventory 问题总量从 `3546` 下降至 `3434`
- 风险/阻塞：
  - `Antv-X6/index.tsx` 仍有高密度存量文案（错误提示、发布提示、流式日志文案）
- 下一步：继续推进 `Antv-X6/index.tsx` 与 `SystemManagement/RunningLog/LogProTable`

### 里程碑：Top 模块第二十三批实改（Antv-X6 index 关键提示）

- 时间：2026-03-30 20:10
- 任务：补齐 `Antv-X6/index.tsx` 关键提示文案（循环限制、不支持组件、V3 loading）并收敛中文日志
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `message.warning` 文案改为 `t(...)`（循环嵌套限制、不支持组件类型）
  - V3 懒加载 `Spin` 文案改为 i18n key
  - 多处中文 `console.error/console.log` 日志改为英文描述
  - inventory 问题总量从 `3434` 下降至 `3423`
- 风险/阻塞：
  - `Antv-X6/index.tsx` 仍有大量中文注释，后续可继续按批次清理
- 下一步：继续推进 `SystemManagement/RunningLog/LogProTable` 或 `Antv-X6/index.tsx` 注释清理批次

### 里程碑：Top 模块第二十四批实改（SystemManagement UserGroupManage）

- 时间：2026-03-31 00:35
- 任务：改造 `SystemManagement/MenuPermission/UserGroupManage` 主页面与表单弹窗，补齐用户组管理主链路 i18n
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx`
    - `src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 用户组表单（标题、按钮、校验、placeholder、状态/来源/描述）全面切换为 `t(...)`
  - 用户组列表页（列头、操作、权限提示、删除确认、空态、页面标题）全面切换为 `t(...)`
  - 相关中文注释与错误日志描述切换为英文，降低治理噪音
  - 新增 `NuwaxPC.Pages.SystemUserGroupFormModal.*`、`NuwaxPC.Toast.SystemUserGroupFormModal.*`、`NuwaxPC.Pages.SystemUserGroupManage.*` 默认中英文词典
  - inventory 问题总量从 `3423` 下降至 `3373`
- 风险/阻塞：
  - `Antv-X6` 仍有高密度存量，尤其 `v3/component/*` 与 `header.tsx`
- 下一步：继续推进 `Antv-X6` Top 清单（优先 `header.tsx`、`v3/component/CondNodeConfig.tsx`、`v3/component/OutputNodeConfig.tsx`）

### 里程碑：Top 模块第二十五批实改（Antv-X6 Header + ExceptionItem + CommonNode）

- 时间：2026-03-31 01:20
- 任务：批量改造 `Antv-X6` 关键组件文案（`header.tsx`、`v3/component/ExceptionItem.tsx`、`v3/component/commonNode.tsx`）并统一使用 `t(...)`
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/header.tsx src/pages/Antv-X6/v3/component/ExceptionItem.tsx src/pages/Antv-X6/v3/component/commonNode.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/header.tsx`
    - `src/pages/Antv-X6/v3/component/ExceptionItem.tsx`
    - `src/pages/Antv-X6/v3/component/commonNode.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `header.tsx` 完成 `dict(...) -> t(...)`，并清理残留中文注释文案
  - `ExceptionItem.tsx` 的标题、提示、表单项、校验、placeholder 全量接入 `t(...)`
  - `ExceptionItem.tsx` 的异常处理方式与重试次数选项改为组件内 i18n 化配置，不再依赖中文常量标签
  - `commonNode.tsx` 的参数列头、字段标签、placeholder、空描述、分支提示判断全部切换为 key
  - 新增默认词典 key：`NuwaxPC.Pages.AntvX6ExceptionItem.returnSpecificContent/executeExceptionFlow/retryOnce/retryTwice/retryThrice`、`NuwaxPC.Pages.AntvX6CommonNode.noDescription`
  - inventory 问题总量从 `3373` 下降至 `3348`
- 风险/阻塞：
  - `Antv-X6` 仍是最高存量模块，`complexNode.tsx`、`database.tsx`、`v3/constants/node.constants.ts` 仍有明显中文集中
- 下一步：继续推进 `Antv-X6/v3/component/complexNode.tsx` 与 `Antv-X6/v3/component/database.tsx`

### 里程碑：Top 模块第二十六批实改（Antv-X6 Database + VariableAggregation）

- 时间：2026-03-31 01:30
- 任务：改造 `Antv-X6/v3/component/database.tsx` 与 `VariableAggregation` 子模块，覆盖数据节点与变量聚合节点多语言接入
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/component/database.tsx src/pages/Antv-X6/v3/component/VariableAggregation/index.tsx src/pages/Antv-X6/v3/component/VariableAggregation/VariableGroupItem.tsx src/pages/Antv-X6/v3/component/VariableAggregation/VariableSelector.tsx src/pages/Antv-X6/v3/component/VariableAggregation/useVariableAggregation.ts src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/component/database.tsx`
    - `src/pages/Antv-X6/v3/component/VariableAggregation/index.tsx`
    - `src/pages/Antv-X6/v3/component/VariableAggregation/VariableGroupItem.tsx`
    - `src/pages/Antv-X6/v3/component/VariableAggregation/VariableSelector.tsx`
    - `src/pages/Antv-X6/v3/component/VariableAggregation/useVariableAggregation.ts`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `database.tsx` 里的条件标题、AND/OR、下拉 placeholder、空态、按钮文案、查询上限、数据表、SQL placeholder、输出标题、生成 SQL 标题全部切换为 `t(...)`
  - `VariableAggregation` 三个组件（`index.tsx`/`VariableGroupItem.tsx`/`VariableSelector.tsx`）接入 `t(...)`，包含策略、分组配置、选择变量、空态提示、分组名称占位符
  - `useVariableAggregation.ts` 中文注释清理为英文，降低治理噪音
  - 新增默认词典 key：`NuwaxPC.Pages.AntvX6VariableAggregation.*`（10 个）
  - inventory 问题总量从 `3348` 下降至 `3330`
- 风险/阻塞：
  - `Antv-X6/index.tsx`、`v3/component/graph.tsx`、`v3/indexV3.tsx` 仍有较多中文残量
- 下一步：继续推进 `Antv-X6/v3/component/graph.tsx` 与 `Antv-X6/v3/indexV3.tsx`

### 里程碑：Top 模块第二十七批实改（Antv-X6 NewSkillV3 收尾）

- 时间：2026-03-31 01:34
- 任务：补齐 `Antv-X6/v3/component/NewSkillV3/index.tsx` 的残留 tooltip 文案与注释 i18n
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/component/NewSkillV3/index.tsx src/pages/Antv-X6/v3/component/database.tsx src/pages/Antv-X6/v3/component/VariableAggregation/index.tsx src/pages/Antv-X6/v3/component/VariableAggregation/VariableGroupItem.tsx src/pages/Antv-X6/v3/component/VariableAggregation/VariableSelector.tsx src/pages/Antv-X6/v3/component/VariableAggregation/useVariableAggregation.ts src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/component/NewSkillV3/index.tsx`
- 结果摘要：
  - `NewSkillV3` 的“编辑参数/移除”tooltip 切换为 `t(...)`
  - 残留中文注释改为英文
  - 复跑治理后，inventory 问题总量从 `3330` 下降至 `3328`
- 风险/阻塞：
  - Antv-X6 仍有重度存量集中在 `index.tsx`、`v3/component/graph.tsx`、`v3/indexV3.tsx`
- 下一步：继续按 Top 清单推进 `v3/component/graph.tsx` 和 `v3/indexV3.tsx`

### 里程碑：Top 模块第二十八批实改（Antv-X6 Complex/Condition/Event/NodeItem）

- 时间：2026-03-31 10:22
- 任务：批量改造 `Antv-X6/v3` 核心节点组件文案，覆盖 `complexNode.tsx`、`condition.tsx`、`eventHandlers.tsx`、`nodeItem.tsx`
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/component/complexNode.tsx src/pages/Antv-X6/v3/component/condition.tsx src/pages/Antv-X6/v3/component/eventHandlers.tsx src/pages/Antv-X6/v3/component/nodeItem.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/component/complexNode.tsx`
    - `src/pages/Antv-X6/v3/component/condition.tsx`
    - `src/pages/Antv-X6/v3/component/eventHandlers.tsx`
    - `src/pages/Antv-X6/v3/component/nodeItem.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `complexNode.tsx`：LLM/意图识别/问答/HTTP 工具的标题、提示、placeholder、表单标签全部切换为 `t(...)`
  - `condition.tsx`：条件分支标题、优先级、AND/OR、引用占位符、新增按钮、否则文案切换为 `t(...)`
  - `eventHandlers.tsx`：复制/粘贴/删除流程提示文案切换为 `t(...)`，并补齐英文注释
  - `nodeItem.tsx`：开始/结束/循环/变量/文本处理/代码节点关键文案全部接入 `t(...)`
  - 词典新增键：`NuwaxPC.Pages.AntvX6EventHandlers.unsupportedCopyNodeType/nodeCopied/copyNodeFirst`、`NuwaxPC.Pages.AntvX6ComplexNode.systemPromptTitle/userPromptTitle`
  - inventory 问题总量从 `3328` 下降至 `3256`
- 风险/阻塞：
  - `Antv-X6` 仍有存量主要集中在 `v3/component/graph.tsx` 与 `v3/indexV3.tsx`（注释和日志文本占比高）
- 下一步：继续推进 `v3/component/graph.tsx`（先可见提示文案，再批量注释英文化）

### 里程碑：Top 模块第二十九批实改（Antv-X6 v3 graph）

- 时间：2026-03-31 10:27
- 任务：修复 `v3/component/graph.tsx` 关键提示文案与高密度中文注释残留
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/component/graph.tsx`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 shell + `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/component/graph.tsx`
- 结果摘要：
  - 接入 `t(...)` 并修复循环节点快捷加节点 warning 文案（`NuwaxPC.Pages.AntvX6Graph.cannotQuickAddNodeForLoopBoundary`）
  - 清理图编辑器文件中的中文注释残留，统一为可读英文注释
  - inventory 问题总量从 `3256` 下降至 `3253`
- 风险/阻塞：
  - `graph.tsx` 仍有大量历史注释，后续可继续做结构化注释收敛
- 下一步：继续推进 `v3/indexV3.tsx` 与 `Antv-X6/index.tsx` 的残留提示文案

### 里程碑：Top 模块第三十批实改（Antv-X6 v3 index）

- 时间：2026-03-31 10:37
- 任务：处理 `v3/indexV3.tsx` 的多语言遗留文本（日志提示、注释残留、脏文案）
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/indexV3.tsx`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 shell + `apply_patch` 修改以下文件
    - `src/pages/Antv-X6/v3/indexV3.tsx`
- 结果摘要：
  - 清理 V3 index 中遗留中文字符，统一为英文注释与日志描述
  - 修复被历史文案替换后的无语义日志文本，补齐可读日志（如 `getReference` / `changeDrawer`）
  - inventory 问题总量从 `3253` 下降至 `3243`
- 风险/阻塞：
  - `Antv-X6/index.tsx` 与 `src/pages/Antv-X6/component/graph.tsx` 仍有存量
- 下一步：继续推进 `Antv-X6/index.tsx` 与 `Antv-X6/component/graph.tsx`

### 里程碑：Top 模块第三十一批实改（Antv-X6 index + legacy graph 注释收敛）

- 时间：2026-03-31 10:41
- 任务：继续收敛 `Antv-X6/index.tsx` 与 `Antv-X6/component/graph.tsx` 中文残留
- 执行命令：
  - `pnpm prettier --write src/pages/Antv-X6/v3/indexV3.tsx src/pages/Antv-X6/index.tsx src/pages/Antv-X6/component/graph.tsx`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 shell 批量清理 + `apply_patch` 更新以下文件
    - `src/pages/Antv-X6/index.tsx`
    - `src/pages/Antv-X6/component/graph.tsx`
    - `src/pages/Antv-X6/v3/indexV3.tsx`
- 结果摘要：
  - `index.tsx` 与 V1 `component/graph.tsx` 中中文注释残留进一步收敛
  - 与上一批串行推进，继续压降 Antv-X6 主干文件的治理噪音
  - inventory 问题总量从 `3243` 下降至 `3240`
- 风险/阻塞：
  - 当前剩余问题更多分布在其他高存量模块（EditAgent/SystemManagement 等）
- 下一步：切换到 inventory Top 的非 Antv-X6 模块批量推进

### 里程碑：Top 模块第三十二批实改（EditAgent 组件设置 + 变量弹窗）

- 时间：2026-03-31 11:09
- 任务：批量改造 `EditAgent/AgentArrangeConfig` 关键路径文案，覆盖 `ComponentSettingModal` 子模块与 `CreateVariableModal`
- 执行命令：
  - `pnpm prettier --write src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/AsyncRun/index.tsx src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/OutputWay/index.tsx src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/InvokeType/index.tsx src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/index.tsx src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/AsyncRun/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/OutputWay/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/InvokeType/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `AsyncRun`、`OutputWay`、`InvokeType`、`BindDataSource`、`CreateVariableModal` 可见文案全部切换为 `t(...)`
  - `ComponentSettingModal/index.tsx` 的保存提示、调用方式 tooltip、左侧标题改为 `t(...)`，与子组件统一
  - 为 `NuwaxPC.Pages.AgentArrange*` 增补中英文默认词典 key（含 `Toast` 与 `Common` 通用 key）
  - 治理总量从 `3240` 下降至 `3202`（-38）
- 风险/阻塞：
  - `EditAgent` 模块仍有大量存量页面未完成显式接入（如 `EventBindModal`、`KnowledgeSetting`、`CreateVariables/index.tsx` 等）
- 下一步：继续按 inventory Top 在 `EditAgent` 内推进下一批（优先 `EventBindModal` 与 `CreateVariables/index.tsx`）

### 里程碑：Top 模块第三十三批实改（EditAgent 变量列表 + 事件绑定）

- 时间：2026-03-31 11:18
- 任务：继续推进 `EditAgent` 存量页面，覆盖 `ExceptionHanding`、`CreateVariables/index.tsx`、`EventBindModal/index.tsx`
- 执行命令：
  - `pnpm prettier --write src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/ExceptionHanding/index.tsx src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/ExceptionHanding/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `ExceptionHanding` 全量接入 `t(...)`（标题/描述/默认信息/占位符/保存）
  - `CreateVariables/index.tsx` 表格列名、类型枚举、弹窗标题与新增按钮接入 `t(...)`，并移除对中文输入方式常量文案的直接依赖
  - `EventBindModal` 表单标签、校验提示、响应动作选项、输入参数说明与成功提示全面接入 `t(...)`
  - 清理 `CreateVariableModal` 与 `BindDataSource` 中触发治理噪音的局部中文注释
  - 治理总量从 `3202` 下降至 `3164`（-38）
- 风险/阻塞：
  - `EditAgent` 下仍有高密度存量（`KnowledgeSetting`、`GuidQuestionSetModal`、`OpenRemarksEdit` 等）
- 下一步：继续在 `EditAgent` 批量推进 `KnowledgeTextList` 与 `OpenRemarksEdit` 相关页面

### 里程碑：Top 模块第三十四批实改（EditAgent 知识与开场白链路）

- 时间：2026-03-31 11:28
- 任务：继续覆盖 `EditAgent` 场景页面，完成 `KnowledgeTextList`、`LongMemoryContent`、`McpGroupComponentItem`、`OpenRemarksEdit` 主链路 i18n
- 执行命令：
  - `pnpm prettier --write src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/index.tsx src/pages/EditAgent/AgentArrangeConfig/LongMemoryContent/index.tsx src/pages/EditAgent/AgentArrangeConfig/McpGroupComponentItem/index.tsx src/pages/EditAgent/AgentArrangeConfig/OpenRemarksEdit/GuidQuestionSetModal/index.tsx src/pages/EditAgent/AgentArrangeConfig/OpenRemarksEdit/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/LongMemoryContent/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/McpGroupComponentItem/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/OpenRemarksEdit/GuidQuestionSetModal/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/OpenRemarksEdit/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `KnowledgeSetting` 的标题、分组、说明文案、召回与无召回策略选项、输入 placeholder 全部改为 `t(...)`
  - `KnowledgeTextList` 空态描述、调用方式标识、取消知识库 tooltip 接入 `t(...)`
  - `OpenRemarksEdit` 与 `GuidQuestionSetModal` 的展示信息、类型选择、页面路径、链接校验、输入参数区提示全面接入 `t(...)`
  - `McpGroupComponentItem` 工具数量文案支持 `{0}` 占位符，`LongMemoryContent` 描述文案接入 `t(...)`
  - 治理总量从 `3164` 下降至 `3124`（-40）
- 风险/阻塞：
  - `EditAgent` 仍有较重存量集中在 `PageSettingModal`、`SubAgentConfig`、`AgentArrangeConfig/index.tsx`
- 下一步：继续推进 `SubAgentConfig` 与 `AgentArrangeConfig/index.tsx` 主容器文案

### 里程碑：Top 模块第三十五批实改（EditAgent 页面设置 + 子智能体）

- 时间：2026-03-31 11:34
- 任务：补齐 `PageSettingModal` 与 `SubAgentConfig` 链路 i18n，处理弹窗确认文案、按钮文案、默认名称与错误提示
- 执行命令：
  - `pnpm prettier --write src/pages/EditAgent/AgentArrangeConfig/PageSettingModal/index.tsx src/pages/EditAgent/AgentArrangeConfig/SubAgentConfig/SubAgentEditModal.tsx src/pages/EditAgent/AgentArrangeConfig/SubAgentConfig/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/EditAgent/AgentArrangeConfig/PageSettingModal/index.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/SubAgentConfig/SubAgentEditModal.tsx`
    - `src/pages/EditAgent/AgentArrangeConfig/SubAgentConfig/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - `PageSettingModal` 的左侧菜单标题/标签、保存失败提示、日志文本全部切换为 `t(...)`
  - `SubAgentEditModal` 取消确认弹窗、标题、文档 tooltip、全屏 tooltip、输入 placeholder、确认/取消按钮接入 `t(...)`
  - `SubAgentConfig` 空态、默认命名、编辑/删除 tooltip 接入 `t(...)`
  - 治理总量从 `3124` 下降至 `3105`（-19）
- 风险/阻塞：
  - `EditAgent` 最大存量仍集中在 `AgentArrangeConfig/index.tsx` 与少量页面残留
- 下一步：继续处理 `AgentArrangeConfig/index.tsx` 与关联子模块高频中文文案

### 里程碑：Top 模块第三十六批实改（EditAgent 主容器高频文案）

- 时间：2026-03-31 11:42
- 任务：推进 `AgentArrangeConfig/index.tsx` 主容器多语言接入，覆盖锚点菜单、配置分组标题、提示消息与关键 tooltip
- 执行命令：
  - `pnpm prettier --write src/pages/EditAgent/AgentArrangeConfig/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/EditAgent/AgentArrangeConfig/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 锚点菜单、`ConfigOptionsHeader` 标题、`Tool/Skill/Knowledge/Memory/Page` 分组标签和添加操作 tooltip 批量切换为 `t(...)`
  - 子智能体创建失败、删除/新增成功、删除事件绑定、插入系统提示词等消息文案接入 `t(...)`
  - 任务体验、远程桌面、展开页面区、事件绑定等关键说明文案完成 i18n
  - 事件“插入到提示词”模板中的硬编码中文片段改为可翻译 key（含动态 JSON 参数与引用说明）
  - 治理总量从 `3105` 下降至 `3053`（-52）
- 风险/阻塞：
  - 文件中仍存在大量中文注释与历史说明文本（非用户可见），会继续在 inventory 中计数
- 下一步：继续清理 `EditAgent` 余下高频页面与主容器注释噪音，随后切回 `SystemManagement` Top 模块

### 里程碑：Top 模块第三十七批实改（SystemManagement 分类管理）

- 时间：2026-03-31 12:12
- 任务：切换到 `SystemManagement` Top 模块，改造 `CategoryManage` 页面与分类弹窗 i18n
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/SystemConfig/CategoryManage/components/CategoryModal/index.tsx src/pages/SystemManagement/SystemConfig/CategoryManage/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/SystemConfig/CategoryManage/components/CategoryModal/index.tsx`
    - `src/pages/SystemManagement/SystemConfig/CategoryManage/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 分类管理页的分段标签、页标题、列表头、删除确认、提交成功与错误日志接入 `t(...)`
  - 分类弹窗标题、按钮文案、表单标签/placeholder/校验提示接入 `t(...)`
  - 增补 `NuwaxPC.Pages.SystemConfigCategoryManage.*` 与 `NuwaxPC.Pages.SystemConfigCategoryModal.*` 中英文默认词典
  - 治理总量从 `3053` 下降至 `3024`（-29）
- 风险/阻塞：
  - `SystemManagement` 仍有高密度存量集中在 `MenuPermission`、`SandboxConfig` 等
- 下一步：继续推进 `SystemManagement` Top（优先 `MenuPermission/BindUser` 或 `CategoryManage` 相邻模块）

### 里程碑：Top 模块第三十八批实改（SystemManagement 沙盒配置）

- 时间：2026-03-31 12:19
- 任务：推进 `SystemConfig/SandboxConfig`（列表页+弹窗）多语言接入，并清理该批中文注释噪音
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/SystemConfig/SandboxConfig/components/SandboxModal/index.tsx src/pages/SystemManagement/SystemConfig/SandboxConfig/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/SystemConfig/SandboxConfig/components/SandboxModal/index.tsx`
    - `src/pages/SystemManagement/SystemConfig/SandboxConfig/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 沙盒弹窗标题、按钮、表单标签、placeholder、校验提示改为 `t(...)`
  - 沙盒列表页列名、状态标签、操作 tooltip、确认弹窗、全局配置标签、页脚统计与提示消息改为 `t(...)`
  - 事件测试/启停/删除等提示文本和确认文案完成 i18n
  - 同步补齐 `NuwaxPC.Pages.SystemConfigSandboxModal.*` 与 `NuwaxPC.Pages.SystemConfigSandboxConfig.*` 中英文默认词典
  - 治理总量从 `3024` 下降至 `2970`（-54）
- 风险/阻塞：
  - `SystemManagement` 存量仍主要集中在 `MenuPermission` 相关文件
- 下一步：继续推进 `MenuPermission/components/BindUser/index.tsx` 批次

### 里程碑：Top 模块第三十九批实改（MenuPermission 绑定用户）

- 时间：2026-03-31 12:24
- 任务：改造 `MenuPermission/components/BindUser/index.tsx` 可见文案
- 执行命令：
  - `pnpm prettier --write src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx src/locales/i18n/nuwaxpc-zh-cn.ts src/locales/i18n/nuwaxpc-en-us.ts`
  - `pnpm run check:i18n-hardcoded`
  - `pnpm run report:i18n-governance`
  - 通过 `apply_patch` 修改以下文件
    - `src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx`
    - `src/locales/i18n/nuwaxpc-en-us.ts`
    - `src/locales/i18n/nuwaxpc-zh-cn.ts`
- 结果摘要：
  - 绑定用户弹窗标题、关闭按钮、左右搜索 placeholder、空态文案、搜索未命中提示接入 `t(...)`
  - 新增 `NuwaxPC.Pages.SystemMenuBindUser.*` 中英文默认词典
  - 治理总量从 `2970` 下降至 `2965`（-5）
- 风险/阻塞：
  - `MenuPermission` 仍有较多存量集中在 `DataPermissionModal` 与 `MenuPermissionModal`
- 下一步：继续推进 `MenuPermission/components/DataPermissionModal/index.tsx`
