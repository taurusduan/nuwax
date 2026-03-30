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
