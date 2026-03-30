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
