# 多语言治理全量扫描报告（SAAS 2026-04-10）

- 生成时间：2026-03-30T12:06:28.058Z
- 扫描范围：src/pages, src/components, src/layouts, src/hooks, src/models, src/services
- 规则：hardcoded 中文字符串 / legacy `System.*` key / invalid `dict()` key 格式

## 汇总

- 总问题数：3434
- hardcoded 中文：3434
- legacy System key：0
- invalid dict key：0

## 按模块统计

| 模块 | hardcoded中文 | legacyKey | invalidKey | 总计 |
| --- | ---: | ---: | ---: | ---: |
| src/pages/Antv-X6 | 411 | 0 | 0 | 411 |
| src/pages/EditAgent | 265 | 0 | 0 | 265 |
| src/pages/SystemManagement | 258 | 0 | 0 | 258 |
| src/hooks | 186 | 0 | 0 | 186 |
| src/components/business-component | 144 | 0 | 0 | 144 |
| src/services | 110 | 0 | 0 | 110 |
| src/components/FileTreeView | 97 | 0 | 0 | 97 |
| src/pages/SpaceKnowledge | 82 | 0 | 0 | 82 |
| src/pages/UserManage | 82 | 0 | 0 | 82 |
| src/pages/AppDev | 72 | 0 | 0 | 72 |
| src/pages/SpacePageDevelop | 72 | 0 | 0 | 72 |
| src/pages/SpaceLibrary | 64 | 0 | 0 | 64 |
| src/pages/SpaceTaskCenter | 61 | 0 | 0 | 61 |
| src/pages/SpaceTable | 58 | 0 | 0 | 58 |
| src/pages/Square | 58 | 0 | 0 | 58 |
| src/layouts/Setting | 57 | 0 | 0 | 57 |
| src/pages/IMChannel | 52 | 0 | 0 | 52 |
| src/pages/SpaceLibraryLog | 52 | 0 | 0 | 52 |
| src/pages/TeamSetting | 50 | 0 | 0 | 50 |
| src/pages/MorePage | 48 | 0 | 0 | 48 |
| src/pages/SpaceDevelop | 48 | 0 | 0 | 48 |
| src/models | 46 | 0 | 0 | 46 |
| src/components/FormListItem | 41 | 0 | 0 | 41 |
| src/pages/SpaceLog | 39 | 0 | 0 | 39 |
| src/pages/MyComputerManage | 38 | 0 | 0 | 38 |
| src/pages/SpaceSkillManage | 37 | 0 | 0 | 37 |
| src/pages/Chat | 35 | 0 | 0 | 35 |
| src/pages/SpacePluginTool | 35 | 0 | 0 | 35 |
| src/components/ChatInputHome | 35 | 0 | 0 | 35 |
| src/components/Created | 32 | 0 | 0 | 32 |
| src/pages/SkillDetails | 31 | 0 | 0 | 31 |
| src/pages/GlobalModelManage | 30 | 0 | 0 | 30 |
| src/pages/PublishAudit | 30 | 0 | 0 | 30 |
| src/layouts/DynamicMenusLayout | 30 | 0 | 0 | 30 |
| src/pages/EcosystemTemplate | 27 | 0 | 0 | 27 |
| src/components/base | 26 | 0 | 0 | 26 |
| src/pages/SpacePluginCloudTool | 25 | 0 | 0 | 25 |
| src/pages/EcosystemPlugin | 24 | 0 | 0 | 24 |
| src/components/AgentSidebar | 24 | 0 | 0 | 24 |
| src/pages/PublishedManage | 22 | 0 | 0 | 22 |
| src/components/CreateKnowledge | 21 | 0 | 0 | 21 |
| src/pages/Home | 19 | 0 | 0 | 19 |
| src/pages/SpaceMcpEdit | 19 | 0 | 0 | 19 |
| src/components/CreateAgent | 19 | 0 | 0 | 19 |
| src/components/TestRun | 19 | 0 | 0 | 19 |
| src/components/PublishComponentModal | 18 | 0 | 0 | 18 |
| src/pages/SpaceMcpCreate | 17 | 0 | 0 | 17 |
| src/components/MarkdownCustomProcess | 17 | 0 | 0 | 17 |
| src/pages/SpaceMcpManage | 16 | 0 | 0 | 16 |
| src/components/CreateNewPlugin | 16 | 0 | 0 | 16 |
| src/components/CreatedItem | 15 | 0 | 0 | 15 |
| src/components/EcosystemDetailDrawer | 14 | 0 | 0 | 14 |
| src/components/EcosystemShareModal | 14 | 0 | 0 | 14 |
| src/components/TiptapVariableInput | 14 | 0 | 0 | 14 |
| src/pages/Login | 13 | 0 | 0 | 13 |
| src/components/CreateWorkflow | 13 | 0 | 0 | 13 |
| src/components/VersionHistory | 12 | 0 | 0 | 12 |
| src/pages/EcosystemMcp | 11 | 0 | 0 | 11 |
| src/components/ChatTitleActions | 11 | 0 | 0 | 11 |
| src/components/ChatView | 11 | 0 | 0 | 11 |
| src/components/SelectComponent | 11 | 0 | 0 | 11 |
| src/pages/SpaceSquare | 10 | 0 | 0 | 10 |
| src/components/AliyunCaptcha | 10 | 0 | 0 | 10 |
| src/components/ParamsSetting | 10 | 0 | 0 | 10 |
| src/pages/ChatTemp | 9 | 0 | 0 | 9 |
| src/components/ModelSetting | 9 | 0 | 0 | 9 |
| src/components/MoveCopyComponent | 9 | 0 | 0 | 9 |
| src/components/CollapseComponentList | 8 | 0 | 0 | 8 |
| src/components/Skill | 8 | 0 | 0 | 8 |
| src/components/MarkdownRenderer | 7 | 0 | 0 | 7 |
| src/components/NewConversationSet | 7 | 0 | 0 | 7 |
| src/components/PluginCardDetail | 7 | 0 | 0 | 7 |
| src/components/UploadImportConfig | 7 | 0 | 0 | 7 |
| src/components/ComputerTypeSelector | 6 | 0 | 0 | 6 |
| src/components/McpCollapseComponentList | 6 | 0 | 0 | 6 |
| src/components/CodeViewer | 5 | 0 | 0 | 5 |
| src/components/ProComponents | 5 | 0 | 0 | 5 |
| src/layouts/Message | 5 | 0 | 0 | 5 |
| src/components/CodeEditor | 4 | 0 | 0 | 4 |
| src/components/ExampleNavigation | 4 | 0 | 0 | 4 |
| src/components/OtherAction | 4 | 0 | 0 | 4 |
| src/components/PluginAutoAnalysis | 4 | 0 | 0 | 4 |
| src/components/PluginTryRunModal | 4 | 0 | 0 | 4 |
| src/components/RecommendList | 4 | 0 | 0 | 4 |
| src/components/EcosystemSelectCategory | 3 | 0 | 0 | 3 |
| src/components/FoldWrap | 3 | 0 | 0 | 3 |
| src/pages/openApp | 2 | 0 | 0 | 2 |
| src/components/PromptOptimizeModal | 2 | 0 | 0 | 2 |
| src/components/ShowStand | 2 | 0 | 0 | 2 |
| src/components/SlateVariableEditor | 2 | 0 | 0 | 2 |
| src/components/custom | 2 | 0 | 0 | 2 |
| src/pages/Index | 1 | 0 | 0 | 1 |
| src/components/CodeOptimizeModal | 1 | 0 | 0 | 1 |
| src/components/ModelBox | 1 | 0 | 0 | 1 |
| src/components/NoMoreDivider | 1 | 0 | 0 | 1 |
| src/components/OverrideTextArea | 1 | 0 | 0 | 1 |
| src/components/PageCard | 1 | 0 | 0 | 1 |
| src/components/PermissionMask | 1 | 0 | 0 | 1 |
| src/components/PluginCardList | 1 | 0 | 0 | 1 |
| src/components/SqlOptimizeModal | 1 | 0 | 0 | 1 |
| src/components/SubmitButton | 1 | 0 | 0 | 1 |
| src/layouts/HoverMenu | 1 | 0 | 0 | 1 |
| src/layouts/MobileMenu.tsx | 1 | 0 | 0 | 1 |

## src/pages/Antv-X6

- [hardcoded_chinese] src/pages/Antv-X6/component/graph.tsx:227 -> `, // 或者 `
- [hardcoded_chinese] src/pages/Antv-X6/header.tsx:95 -> `已发布`
- [hardcoded_chinese] src/pages/Antv-X6/header.tsx:95 -> `未发布`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:476 -> `表单提交失败:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:974 -> `处理节点连接时发生错误:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1016 -> `循环体里请不要再添加循环体`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1051 -> `处理节点创建成功后的操作失败:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1179 -> `暂不支持该类型组件`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1282 -> `发布成功`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1362 -> `流式请求异常:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1366 -> `连接已建立`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1458 -> `流式请求异常:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1462 -> `连接已建立`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1471 -> `连线不完整`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:1489 -> `试运行所有节点失败:`
- [hardcoded_chinese] src/pages/Antv-X6/index.tsx:2003 -> `加载 V3 版本...`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:153 -> `JSON格式无效`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:154 -> `JSON格式无效:`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:164 -> `可设置异常处理，包括超时、重试、异常处理方式。开启流式输出后，一旦开始输出数据，即使出现异常也无法重试或者跳转异常分支。`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:179 -> `设置节点执行的最大等待时间`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:188 -> `请输入超时时间`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:203 -> `重试次数`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:213 -> `不重试`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:220 -> `异常处理方式`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:233 -> `中断流程`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:261 -> `请输入自定义返回内容`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/ExceptionItem.tsx:271 -> `请输入有效的JSON格式`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/NewSkillV3/index.tsx:170 -> `编辑参数`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/NewSkillV3/index.tsx:180 -> `移除`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/VariableAggregation/VariableGroupItem.tsx:56 -> `分组名称`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/VariableAggregation/VariableSelector.tsx:89 -> `暂无描述`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/VariableAggregation/index.tsx:18 -> `返回每个分组中第一个非空的值`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:103 -> `参数名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:106 -> `请输入变量名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:111 -> `请输入参数名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:119 -> `请选择或输入变量值`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:228 -> `参数名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:231 -> `请输入变量名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:236 -> `请输入参数名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:241 -> `变量名`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:245 -> `请选择或输入变量值`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:249 -> `请输入参数值`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:297 -> `暂无描述`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/commonNode.tsx:428 -> `此选项用户不可见，用户回复无关内容时走此分支`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:53 -> `无`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:244 -> `输入`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:257 -> `为对话提供系统级指导，如设定人设和回复逻辑。`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:266 -> `系统提示词，可以使用{{变量名}}、{{变量名.子变量名}}、 {{变量名[数组索引]}}的方式引用输入参数中的变量`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:281 -> `向模型提供用户指令，如查询或任何基于文本输入的提问。`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:290 -> `用户提示词，可以使用{{变量名}}、{{变量名.子变量名}}、 {{变量名[数组索引]}}的方式引用输入参数中的变量`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:302 -> `输出`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:319 -> `提示词优化`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:355 -> `输入`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:364 -> `意图匹配`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:376 -> `补充提示词`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:380 -> `支持额外的系统提示词，如对意图选项做更详细的例子以增 强用户输出与意图匹配的成功率。`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:433 -> `此选项用户不可见，用户回复无关内容时走此分支`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:466 -> `输入`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:475 -> `提问问题`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:478 -> `可使用{{变量名}}的方式引用输入参数中的变量`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:495 -> `回答类型`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:515 -> `输出`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:529 -> `设置选项内容`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:557 -> `请求方法与路径`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:563 -> `请求方法`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:567 -> `请输入url地址`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:573 -> `请求内容格式`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:581 -> `请求超时配置`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:582 -> `请输入超时配置时长`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/complexNode.tsx:619 -> `出参`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/condition.tsx:176 -> `且`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/condition.tsx:180 -> `或`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/condition.tsx:252 -> `请引用参数`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:78 -> `输入`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:90 -> `删除条件`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:92 -> `更新条件`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:93 -> `查询条件`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:120 -> `且`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:124 -> `或`
- [hardcoded_chinese] src/pages/Antv-X6/v3/component/database.tsx:176 -> `请选择`
- ... 省略 331 条

## src/pages/EditAgent

- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/AsyncRun/index.tsx:27 -> `已经开始为你处理，请耐心等待运行结果`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/AsyncRun/index.tsx:72 -> `回复内容`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/AsyncRun/index.tsx:78 -> `你可以在这里设置消息回复,任务运行时将自动回复,比如: 任务已在进行中,一旦完成我将第一时间向你报告结果,你还有其他需要我协助的事项吗?`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:56 -> `为卡片整体绑定一个数组`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:125 -> `为卡片内的列表项绑定数据`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:220 -> `选择卡片样式`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:230 -> `卡片列表最大长度`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:231 -> `请输入卡片列表最大长度`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:236 -> `请输入卡片列表最大长度`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:241 -> `为卡片整体绑定一个数组`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:255 -> `请为卡片整体绑定一个数组`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:274 -> `暂无数据`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:281 -> `为卡片内的列表项绑定数据`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:316 -> `暂无数据`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:319 -> `请选择`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:326 -> `点击卡片跳转`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:328 -> `绑定后，用户在智能体对话流中点击 卡片可跳转至其他页面`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/CardBind/BindDataSource/index.tsx:372 -> `为url选择数据来源`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/ExceptionHanding/index.tsx:70 -> `默认信息`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/ExceptionHanding/index.tsx:76 -> `请输入异常时输出给大模型的默认信息`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/InvokeType/index.tsx:112 -> `可选，若填写，前端优先展示该名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/InvokeType/index.tsx:118 -> `请输入展示别名`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/OutputWay/index.tsx:44 -> `如果选择“是”，将会把工作流运行结果直接输出到会话框中，不会再经过大模型总结输出。`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/ComponentSettingModal/index.tsx:255 -> `保存成功`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:241 -> `手动创建`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:278 -> `数据绑定`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:297 -> `变量更新成功`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:315 -> `插件绑定`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:318 -> `请添加选项`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:321 -> `请填写选项值`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:337 -> `请选择绑定组件`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:340 -> `插件绑定`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:409 -> `编辑或添加变量`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:423 -> `字段名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:424 -> `请输入字段名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:427 -> `请输入字段名称，符合字段命名规划`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:434 -> `展示名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:435 -> `请输入字段展示名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:438 -> `请输入字段展示名称，供前端展示使用`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:443 -> `描述`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:446 -> `请输入字段描述`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:452 -> `输入方式`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:471 -> `默认值`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/CreateVariableModal/index.tsx:475 -> `请输入默认值`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:165 -> `删除成功`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:167 -> `更新成功`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:211 -> `名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:223 -> `描述`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:235 -> `类型`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:242 -> `系统变量`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:242 -> `自定义变量`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:247 -> `输入方式`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:259 -> `是否必须`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:268 -> `是`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:268 -> `否`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/CreateVariables/index.tsx:377 -> `变量`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:175 -> `更新成功`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:272 -> `参数名`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:316 -> `请输入${record.description}`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:339 -> `事件绑定`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:358 -> `事件名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:359 -> `请输入事件名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:361 -> `请输入事件名称`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:365 -> `事件标识（用于区分具体事件）`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:367 -> `请输入事件标识`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:375 -> `事件标识只能包含字母、数字和下划线,且必须以字母或下划线开头!`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:383 -> `请输入事件标识,只能包含字母、数字和下划线`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:387 -> `响应动作`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:389 -> `请选择响应动作`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:398 -> `页面路径`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:399 -> `请选择页面路径`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:403 -> `请选择页面路径`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:412 -> `链接地址`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:414 -> `请输入链接地址`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:422 -> `请输入正确格式的链接地址，必须以http://或https://开头!`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/EventBindModal/index.tsx:446 -> `配置输入参数`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx:106 -> `知识库设置`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx:112 -> `调用方式`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx:113 -> `选择是否每轮对话自动召回或按需从特定知识库召回`
- [hardcoded_chinese] src/pages/EditAgent/AgentArrangeConfig/KnowledgeTextList/KnowledgeSetting/index.tsx:130 -> `搜索策略`
- ... 省略 185 条

## src/pages/SystemManagement

- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:49 -> `系统内置`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:50 -> `用户自定义`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:75 -> `新增用户组成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:87 -> `更新用户组成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:150 -> `表单验证失败:`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:157 -> `编辑用户组`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:157 -> `新增用户组`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:160 -> `保存`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:160 -> `创建`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:178 -> `用户组名称`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:180 -> `请输入用户组名称`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:182 -> `请输入用户组名称`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:188 -> `最大用户数`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:190 -> `请输入最大用户数`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:192 -> `最大值为2147483647`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:197 -> `请输入最大用户数`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:206 -> `来源`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:208 -> `请选择来源`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:217 -> `排序`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:222 -> `请输入排序`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:232 -> `状态`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:236 -> `启用或禁用此用户组`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:240 -> `启用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:240 -> `禁用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:245 -> `描述`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/components/UserGroupFormModal/index.tsx:247 -> `请输入用户组描述`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:139 -> `查询用户组列表失败`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:169 -> `删除成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:269 -> `删除用户组`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:285 -> `排序更新成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:359 -> `排序`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:368 -> `用户组名称`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:376 -> `编码`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:383 -> `描述`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:394 -> `启用或禁用此用户组`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:411 -> `系统内置的用户组不能禁用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:418 -> `启用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:419 -> `禁用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:427 -> `操作`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:445 -> `系统内置的用户组不能编辑`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:450 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:460 -> `系统内置的用户组不能删除`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:465 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:472 -> `编辑`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:478 -> `删除`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:504 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:528 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:552 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:584 -> `用户组管理`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/UserGroupManage/index.tsx:647 -> `暂无用户组数据`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:158 -> `添加成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:169 -> `未搜索到相关用户`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:413 -> `绑定用户 - ${name}`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:431 -> `输入用户名、邮箱或手机号码，回车搜索`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:450 -> `通过关键字搜索已绑定成员`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/BindUser/index.tsx:485 -> `暂无数据`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/components/ResourceItem/index.tsx:74 -> `已添加`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/components/ResourceItem/index.tsx:74 -> `添加`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:74 -> `模型需要授权后才可用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:87 -> `在内容管理中开启管控并发布到系统广场后可在此处进行授权`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:100 -> `在内容管理中开启管控并发布到系统广场后可在此处进行授权`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:110 -> `开发权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:497 -> `数据权限保存成功`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:505 -> `ID缺失，无法保存数据权限`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:668 -> `搜索智能体`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:761 -> `搜索网页应用`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:858 -> `每日token限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:862 -> `每日 token 限制，-1 表示不限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:866 -> `请输入每日token限制数量`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:875 -> `可创建工作空间数量`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:879 -> `可创建工作空间数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:887 -> `可创建智能体数量`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:891 -> `可创建智能体数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:899 -> `可创建网页应用数量`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:903 -> `可创建网页应用数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:911 -> `可创建知识库数量`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:915 -> `可创建知识库数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:923 -> `知识库存储空间上限 (GB)`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:928 -> `-1表示不限制, 0表示无权限, 精度为0.001GB, 1GB=1024MB, 1MB=1024KB`
- [hardcoded_chinese] src/pages/SystemManagement/MenuPermission/components/DataPermissionModal/index.tsx:953 -> `可创建数据表数量`
- ... 省略 178 条

## src/hooks

- [hardcoded_chinese] src/hooks/useAppDevChat.ts:320 -> `工具调用`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:354 -> `工具调用更新`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:402 -> `错误消息`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:404 -> `服务异常，请停止Agent服务并重新开始对话`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:411 -> `Agent服务已停止`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:416 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:423 -> `停止Agent服务失败`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:529 -> `AI助手连接失败`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:591 -> `检测到后台Agent服务正在运行`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:592 -> `是否停止当前运行的Agent服务？`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:600 -> `Agent服务已停止`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:605 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:612 -> `停止Agent服务失败`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:620 -> `已取消发送`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:699 -> `服务异常，请稍后再试`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:715 -> `AI助手连接失败`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:719 -> `AI助手连接失败`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:852 -> `请输入消息内容`
- [hardcoded_chinese] src/hooks/useAppDevChat.ts:957 -> `加载历史会话失败:`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:196 -> `API返回数据格式异常`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:316 -> `文件内容为空`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:334 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:346 -> `加载文件 ${fileId} 失败`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:457 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:459 -> `保存文件失败`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:481 -> `已取消编辑`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:512 -> `上传成功到 ${filePath.trim()}`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:522 -> `上传失败`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:527 -> `上传失败`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:803 -> `重命名成功: ${fileNode.name} → ${newName.trim()}`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:808 -> `重命名失败`
- [hardcoded_chinese] src/hooks/useAppDevFileManagement.ts:815 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevModelSelector.ts:45 -> `提示`
- [hardcoded_chinese] src/hooks/useAppDevModelSelector.ts:47 -> `请在系统管理或组件库中配置编码模型，添加模型的时候请选择支持Anthropic协议的模型，推荐使用智谱的Coding Plan https://bigmodel.cn/glm-coding`
- [hardcoded_chinese] src/hooks/useAppDevModelSelector.ts:56 -> `获取模型列表失败`
- [hardcoded_chinese] src/hooks/useAppDevModelSelector.ts:59 -> ` 加载模型列表失败:`
- [hardcoded_chinese] src/hooks/useAppDevModelSelector.ts:60 -> `加载模型列表失败，请刷新页面重试`
- [hardcoded_chinese] src/hooks/useAppDevProjectId.ts:34 -> `⚠️ [AppDevProjectId] 没有找到有效的 projectId`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:99 -> `你没有权限访问该项目`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:106 -> `获取项目详情时发生未知错误`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:163 -> `AI 对话`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:165 -> `文件更新`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:167 -> `上传单文件`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:169 -> `创建项目`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:171 -> `构建`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:173 -> `部署`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:175 -> `上传项目`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:177 -> `版本回滚`
- [hardcoded_chinese] src/hooks/useAppDevProjectInfo.ts:179 -> `未知操作`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:91 -> `开发环境启动成功`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:91 -> `开发服务器重启成功`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:113 -> `启动开发环境失败`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:113 -> `重启开发服务器失败`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:190 -> `保活请求失败`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:351 -> `启动开发环境失败`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:375 -> `项目ID不存在或无效，无法重启服务`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:377 -> `项目ID不存在或无效`
- [hardcoded_chinese] src/hooks/useAppDevServer.ts:423 -> `重启开发服务器失败`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:166 -> `项目ID不存在`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:186 -> `获取版本文件失败`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:189 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:212 -> `项目ID或目标版本不存在`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:230 -> `版本切换成功`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:232 -> `版本切换失败`
- [hardcoded_chinese] src/hooks/useAppDevVersionCompare.ts:235 -> `未知错误`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:129 -> `自动错误处理已达上限`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:130 -> `是否继续自动处理当前问题？`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:131 -> `继续`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:132 -> `取消`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:160 -> `检测到预览页面白屏，捕获到以下错误，请分析并修复：\n\n\`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:164 -> `分析以下日志并修复错误：\n\n\`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:168 -> `预览页面加载失败，请分析并修复：\n\n\`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:193 -> `[AutoErrorHandling] 自动错误处理未启用，跳过自定义错误处理`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:200 -> `[AutoErrorHandling] AI 正在处理中，跳过自定义错误处理`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:215 -> `[AutoErrorHandling] 跳过重复的自定义错误`
- [hardcoded_chinese] src/hooks/useAutoErrorHandling.ts:228 -> `[AutoErrorHandling] 当前自动发送次数为${model.autoRetryCount}`
- [hardcoded_chinese] src/hooks/useCopyTemplate.tsx:47 -> `模板复制成功`
- [hardcoded_chinese] src/hooks/useDataResourceManagement.ts:55 -> `获取数据资源列表失败:`
- [hardcoded_chinese] src/hooks/useDataResourceManagement.ts:56 -> `获取数据资源列表失败`
- [hardcoded_chinese] src/hooks/useDataResourceManagement.ts:95 -> `数据资源创建成功`
- ... 省略 106 条

## src/components/business-component

- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:134 -> `查看完整内容`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:152 -> `加载中...`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:153 -> `正在加载，请稍候...`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:164 -> `出现错误`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:165 -> `加载过程中出现错误，请重试`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:176 -> `网络连接失败`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:177 -> `网络连接异常，请检查网络设置后重试`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:188 -> `权限不足`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:189 -> `你没有访问此资源的权限，请联系管理员`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:201 -> `暂无内容`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:202 -> `当前没有可显示的内容`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:214 -> `暂无数据`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:215 -> `当前没有可用的数据`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:226 -> `等待开发服务器启动`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:227 -> `正在启动开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:238 -> `重启中`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:239 -> `正在重启开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:250 -> `开发中`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:251 -> `正在启动开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:262 -> `导入项目中`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:263 -> `正在启动开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:274 -> `服务器错误`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:275 -> `预览页面加载失败，请检查开发服务器状态或网络连接`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:286 -> `预览加载失败`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:287 -> `预览页面加载失败，请检查开发服务器状态或网络连接`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:298 -> `开发服务器启动失败`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:299 -> `正在启动开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:310 -> `暂无预览地址`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:311 -> `正在启动开发服务器，请稍候⋯`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:323 -> `开始新对话`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:324 -> `向 AI 助手提问，开始你的项目开发`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:337 -> `点击“+“添加数据资源`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:345 -> `暂无文件`
- [hardcoded_chinese] src/components/business-component/AppDevEmptyState/index.tsx:346 -> `当前目录下暂无文件`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:181 -> `页面预览`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:293 -> `请填写必填参数`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:387 -> `和${cachedAgentName}开始会话`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:400 -> `展开导航`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:416 -> `查看智能体详情`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:438 -> `打开预览页面`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:526 -> `您无该智能体权限`
- [hardcoded_chinese] src/components/business-component/ConversationDetails/index.tsx:609 -> `复制模板`
- [hardcoded_chinese] src/components/business-component/CopyToSpaceComponent/index.tsx:72 -> `页面复制成功`
- [hardcoded_chinese] src/components/business-component/CopyToSpaceComponent/index.tsx:95 -> `模板复制成功`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:261 -> `文件格式无效或已损坏，请确认是否为有效的 PPTX 文件`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:270 -> `网络请求失败，请检查网络连接后重试`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:275 -> `文件加载失败，请重试`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:280 -> `文件解析失败，文件可能已损坏或格式不支持`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:286 -> `文档预览失败，请确认文件格式正确`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:288 -> `表格预览失败，请确认文件格式正确`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:290 -> `PDF 预览失败，请确认文件格式正确`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:292 -> `演示文稿预览失败，请确认文件格式正确`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:294 -> `图片加载失败`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:296 -> `文件预览失败，请重试`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:455 -> `文件内容加载失败，请重试`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:483 -> `HTML 内容加载失败，请重试`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:736 -> `图片加载失败，请检查文件是否有效`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:885 -> `刷新`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:895 -> `下载`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:927 -> `预览失败`
- [hardcoded_chinese] src/components/business-component/FilePreview/index.tsx:928 -> `无法预览此文件`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/ConversationList/index.tsx:137 -> `编辑标题`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/ConversationList/index.tsx:149 -> `YYYY年MM月DD日 HH:mm:ss`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/ConversationList/index.tsx:152 -> `删除`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/ConversationList/index.tsx:166 -> `暂无内容摘要`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/ConversationList/index.tsx:170 -> `智能体`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:78 -> `标题不能为空`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:82 -> `标题长度不能超过 50 个字符`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:99 -> `修改成功`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:125 -> `删除成功`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:148 -> `搜索历史会话`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:168 -> `修改名称`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:174 -> `确定`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:175 -> `取消`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:183 -> `请输入新名称`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:197 -> `永久删除会话`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:202 -> `确定`
- [hardcoded_chinese] src/components/business-component/HistoryConversationList/index.tsx:203 -> `取消`
- [hardcoded_chinese] src/components/business-component/PagePreviewIframe/index.tsx:94 -> `复制模板`
- [hardcoded_chinese] src/components/business-component/PagePreviewIframe/index.tsx:265 -> `[PagePreviewIframe] popstate 事件：找不到目标 URL，已添加到历史记录`
- ... 省略 64 条

## src/services

- [hardcoded_chinese] src/services/appDev.ts:321 -> `📤 [Service] 发送聊天请求:`
- [hardcoded_chinese] src/services/appDev.ts:496 -> `📤 [API] 调用保存会话接口:`
- [hardcoded_chinese] src/services/appDev.ts:507 -> `📥 [API] 保存会话接口响应:`
- [hardcoded_chinese] src/services/common.ts:199 -> `请求错误 ${error.response.status}`
- [hardcoded_chinese] src/services/dataTable.ts:118 -> `, file); // 假设文件名为 `
- [hardcoded_chinese] src/services/ecosystem.ts:41 -> `搜索关键词`
- [hardcoded_chinese] src/services/ecosystem.ts:71 -> `获取客户端配置列表失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:98 -> `配置名称:`
- [hardcoded_chinese] src/services/ecosystem.ts:99 -> `配置描述:`
- [hardcoded_chinese] src/services/ecosystem.ts:120 -> `获取客户端配置详情失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:138 -> `配置删除成功`
- [hardcoded_chinese] src/services/ecosystem.ts:140 -> `配置删除失败`
- [hardcoded_chinese] src/services/ecosystem.ts:146 -> `UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:163 -> `删除客户端配置失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:180 -> `配置下线成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:181 -> `下线时间:`
- [hardcoded_chinese] src/services/ecosystem.ts:182 -> `分享状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:184 -> `配置下线失败`
- [hardcoded_chinese] src/services/ecosystem.ts:192 -> `UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:209 -> `下线客户端配置失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:226 -> `配置撤销成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:227 -> `撤销时间:`
- [hardcoded_chinese] src/services/ecosystem.ts:229 -> `配置撤销失败`
- [hardcoded_chinese] src/services/ecosystem.ts:235 -> `UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:252 -> `撤销发布失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:268 -> `我的AI插件`
- [hardcoded_chinese] src/services/ecosystem.ts:269 -> `这是一个AI助手插件`
- [hardcoded_chinese] src/services/ecosystem.ts:271 -> `插件`
- [hardcoded_chinese] src/services/ecosystem.ts:272 -> `张三`
- [hardcoded_chinese] src/services/ecosystem.ts:278 -> `草稿创建成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:279 -> `草稿UID:`
- [hardcoded_chinese] src/services/ecosystem.ts:280 -> `分享状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:288 -> `配置名称不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:293 -> `数据类型不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:309 -> `创建客户端配置草稿失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:325 -> `我的AI插件`
- [hardcoded_chinese] src/services/ecosystem.ts:326 -> `这是一个AI助手插件`
- [hardcoded_chinese] src/services/ecosystem.ts:328 -> `插件`
- [hardcoded_chinese] src/services/ecosystem.ts:329 -> `张三`
- [hardcoded_chinese] src/services/ecosystem.ts:331 -> `插件使用说明文档`
- [hardcoded_chinese] src/services/ecosystem.ts:336 -> `提交审核成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:337 -> `配置UID:`
- [hardcoded_chinese] src/services/ecosystem.ts:338 -> `分享状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:346 -> `配置名称不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:351 -> `数据类型不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:367 -> `保存并发布客户端配置失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:384 -> `我的AI插件`
- [hardcoded_chinese] src/services/ecosystem.ts:385 -> `这是一个AI助手插件`
- [hardcoded_chinese] src/services/ecosystem.ts:387 -> `插件`
- [hardcoded_chinese] src/services/ecosystem.ts:388 -> `张三`
- [hardcoded_chinese] src/services/ecosystem.ts:390 -> `插件使用说明文档`
- [hardcoded_chinese] src/services/ecosystem.ts:395 -> `提交审核成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:396 -> `配置UID:`
- [hardcoded_chinese] src/services/ecosystem.ts:397 -> `分享状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:405 -> `配置名称不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:410 -> `数据类型不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:426 -> `保存并发布客户端配置失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:443 -> `更新后的插件名称`
- [hardcoded_chinese] src/services/ecosystem.ts:444 -> `更新后的描述`
- [hardcoded_chinese] src/services/ecosystem.ts:446 -> `插件`
- [hardcoded_chinese] src/services/ecosystem.ts:447 -> `张三`
- [hardcoded_chinese] src/services/ecosystem.ts:453 -> `草稿更新成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:454 -> `更新时间:`
- [hardcoded_chinese] src/services/ecosystem.ts:455 -> `分享状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:463 -> `配置UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:468 -> `配置名称不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:473 -> `数据类型不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:489 -> `更新客户端配置草稿失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:506 -> `配置禁用成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:507 -> `禁用时间:`
- [hardcoded_chinese] src/services/ecosystem.ts:508 -> `使用状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:510 -> `配置禁用失败`
- [hardcoded_chinese] src/services/ecosystem.ts:518 -> `UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:538 -> `禁用生态市场配置失败:`
- [hardcoded_chinese] src/services/ecosystem.ts:555 -> `配置启用成功:`
- [hardcoded_chinese] src/services/ecosystem.ts:556 -> `启用时间:`
- [hardcoded_chinese] src/services/ecosystem.ts:557 -> `使用状态:`
- [hardcoded_chinese] src/services/ecosystem.ts:559 -> `配置启用失败`
- [hardcoded_chinese] src/services/ecosystem.ts:567 -> `UID不能为空`
- [hardcoded_chinese] src/services/ecosystem.ts:584 -> `启用生态市场配置失败:`
- ... 省略 30 条

## src/components/FileTreeView

- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:237 -> `新建文件`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:244 -> `新建文件夹`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:255 -> `重命名`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:262 -> `上传文件`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:273 -> `删除`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:283 -> `重命名`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:293 -> `下载`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:304 -> `导出为 PDF`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:314 -> `上传文件`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:325 -> `删除`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:335 -> `新建文件`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:342 -> `新建文件夹`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:352 -> `导入技能`
- [hardcoded_chinese] src/components/FileTreeView/FileContextMenu/index.tsx:364 -> `上传文件`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/MoreActionsMenu/index.tsx:44 -> `导入项目`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/MoreActionsMenu/index.tsx:67 -> `当前用户正在运行的所有智能体将全部被重启`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/MoreActionsMenu/index.tsx:89 -> `当前会话对应的智能体将重启`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/MoreActionsMenu/index.tsx:113 -> `导出结果`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:17 -> `永久`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:18 -> `1分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:19 -> `5分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:20 -> `10分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:21 -> `20分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:22 -> `30分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:23 -> `40分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:24 -> `50分钟`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:25 -> `1小时`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:26 -> `2小时`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:27 -> `4小时`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:28 -> `8小时`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:29 -> `16小时`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:30 -> `1天`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:73 -> `永久`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:77 -> `永久`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:102 -> `${seconds}秒`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:107 -> `会话ID不存在，无法分享`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:136 -> `远程桌面分享成功，链接已复制到剪切板`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:140 -> `分享失败，请稍后重试`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:144 -> `分享远程桌面失败:`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:145 -> `分享失败，请稍后重试`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:151 -> `会话ID不存在，无法分享`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:174 -> `分享成功，链接已复制到剪切板`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:177 -> `分享失败，请稍后重试`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:181 -> `分享文件失败:`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:182 -> `分享失败，请稍后重试`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:201 -> `分享远程桌面`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:201 -> `分享文件`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:218 -> `生成分享链接`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:219 -> `取消`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:229 -> `有效时间`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:230 -> `请选择有效时间`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:232 -> `请选择有效时间`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:240 -> `链接将在 ${formatTimeDisplay(expireSeconds || 5 * 60)} 后失效`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:241 -> `链接永久有效`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:248 -> `温馨提示：`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/ShareDesktopModal/index.tsx:249 -> `分享链接生成后将自动复制到剪切板；互联网上得到该分享链接的用户均可访问，请谨慎分享，注意数据风险。`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:165 -> `点击收起文件树`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:165 -> `点击展开文件树`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:222 -> `预览`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:226 -> `代码`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:247 -> `远程`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:284 -> `导出中...`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:284 -> `导出为 PDF`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:300 -> `下载中...`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:300 -> `下载`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:320 -> `复制`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:329 -> `复制成功`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:345 -> `分享`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:364 -> `退出全屏`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:364 -> `全屏`
- [hardcoded_chinese] src/components/FileTreeView/FilePathHeader/index.tsx:401 -> `关闭`
- [hardcoded_chinese] src/components/FileTreeView/FileTree/index.tsx:133 -> `重命名失败:`
- [hardcoded_chinese] src/components/FileTreeView/SearchView/index.tsx:150 -> `搜索文件...`
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:310 -> `刷新文件内容失败: `
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:315 -> `刷新文件树失败: `
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:368 -> `文件正在重命名中，请稍后再试`
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:377 -> `你有未保存的文件修改，请先保存后再切换文件`
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:426 -> `/api/computer/static/1464425/国际财经分析报告_20241222.md`
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:721 -> `你有未保存的文件修改，请先保存后再重命名`
- [hardcoded_chinese] src/components/FileTreeView/index.tsx:833 -> `你有未保存的文件修改，请先保存后再上传文件`
- ... 省略 17 条

## src/pages/SpaceKnowledge

- [hardcoded_chinese] src/pages/SpaceKnowledge/DocWrap/DocItem/index.tsx:36 -> `分析中`
- [hardcoded_chinese] src/pages/SpaceKnowledge/DocWrap/DocItem/index.tsx:37 -> `分段生成中`
- [hardcoded_chinese] src/pages/SpaceKnowledge/DocWrap/DocItem/index.tsx:61 -> `构建中`
- [hardcoded_chinese] src/pages/SpaceKnowledge/DocWrap/index.tsx:74 -> `搜索`
- [hardcoded_chinese] src/pages/SpaceKnowledge/KnowledgeHeader/index.tsx:67 -> `${docCount}个文档`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:76 -> `分段标识符`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:97 -> `输入分段标识符`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:99 -> `输入分段标识符，例如 \n 换行`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:105 -> `分段最大长度`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:107 -> `请输入100-5000的数值`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:117 -> `请输入正确的数字!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:120 -> `分段最大长度不得小于100，大于5000!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:126 -> `请输入100-5000的数值`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:130 -> `分段重叠度%`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:132 -> `请输入0-100的数值`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:142 -> `请输入正确的数字!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:145 -> `分段重叠度不得小于0，大于100!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/CreateSet/index.tsx:151 -> `请输入0-100的数值`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:25 -> `文档名称`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:26 -> `请输入文档名称`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:28 -> `输入文档名称`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:32 -> `文档内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:33 -> `请输入文档内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/TextFill/index.tsx:36 -> `输入文档内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/UploadFile/index.tsx:51 -> `请上传正确的文件类型`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/UploadFile/index.tsx:60 -> `请上传 PDF、TXT、DOC、DOCX、MD、JSON、JPG、PNG、GIF、WEBP、SVG、HEIC、MP4、MKV、MOV、WEBM、MP3、AAC、WAV、FLAC、OGG、OPUS 类型文件!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/UploadFile/index.tsx:65 -> `文件大小不能超过100MB!`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/index.tsx:111 -> `文档添加成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/index.tsx:122 -> `文档添加成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/index.tsx:212 -> `分段标识符`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/index.tsx:218 -> `分段标识符`
- [hardcoded_chinese] src/pages/SpaceKnowledge/LocalCustomDocModal/index.tsx:321 -> `添加内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:74 -> `上传失败，请检查文件格式是否正确`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:77 -> `上传文件出错:`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:100 -> `仅支持Excel文件(.xlsx/.xls)`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:107 -> `文件大小不能超过10MB`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:125 -> `请上传文件`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:134 -> `批量导入成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:159 -> `导出失败`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:168 -> `QA批量excel模板.xlsx`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:173 -> `下载QA批量excel模板失败`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:179 -> `QA批量导入`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaBatchModal/index.tsx:185 -> `下载Excel导入模板`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:39 -> `表单验证失败:`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:60 -> `编辑QA问答`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:60 -> `添加QA问答`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:75 -> `问题`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:76 -> `请输入问题`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:81 -> `请输入问题内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:88 -> `答案`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:89 -> `请输入答案`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaModal/index.tsx:94 -> `请输入答案内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:40 -> `问题`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:51 -> `答案`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:62 -> `向量化`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:74 -> `操作`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:88 -> `你确定要删除此QA问答吗?`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:92 -> `确定`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:93 -> `取消`
- [hardcoded_chinese] src/pages/SpaceKnowledge/QaTableList/index.tsx:216 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/DocRename/index.tsx:36 -> `更新成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/DocRename/index.tsx:62 -> `重命名`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/DocRename/index.tsx:81 -> `重命名`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/DocRename/index.tsx:85 -> `文档名称不能为空`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/DocRename/index.tsx:91 -> `请输入文档名称`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/RawSegmentEditModal/index.tsx:40 -> `编辑原始分段`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/RawSegmentEditModal/index.tsx:50 -> `分段内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/RawSegmentEditModal/index.tsx:52 -> `请输入分段内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/RawSegmentEditModal/index.tsx:53 -> `分段内容不能超过2000个字符`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/RawSegmentEditModal/index.tsx:58 -> `请输入分段内容`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/index.tsx:212 -> `修改成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/index.tsx:240 -> `预览原始文档`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/index.tsx:326 -> `编辑`
- [hardcoded_chinese] src/pages/SpaceKnowledge/RawSegmentInfo/index.tsx:337 -> `暂无分段`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:150 -> `删除文档成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:227 -> `你确定要删除此文档吗?`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:326 -> `删除QA问答成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:344 -> `请输入问题搜索`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:387 -> `QA问答更新成功`
- [hardcoded_chinese] src/pages/SpaceKnowledge/index.tsx:387 -> `添加QA问答成功`
- ... 省略 2 条

## src/pages/UserManage

- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:61 -> `消息发送成功`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:75 -> `未搜索到相关用户`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:98 -> `请输入消息内容`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:105 -> `请选择要添加的成员`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:175 -> `添加接受消息用户`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:180 -> `发送消息`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:193 -> `输入消息内容`
- [hardcoded_chinese] src/pages/UserManage/MessageSendModal/index.tsx:202 -> `输入用户名、邮箱或手机号码，回车搜索`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:254 -> `暂无数据`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:279 -> `暂无数据`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:304 -> `暂无数据`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:319 -> `每日token限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:323 -> `每日 token 限制，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:327 -> `请输入每日token限制数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:337 -> `可创建工作空间数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:341 -> `可创建工作空间数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:350 -> `可创建智能体数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:354 -> `可创建智能体数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:363 -> `可创建网页应用数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:367 -> `可创建网页应用数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:376 -> `可创建知识库数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:380 -> `可创建知识库数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:389 -> `知识库存储空间上限 (GB)`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:393 -> `知识库存储空间上限(GB)，-1表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:402 -> `可创建数据表数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:406 -> `可创建数据表数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:415 -> `可创建定时任务数量`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:419 -> `可创建定时任务数量，-1 表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:428 -> `智能体电脑内存(GB)`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:433 -> `智能体电脑内存 (GB，留空表示使用默认值4GB)`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:442 -> `智能体电脑 CPU 核心数`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:447 -> `智能体电脑 CPU 核心数（留空表示使用默认值）`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:456 -> `通用智能体每天对话次数限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:460 -> `通用智能体每天对话次数，-1表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:469 -> `网页应用开发每天对话次数`
- [hardcoded_chinese] src/pages/UserManage/components/DataPermissionModal/index.tsx:473 -> `网页应用开发每天对话次数，-1表示不限制`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:232 -> `角色`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:255 -> `暂无数据`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:265 -> `用户组`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:284 -> `暂无数据`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:295 -> `授权 - ${userName}`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:326 -> `取消全选`
- [hardcoded_chinese] src/pages/UserManage/components/UserAuthModal/index.tsx:326 -> `全选`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:65 -> `修改用户信息`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:65 -> `新增用户`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:82 -> `用户名`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:83 -> `请输入用户名`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:85 -> `用户昵称`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:86 -> `请输入用户昵称（姓名）`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:88 -> `手机号码`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:89 -> `请输入手机号码`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:91 -> `邮箱地址`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:92 -> `请输入邮箱地址`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:96 -> `登录密码`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:98 -> `请输入登录密码`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:100 -> `请输入登录密码`
- [hardcoded_chinese] src/pages/UserManage/components/UserFormModal.tsx:104 -> `用户类型`
- [hardcoded_chinese] src/pages/UserManage/components/UserViewMenuModal/index.tsx:97 -> `资源 ${resource.id}`
- [hardcoded_chinese] src/pages/UserManage/components/UserViewMenuModal/index.tsx:196 -> `菜单 ${menu.id}`
- [hardcoded_chinese] src/pages/UserManage/components/UserViewMenuModal/index.tsx:229 -> `查看菜单资源权限`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:88 -> `启用成功`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:96 -> `禁用成功`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:132 -> `修改`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:141 -> `禁用`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:151 -> `启用`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:161 -> `授权`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:169 -> `查看菜单资源权限`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:178 -> `查看数据权限`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:200 -> `用户名`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:203 -> `用户姓名`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:206 -> `昵称`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:212 -> `手机号码`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:218 -> `邮箱`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:224 -> `类型`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:229 -> `管理员`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:230 -> `成员`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:234 -> `状态`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:248 -> `正常`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:248 -> `禁用`
- [hardcoded_chinese] src/pages/UserManage/index.tsx:254 -> `加入时间`
- ... 省略 2 条

## src/pages/AppDev

- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ChatInputHome/index.tsx:411 -> `正在处理中，不能发送消息`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ChatInputHome/index.tsx:660 -> `上传图片失败:`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx:181 -> `待执行`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx:182 -> `执行中`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx:183 -> `已完成`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/PlanProcess/index.tsx:184 -> `失败`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ReactScrollToBottomContainer/index.tsx:239 -> `加载更多历史会话`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ReactScrollToBottomContainer/index.tsx:251 -> `[handleScrollTo] 滚动位置恢复:`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ReactScrollToBottomContainer/index.tsx:279 -> `[handleScrollTo] 滚动位置偏差，进行调整:`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/components/ReactScrollToBottomContainer/index.tsx:428 -> `[ScrollController] atBottom 状态:`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/genAppDevPlugin.tsx:36 -> `❌ [genAppDevPlugin] Plan 数据解析失败:`
- [hardcoded_chinese] src/pages/AppDev/components/ChatArea/genAppDevPlugin.tsx:71 -> `❌ [genAppDevPlugin] ToolCall 数据解析失败:`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-border.ts:117 -> `; // border 默认是 1px，返回 Tailwind 边框宽度值 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-letterSpacing.ts:39 -> ` } 或 { label: `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-lineHeight.ts:42 -> ` } 或 { label: `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-radius.ts:30 -> ` 可能对应 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-radius.ts:30 -> ` 或 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-radius.ts:30 -> `，优先返回 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-radius.ts:33 -> ` 比 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-shadow.ts:30 -> ` 可能对应 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-shadow.ts:30 -> ` 或 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-shadow.ts:30 -> `，优先返回 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-shadow.ts:33 -> ` 比 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-space.ts:214 -> ` 中的 `
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:28 -> `重置`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:33 -> `靠左`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:38 -> `居中`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:43 -> `靠右`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:48 -> `两端对齐`
- [hardcoded_chinese] src/pages/AppDev/components/DesignViewer/utils/tailwind-textAlign.tsx:76 -> ` } 或 { label: `
- [hardcoded_chinese] src/pages/AppDev/components/DevLogConsole/index.tsx:125 -> `点击添加到聊天框`
- [hardcoded_chinese] src/pages/AppDev/components/DevLogConsole/index.tsx:263 -> `最新日志包含错误`
- [hardcoded_chinese] src/pages/AppDev/components/DevLogConsole/index.tsx:286 -> `刷新日志`
- [hardcoded_chinese] src/pages/AppDev/components/DevLogConsole/index.tsx:294 -> `清空日志`
- [hardcoded_chinese] src/pages/AppDev/components/DevLogConsole/index.tsx:302 -> `关闭日志控制台`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/AppDevFileTree/index.tsx:68 -> `重命名失败:`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/FileContextMenu/index.tsx:124 -> `重命名`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/FileContextMenu/index.tsx:131 -> `上传文件`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/FileContextMenu/index.tsx:142 -> `删除`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/FileContextMenu/index.tsx:152 -> `导入项目`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/FileContextMenu/index.tsx:159 -> `上传文件`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/index.tsx:172 -> `展开文件树`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/index.tsx:172 -> `收起文件树`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/index.tsx:206 -> `正在加载...`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/index.tsx:207 -> `请稍候`
- [hardcoded_chinese] src/pages/AppDev/components/FileTreePanel/index.tsx:216 -> `导入项目`
- [hardcoded_chinese] src/pages/AppDev/hooks/useDevLogs.ts:209 -> `获取日志失败`
- [hardcoded_chinese] src/pages/AppDev/hooks/useDevLogs.ts:231 -> `取消轮询时出错:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:140 -> `[useReactScrollToBottom] 滚动到底部失败:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:152 -> `[useReactScrollToBottom] 检查是否在底部`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:155 -> `[useReactScrollToBottom] 检查滚动位置失败:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:167 -> `[useReactScrollToBottom] 检查滚动位置失败:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:214 -> `[useReactScrollToBottom] 处理用户滚动事件失败:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:298 -> `[useReactScrollToBottom] 处理新消息失败:`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:503 -> `[ScrollPositionObserver] 未找到滚动容器`
- [hardcoded_chinese] src/pages/AppDev/hooks/useReactScrollToBottom.tsx:557 -> `[ScrollPositionObserver] 备用监听器未找到滚动容器`
- [hardcoded_chinese] src/pages/AppDev/index.tsx:441 -> `[AppDev] ✅ 自动发送消息事件已触发，requestId: ${currentRequestIdRef.current}`
- [hardcoded_chinese] src/pages/AppDev/index.tsx:958 -> `上传文件总大小不能超过${maxFileSize}MB`
- [hardcoded_chinese] src/pages/AppDev/index.tsx:1113 -> `上传文件总大小不能超过${maxFileSize}MB`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:142 -> `🚨 检测到开发服务器错误，相关日志如下：\n\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:145 -> `**错误摘要：**\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:146 -> `- 错误行号: ${errorLog.line}\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:147 -> `未知`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:148 -> `- 错误内容: ${errorLog.content}\n\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:152 -> `**错误堆栈：**\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:160 -> `**上下文日志（最近50行）：**\n`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:170 -> `\n请分析上述错误并提供修复建议。`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:352 -> `未知时间`
- [hardcoded_chinese] src/pages/AppDev/utils/devLogParser.ts:415 -> `时间戳解析失败:`
- [hardcoded_chinese] src/pages/AppDev/utils/markdownProcess.ts:5 -> `序列化的JSON`
- [hardcoded_chinese] src/pages/AppDev/utils/markdownProcess.ts:21 -> `序列化的JSON`
- [hardcoded_chinese] src/pages/AppDev/utils/markdownProcess.ts:38 -> `序列化的JSON`

## src/pages/SpacePageDevelop

- [hardcoded_chinese] src/pages/SpacePageDevelop/AuthConfigModal/index.tsx:55 -> `页面ID不存在`
- [hardcoded_chinese] src/pages/SpacePageDevelop/AuthConfigModal/index.tsx:76 -> `认证配置`
- [hardcoded_chinese] src/pages/SpacePageDevelop/AuthConfigModal/index.tsx:89 -> `免登录访问`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:58 -> `添加成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:75 -> `修改成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:93 -> `删除成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:111 -> `请输入域名`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:118 -> `请输入有效的域名格式`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:133 -> `移除域名绑定`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:147 -> `确认移除`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:149 -> `取消`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:182 -> `域名绑定管理`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:275 -> `修改域名`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:275 -> `添加新域名`
- [hardcoded_chinese] src/pages/SpacePageDevelop/DomainBindingModal/index.tsx:284 -> `请输入域名，如 example.com`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:96 -> `请上传项目压缩包文件`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:104 -> `仅支持.zip后缀的压缩文件`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:171 -> `仅支持压缩文件(.zip)`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:178 -> `文件大小不能超过10MB`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:209 -> `创建应用`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:229 -> `名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:230 -> `请输入名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:232 -> `请输入名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:236 -> `描述`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:237 -> `请输入描述`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PageCreateModal/index.tsx:240 -> `图标`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:27 -> `添加路径`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:27 -> `修改路径`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:40 -> `${title}成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:108 -> `路径名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:109 -> `请输入路径名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:111 -> `请输入路径名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:115 -> `路径URI`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:117 -> `请输入路径URI`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:124 -> `请输入正确的路径URI，必须以/开头`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:132 -> `路径URI，例如 /detail/view 或 /detail/view/{id}`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:137 -> `路径功能描述`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/AddPathModal/index.tsx:139 -> `路径功能描述信息，例如 获取详情信息`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:85 -> `保存成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:123 -> `参数名称`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:129 -> `请输入参数名称，确保含义清晰`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:136 -> `参数描述`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:141 -> `请输入参数描述，确保描述详细便于大模型更好的理解`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:150 -> `传入方式`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:167 -> `是否必须`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:184 -> `默认值`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:190 -> `请输入默认值`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:199 -> `开启`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:217 -> `操作`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/PathParamsConfigContent/index.tsx:237 -> `暂无路径参数`
- [hardcoded_chinese] src/pages/SpacePageDevelop/PathParamsConfigModal/index.tsx:168 -> `新增路径`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:55 -> `保存成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:70 -> `路径不能相同`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:78 -> `根路径/是系统内置，无需配置`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:145 -> `路径`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:149 -> `请输入路径`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:156 -> `后端地址`
- [hardcoded_chinese] src/pages/SpacePageDevelop/ReverseProxyModal/ReverseProxyContentConfig/index.tsx:160 -> `请输入后端地址`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:189 -> `删除成功`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:317 -> `页面URL不存在`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:328 -> `项目ID不存在或无效，无法导出`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:337 -> `导出失败`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:345 -> `项目导出成功！`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:351 -> `导出过程中发生未知错误`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:353 -> `导出失败: ${errorMessage}`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:366 -> `域名绑定仅在发布类型为“应用”且认证配置为“免登录访问”开启时可用`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:409 -> `你确定要删除此页面吗?`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:480 -> `搜索页面`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:533 -> `查看详情`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:552 -> `已发布`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:552 -> `未发布`
- [hardcoded_chinese] src/pages/SpacePageDevelop/index.tsx:561 -> `未能找到相关结果`

## src/pages/SpaceLibrary

- [hardcoded_chinese] src/pages/SpaceLibrary/ComponentItem/index.tsx:69 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/IntranetServerCommand/index.tsx:19 -> `内网服务器执行命令`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:104 -> `模型检测连接成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:125 -> `模型已创建成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:126 -> `模型已更新成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:172 -> `新增模型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:172 -> `更新模型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:235 -> `模型名称`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:236 -> `输入模型名称`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:238 -> `输入模型名称`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:243 -> `模型标识`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:244 -> `输入模型标识`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:246 -> `输入模型标识`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:251 -> `模型介绍`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:252 -> `输入模型介绍`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:255 -> `输入模型介绍`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:265 -> `模型类型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:267 -> `请选择模型类型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:278 -> `请选择模型类型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:285 -> `推理模型`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:289 -> `是`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:290 -> `否`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:298 -> `向量维度`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:300 -> `填写向量维度`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:312 -> `最大输出token数`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:313 -> `请输入最大输出token数`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:320 -> `最大上下文长度`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:321 -> `请输入最大上下文长度`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:328 -> `函数调用支持`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:329 -> `函数调用支持`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:333 -> `选择函数调用支持`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:345 -> `禁用后，将不可再被选择，正在使用中的智能体不受影响`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:353 -> `启用`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:354 -> `禁用`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:361 -> `接口协议`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:362 -> `选择模型接口协议`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:366 -> `请选择模型接口协议`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:370 -> `接口配置`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:379 -> `接口配置`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:384 -> `请选择调用策略`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:391 -> `接口配置`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:406 -> `输入URL`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:408 -> `输入URL`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:414 -> `输入API KEY`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:416 -> `输入API KEY`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:420 -> `权重`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:422 -> `输入权重值`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:424 -> `输入权重值`
- [hardcoded_chinese] src/pages/SpaceLibrary/CreateModel/index.tsx:436 -> `输入权重值`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:219 -> `插件复制成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:247 -> `插件删除成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:258 -> `模型删除成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:269 -> `工作流复制成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:288 -> `工作流删除成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:299 -> `知识库删除成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:310 -> `数据表删除成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:321 -> `数据表复制成功`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:444 -> `你确定要删除此组件吗?`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:521 -> `导出配置 - ${info?.name}`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:522 -> `如果内部包含数据表或知识库，数据本身不会导出`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:542 -> `导出配置 - ${info?.name}`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:543 -> `仅导出数据表结构，数据本身不会导出`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:670 -> `搜索组件`
- [hardcoded_chinese] src/pages/SpaceLibrary/index.tsx:715 -> `未能找到相关结果`

## src/pages/SpaceTaskCenter

- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:91 -> `执行中`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:97 -> `任务创建，等待执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:103 -> `执行成功，待下次执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:109 -> `执行失败，待下次执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:116 -> `已结束，不再执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:122 -> `已结束，不再执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:173 -> `查询任务列表失败`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:282 -> `执行任务成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:296 -> `启用任务成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:310 -> `停用任务成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:324 -> `删除任务成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:334 -> `任务类型`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:339 -> `智能体`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:340 -> `工作流`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:343 -> `请选择任务类型`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:350 -> `智能体`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:352 -> `工作流`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:358 -> `任务名称`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:363 -> `请输入任务名称`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:368 -> `任务对象`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:383 -> `任务状态`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:393 -> `执行次数`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:399 -> `最近执行时间`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:406 -> `下次执行时间`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:413 -> `创建人`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:420 -> `创建时间`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:427 -> `操作`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:439 -> `手动执行`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:444 -> `启用`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:446 -> `确认启用该任务？`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:451 -> `停用`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:453 -> `确认停用该任务？`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:458 -> `执行记录`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:468 -> `编辑`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:473 -> `删除`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CenterProTable/index.tsx:474 -> `确认删除该任务？`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/components/SelectTarget/index.tsx:125 -> `添加${item.label}`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/components/SelectTargetFormItem/index.tsx:99 -> `请选择${label}`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/components/SelectTargetFormItemTarget/index.tsx:20 -> `删除`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/components/TimedPeriodSelector/index.tsx:148 -> `请输入`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/components/TimedPeriodSelector/index.tsx:156 -> `请输入`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:58 -> `定时任务已创建成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:73 -> `定时任务更新成功`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:283 -> `创建定时任务`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:283 -> `更新定时任务`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:305 -> `定时周期`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:311 -> `任务名称`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:312 -> `请输入任务名称`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:314 -> `请输入任务名称`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:321 -> `任务对象`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:330 -> `保持会话`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:331 -> `选择“否”时将为每次任务执行创建一个全新的会话`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:332 -> `请选择是否保持会话`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:334 -> `是`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:334 -> `否`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:338 -> `任务内容`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:339 -> `请输入任务内容`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:342 -> `请输入你要执行的任务信息，信息提供的越详细执行成功率越高`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:356 -> `参数配置`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/CreateTimedTask/index.tsx:360 -> `请填写参数配置`
- [hardcoded_chinese] src/pages/SpaceTaskCenter/index.tsx:51 -> `任务中心`

## src/pages/SpaceTable

- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:52 -> `请选择时间`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:55 -> `请输入${fieldName}`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:60 -> `请输入${fieldName}`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:87 -> `数值范围：[-2147483648, 2147483647]`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:88 -> `精度20位,整数部分最多14位,小数部分最多6位`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:94 -> `请输入${fieldName}`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:112 -> `提交`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:113 -> `取消`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:130 -> `请选择`
- [hardcoded_chinese] src/pages/SpaceTable/AddAndModify/index.tsx:131 -> `请输入`
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:67 -> `共 ${total} 条`
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:70 -> `条 / 页`
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:105 -> `; // 转换为 `
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:115 -> `操作`
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:126 -> `编辑`
- [hardcoded_chinese] src/pages/SpaceTable/DataTable/index.tsx:132 -> `删除`
- [hardcoded_chinese] src/pages/SpaceTable/DeleteSure/index.tsx:44 -> `提交`
- [hardcoded_chinese] src/pages/SpaceTable/DeleteSure/index.tsx:45 -> `取消`
- [hardcoded_chinese] src/pages/SpaceTable/DeleteSure/index.tsx:75 -> `请再次确认`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/ClearDataTooltip/index.tsx:20 -> `清空表数据后,可修改`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:97 -> `请输入${fieldName}默认值`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:126 -> `数值范围：[-2147483648, 2147483647]`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:127 -> `精度20位,整数部分最多14位,小数部分最多6位`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:156 -> `请选择时间`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:174 -> `序号`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:180 -> `字段名`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:191 -> `请输入字段名`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:203 -> `字段详细描述`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:211 -> `请输入字段详细描述`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:222 -> `字段类型`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:242 -> `数据长度`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:261 -> `是否必须`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:263 -> `是否必须`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:283 -> `是否唯一`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:313 -> `是否启用`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:333 -> `默认值`
- [hardcoded_chinese] src/pages/SpaceTable/StructureTable/index.tsx:346 -> `操作`
- [hardcoded_chinese] src/pages/SpaceTable/TableHeader/index.tsx:37 -> `${total}条记录`
- [hardcoded_chinese] src/pages/SpaceTable/TableOperationBar/index.tsx:48 -> `请上传 Excel 文件（.xlsx 或 .xls 格式）`
- [hardcoded_chinese] src/pages/SpaceTable/TableOperationBar/index.tsx:55 -> `文件大小不能超过 100MB`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:216 -> `字段名只能包含字母、数字、下划线，且必须以字母开头`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:227 -> `保存成功`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:337 -> `名称不能为空`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:348 -> `修改成功`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:361 -> `删除确认`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:361 -> `确定要删除吗？`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:363 -> `删除成功`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:379 -> `清除成功`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:392 -> `文件正在处理中，跳过重复请求:`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:406 -> `导入成功`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:411 -> `导入失败，请重试`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:420 -> `文件上传失败，请重试`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:427 -> `文件上传中，进度:`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:450 -> `提示`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:452 -> `当前表结构已修改，是否保存？`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:616 -> `修改数据`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:616 -> `新增数据`
- [hardcoded_chinese] src/pages/SpaceTable/index.tsx:644 -> `清除确认`

## src/pages/Square

- [hardcoded_chinese] src/pages/Square/PluginDetail/PluginHeader/index.tsx:79 -> `取消收藏成功`
- [hardcoded_chinese] src/pages/Square/PluginDetail/PluginHeader/index.tsx:87 -> `收藏成功`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:38 -> `参数名称`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:45 -> `参数描述`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:52 -> `参数类型`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:58 -> `传入方式`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:64 -> `是否必须`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:69 -> `是`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:69 -> `否`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:72 -> `默认值`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:78 -> `开启`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:83 -> `是`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:83 -> `否`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:90 -> `参数名称`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:97 -> `参数描述`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:104 -> `参数类型`
- [hardcoded_chinese] src/pages/Square/PluginDetail/index.tsx:159 -> `暂无数据`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:50 -> `模板复制成功`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:80 -> `技能ID不存在或无效，无法导出`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:91 -> `导出失败`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:102 -> `导出成功！`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:106 -> `导出项目失败:`
- [hardcoded_chinese] src/pages/Square/SkillDetail/index.tsx:107 -> `导出失败，请重试`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:47 -> `模板复制成功`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:67 -> `参数名称`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:74 -> `参数描述`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:81 -> `参数类型`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:87 -> `传入方式`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:93 -> `是否必须`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:98 -> `是`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:98 -> `否`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:101 -> `默认值`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:107 -> `开启`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:112 -> `是`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:112 -> `否`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:119 -> `参数名称`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:126 -> `参数描述`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:133 -> `参数类型`
- [hardcoded_chinese] src/pages/Square/WorkflowIdDetail/index.tsx:224 -> `暂无数据`
- [hardcoded_chinese] src/pages/Square/index.tsx:58 -> `智能体`
- [hardcoded_chinese] src/pages/Square/index.tsx:66 -> `全部`
- [hardcoded_chinese] src/pages/Square/index.tsx:67 -> `仅查看官方`
- [hardcoded_chinese] src/pages/Square/index.tsx:107 -> `站点默认通用型智能体未配置`
- [hardcoded_chinese] src/pages/Square/index.tsx:157 -> `智能体`
- [hardcoded_chinese] src/pages/Square/index.tsx:161 -> `网页应用`
- [hardcoded_chinese] src/pages/Square/index.tsx:165 -> `技能`
- [hardcoded_chinese] src/pages/Square/index.tsx:169 -> `插件`
- [hardcoded_chinese] src/pages/Square/index.tsx:173 -> `工作流`
- [hardcoded_chinese] src/pages/Square/index.tsx:181 -> `网页应用`
- [hardcoded_chinese] src/pages/Square/index.tsx:184 -> `智能体`
- [hardcoded_chinese] src/pages/Square/index.tsx:187 -> `工作流`
- [hardcoded_chinese] src/pages/Square/index.tsx:190 -> `技能`
- [hardcoded_chinese] src/pages/Square/index.tsx:193 -> `模板`
- [hardcoded_chinese] src/pages/Square/index.tsx:387 -> `人人都是智能设计师`
- [hardcoded_chinese] src/pages/Square/index.tsx:391 -> `新一代AI应用设计、开发、实践平台 \n 无需代码，轻松创建，适合各类人群，支持多种端发布及API`
- [hardcoded_chinese] src/pages/Square/index.tsx:410 -> `请选择分类`
- [hardcoded_chinese] src/pages/Square/index.tsx:434 -> `搜索`
- [hardcoded_chinese] src/pages/Square/index.tsx:587 -> `暂无数据`

## src/layouts/Setting

- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:33 -> `重置成功`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:74 -> `新密码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:76 -> `请输入新密码!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:82 -> `请输入正确的新密码!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:87 -> `请输入新密码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:91 -> `确认密码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:93 -> `请再次输入新密码!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:101 -> `两次密码不一致!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:103 -> `请输入正确的密码!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:108 -> `请再次输入新密码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:112 -> `验证码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:114 -> `请输入验证码`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:120 -> `请输入正确的验证码!`
- [hardcoded_chinese] src/layouts/Setting/ResetPassword/index.tsx:126 -> `请输入验证码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:34 -> `绑定成功`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:76 -> `邮箱绑定`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:76 -> `手机号绑定`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:86 -> `邮箱地址`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:86 -> `手机号码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:90 -> `请输入邮箱地址`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:90 -> `请输入手机号码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:98 -> `请输入正确的邮箱地址!`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:102 -> `请输入正确的手机号码!`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:108 -> `请输入邮箱地址`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:108 -> `请输入手机号码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:112 -> `验证码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:114 -> `请输入验证码`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:120 -> `请输入正确的验证码!`
- [hardcoded_chinese] src/layouts/Setting/SettingEmail/index.tsx:126 -> `请输入验证码`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:89 -> `更新主题色失败:`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:90 -> `主题色更新失败`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:108 -> `深色`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:108 -> `浅色`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:114 -> `更新背景图失败:`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:115 -> `背景图更新失败`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:125 -> `更新导航风格失败:`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:126 -> `导航风格更新失败`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:151 -> `预览背景图失败:`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:158 -> `深色`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:159 -> `浅色`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:166 -> `切换导航主题失败:`
- [hardcoded_chinese] src/layouts/Setting/ThemeSwitchPanel.tsx:167 -> `导航主题切换失败`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:67 -> `使用TOKEN上限`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:73 -> `通用智能体对话次数`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:79 -> `网页应用开发对话次数`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:85 -> `可创建工作空间数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:91 -> `可创建智能体数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:97 -> `可创建网页应用数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:103 -> `可创建知识库数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:109 -> `知识库存储上限`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:115 -> `可创建数据表数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:121 -> `可创建定时任务数量`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:127 -> `智能体电脑最大内存`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:138 -> `获取用量统计失败:`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:148 -> `类型`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:154 -> `每日`
- [hardcoded_chinese] src/layouts/Setting/UsageStatistics/index.tsx:160 -> `其他数量`

## src/pages/IMChannel

- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/DynamicChannelForm/index.tsx:17 -> `此项为必填项`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:67 -> `本次扫码已由于超时停止，请重新获取二维码`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:88 -> `连接成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:90 -> `扫码确认成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:101 -> `二维码已过期，请重新获取`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:144 -> `获取二维码成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:192 -> `扫码连接`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:192 -> `点击获取二维码并使用手机微信扫码。`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:213 -> `正在获取二维码...`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:319 -> `重要提示`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:320 -> `同一个微信在第二次扫码确认后，原有的机器人连接将立即失效。请务必点击下方的“确定”按钮以保存并生效当前配置。`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:329 -> `重新获取二维码`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/components/WechatIlinkForm/index.tsx:329 -> `获取二维码`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:133 -> `新增成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:133 -> `编辑成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:155 -> `测试连接成功`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:175 -> `编辑`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:175 -> `新增`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:176 -> `应用`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:176 -> `机器人`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:218 -> `智能体`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:219 -> `通用智能体将使用你的沙箱（电脑）环境执行任务，切勿将对应的机器人分享给他人使用。`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:231 -> `输出方式`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:232 -> `机器人回复消息时，是逐字逐句显示还是全部一次性显示。`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:234 -> `流式输出（打字机效果）`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:235 -> `一次性输出`
- [hardcoded_chinese] src/pages/IMChannel/components/CreateIMChannel/index.tsx:239 -> `启用状态`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:158 -> `启用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:158 -> `停用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:177 -> `删除后将无法恢复，请谨慎操作。`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:178 -> `确认`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:180 -> `取消`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:185 -> `删除成功`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:201 -> `该`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:204 -> `智能机器人`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:204 -> `企业应用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:216 -> `未绑定智能体`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:223 -> `机器人`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:223 -> `应用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:243 -> `禁用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:243 -> `启用`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:252 -> `编辑`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:262 -> `删除`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:271 -> `确认删除${platformName}${typeLabel}？`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:293 -> `未能找到匹配的结果`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:293 -> `未能找到相关结果`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:296 -> `未找到包含 “${keyword}” 的机器人或配置`
- [hardcoded_chinese] src/pages/IMChannel/components/IMChannelCardList/index.tsx:297 -> `当前平台下暂无机器人，请点击上方“新增机器人”按钮开始创建`
- [hardcoded_chinese] src/pages/IMChannel/index.tsx:24 -> `新增机器人`
- [hardcoded_chinese] src/pages/IMChannel/index.tsx:28 -> `新增应用`
- [hardcoded_chinese] src/pages/IMChannel/index.tsx:129 -> `IM 机器人`
- [hardcoded_chinese] src/pages/IMChannel/index.tsx:134 -> `搜索智能体名称`

## src/pages/SpaceLibraryLog

- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:149 -> `复制成功`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:181 -> `日志详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:314 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:108 -> `类型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:112 -> `智能体`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:113 -> `插件`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:114 -> `工作流`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:120 -> `请选择类型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:126 -> `对象ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:132 -> `请输入对象ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:137 -> `对象名称`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:141 -> `请输入对象名称`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:144 -> `请求ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:149 -> `请输入请求ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:152 -> `用户ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:157 -> `请输入用户ID，仅支持输入整数`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:162 -> `用户名`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:166 -> `请输入用户名`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:169 -> `会话ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:172 -> `请输入会话ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:181 -> `查看会话详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:201 -> `输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:210 -> `多个关键字以空格分隔，请输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:213 -> `输出内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:222 -> `多个关键字以空格分隔，请输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:226 -> `时间范围`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:232 -> `输入token`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:239 -> `输出token`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:246 -> `请求时间`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:257 -> `整体耗时`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:359 -> `查询失败`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:372 -> `查询日志失败`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:385 -> `该条记录缺少 requestId，无法查看详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:397 -> `操作`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:410 -> `详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:43 -> `智能体`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:45 -> `插件`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:47 -> `工作流`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:49 -> `知识库`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:51 -> `变量`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:53 -> `数据表`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:55 -> `模型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:59 -> `工具调用`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:61 -> `计划`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:70 -> `类型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:71 -> `状态`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:71 -> `成功`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:72 -> `名称`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:73 -> `耗时`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:76 -> `发起时间`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/NodeDetails/index.tsx:84 -> `结束时间`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/index.tsx:6 -> `日志查询`

## src/pages/TeamSetting

- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:39 -> `管理员`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:40 -> `成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:75 -> `添加成功`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:86 -> `未搜索到相关用户`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:112 -> `请选择要添加的成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:190 -> `添加新成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/AddMember.tsx:201 -> `输入用户名、邮箱或手机号码，回车搜索`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:59 -> `删除成功`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:66 -> `关键字`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:70 -> `搜索`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:74 -> `昵称`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:79 -> `用户名`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:84 -> `角色`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:88 -> `创建人`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:89 -> `管理员`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:90 -> `成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:94 -> `成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:95 -> `创建人`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:96 -> `管理员`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:101 -> `加入时间`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:108 -> `操作`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:119 -> `删除`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:121 -> `确认删除`
- [hardcoded_chinese] src/pages/TeamSetting/components/MemberManageTab.tsx:122 -> `你确定要删除该用户吗？`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:64 -> `修改成功`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:90 -> `编辑团队简介`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:116 -> `团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:117 -> `请输入团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:119 -> `请输入团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:123 -> `描述`
- [hardcoded_chinese] src/pages/TeamSetting/components/ModifyTeam.tsx:125 -> `描述团队`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:40 -> `删除成功`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:63 -> `删除团队`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:89 -> `请输入需要删除的团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:91 -> `请输入需要删除的团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:98 -> `输入的团队名称与要删除的团队名称不匹配`
- [hardcoded_chinese] src/pages/TeamSetting/components/RemoveSpace.tsx:104 -> `请输入团队名称`
- [hardcoded_chinese] src/pages/TeamSetting/components/SpaceSettingTab.tsx:66 -> `关闭后，用户将无法看见“智能体开发”和“组件库”，创建者和管理员不受影响`
- [hardcoded_chinese] src/pages/TeamSetting/components/SpaceSettingTab.tsx:78 -> `打开后，拥有该空间权限的用户在其他空间完成开发的智能体、插件、工作流，可以发布到该空间的广场上`
- [hardcoded_chinese] src/pages/TeamSetting/components/TransferSpace.tsx:64 -> `转让成功`
- [hardcoded_chinese] src/pages/TeamSetting/components/TransferSpace.tsx:97 -> `转移团队所有权`
- [hardcoded_chinese] src/pages/TeamSetting/components/TransferSpace.tsx:116 -> `将所有权转让给`
- [hardcoded_chinese] src/pages/TeamSetting/components/TransferSpace.tsx:120 -> `请选择团队成员`
- [hardcoded_chinese] src/pages/TeamSetting/components/TransferSpace.tsx:126 -> `请选择团队成员`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:28 -> `创建人`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:30 -> `管理员`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:32 -> `成员`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:58 -> `修改成功`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:95 -> `成员管理`
- [hardcoded_chinese] src/pages/TeamSetting/index.tsx:107 -> `空间设置`

## src/pages/MorePage

- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:43 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:77 -> `更新成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:84 -> `创建成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:96 -> `编辑 API Key`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:96 -> `新建 API Key`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:109 -> `密匙名称`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:110 -> `例如:生产环境API`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:111 -> `请输入密匙名称`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:116 -> `过期时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:117 -> `请选择过期时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:118 -> `留空表示永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:126 -> `自动生成`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:131 -> `状态`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:133 -> `启用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyFormModal/index.tsx:134 -> `停用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:204 -> ` 或 ISO 字符串且非 `
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:208 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:225 -> `权限配置保存成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:230 -> `保存权限失败:`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:325 -> `暂无权限定义`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:38 -> `接口地址`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:45 -> `调用总次数`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:55 -> `本月调用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:65 -> `今日调用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:75 -> `操作`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyStatsModal/index.tsx:86 -> `查看记录`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:26 -> `启用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:27 -> `停用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:62 -> `API KEY 已成功复制到剪贴板`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:74 -> `密钥名称`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:93 -> `隐藏`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:93 -> `显示`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:101 -> `复制`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:114 -> `创建时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:121 -> `过期时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:128 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:135 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:141 -> `状态`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:147 -> `未知`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:153 -> `操作`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:166 -> `调用统计`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:175 -> `权限配置`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:184 -> `编辑`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:193 -> `删除`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:198 -> `删除后将无法恢复，请谨慎操作。`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:203 -> `删除成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:214 -> `API 密钥管理`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:215 -> `管理您的API密钥与访问权限`

## src/pages/SpaceDevelop

- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:38 -> `收藏成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:97 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:106 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:115 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:124 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:133 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:142 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/ApplicationItem/index.tsx:226 -> `无此资源权限`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:70 -> `修改成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:79 -> `删除成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:84 -> `复制成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:131 -> `你确定要删除此API Key吗?`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:153 -> `创建人`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:166 -> `创建时间`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:182 -> `开启开发模式后，未发布的变更也将实时体现。`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:210 -> `复制`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateApiKeyModal/index.tsx:271 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:43 -> `复制代码`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:45 -> `复制代码`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:46 -> `，默认`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:51 -> `iframe代码复制`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:163 -> `iframe代码复制成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/CopyChatWidgetCode/index.tsx:171 -> `复制代码`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:78 -> `修改成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:87 -> `删除成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:98 -> `复制成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:141 -> `你确定要删除该链接吗?`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:158 -> `链接地址`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:176 -> `复制`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:195 -> `二维码`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:218 -> `登录可用`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:235 -> `有效期`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:254 -> `操作`
- [hardcoded_chinese] src/pages/SpaceDevelop/CreateTempChatModal/index.tsx:309 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:182 -> `已成功创建副本`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:215 -> `已成功删除`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:241 -> `迁移成功`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:336 -> `对话人数`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:340 -> `对话次数`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:344 -> `收藏用户数`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:348 -> `点赞次数`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:387 -> `导出配置 - ${agentInfo?.name}`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:388 -> `如果内部包含数据表或知识库，数据本身不会导出`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:404 -> `你确定要删除此智能体吗?`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:430 -> `请上传.agent类型的文件!`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:467 -> `搜索智能体`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:513 -> `未能找到相关结果`
- [hardcoded_chinese] src/pages/SpaceDevelop/index.tsx:521 -> `智能体概览`

## src/models

- [hardcoded_chinese] src/models/autoErrorHandling.ts:98 -> `[AutoErrorHandling] 📊 记录自动处理: 会话次数=${newCount}, 总次数=${newTotalCount}`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:136 -> `[AutoErrorHandling] 🔄 重置会话计数`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:149 -> `启用`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:149 -> `禁用`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:170 -> `[AutoErrorHandling] 📊 自动重试次数: ${newCount}`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:189 -> `[AutoErrorHandling] 🔄 重置自动重试计数`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:234 -> `[AutoErrorHandling] 🔄 重置并启用自动处理`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:245 -> `[AutoErrorHandling] ❌ 用户取消自动处理`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:258 -> `启用`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:258 -> `禁用`
- [hardcoded_chinese] src/models/autoErrorHandling.ts:268 -> `[AutoErrorHandling] 🔄 重置所有状态`
- [hardcoded_chinese] src/models/conversationHistory.ts:70 -> `删除成功`
- [hardcoded_chinese] src/models/conversationInfo.ts:259 -> `重启智能体成功`
- [hardcoded_chinese] src/models/conversationInfo.ts:301 -> `[keepalive] 页面可见，调用 apiEnsurePod 确保容器运行`
- [hardcoded_chinese] src/models/conversationInfo.ts:304 -> `[keepalive] apiEnsurePod 失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:326 -> `打开远程桌面视图失败`
- [hardcoded_chinese] src/models/conversationInfo.ts:487 -> `更新会话主题失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:608 -> `加载更多消息失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:656 -> `问答`
- [hardcoded_chinese] src/models/conversationInfo.ts:981 -> `Agent正在执行任务，请等待当前任务完成后再发送新请求`
- [hardcoded_chinese] src/models/conversationInfo.ts:984 -> `正在执行任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:985 -> `正在执行任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:988 -> `提示`
- [hardcoded_chinese] src/models/conversationInfo.ts:989 -> `智能体正在执行任务中，需要先暂停当前任务后才能发送新请求，是否暂停当前任务？`
- [hardcoded_chinese] src/models/conversationInfo.ts:1017 -> `用户主动取消任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:1143 -> `网络超时或服务不可用，请稍后再试`
- [hardcoded_chinese] src/models/devCollectAgent.ts:50 -> `取消收藏成功`
- [hardcoded_chinese] src/models/menuModel.ts:98 -> `加载菜单数据失败:`
- [hardcoded_chinese] src/models/spaceAgent.ts:29 -> `保存成功`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:24 -> `租户配置接口返回空数据`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:25 -> `租户配置为空`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:54 -> `租户配置保存完成，重新初始化统一主题服务`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:77 -> `已同步租户主题配置（本地无配置）:`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:79 -> `同步租户主题颜色失败:`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:82 -> `检测到本地主题配置，跳过租户配置同步`
- [hardcoded_chinese] src/models/tenantConfigInfo.ts:90 -> `租户信息接口失败`
- [hardcoded_chinese] src/models/userInfo.ts:26 -> `获取用户信息失败`
- [hardcoded_chinese] src/models/userInfo.ts:28 -> `获取用户信息失败:`
- [hardcoded_chinese] src/models/userInfo.ts:47 -> `刷新用户信息失败`
- [hardcoded_chinese] src/models/userInfo.ts:49 -> `刷新用户信息失败:`
- [hardcoded_chinese] src/models/userInfo.ts:65 -> `更新用户信息失败:`
- [hardcoded_chinese] src/models/workflow.ts:40 -> `测试`
- [hardcoded_chinese] src/models/workflow.ts:41 -> `测试`
- [hardcoded_chinese] src/models/workflowV3.ts:4 -> `) 代替 useModel(`
- [hardcoded_chinese] src/models/workflowV3.ts:65 -> `测试`
- [hardcoded_chinese] src/models/workflowV3.ts:66 -> `测试`

## src/components/FormListItem

- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:7 -> `等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:8 -> `不等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:9 -> `大于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:11 -> `大于等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:15 -> `小于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:16 -> `小于等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:17 -> `长度大于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:19 -> `长度大于等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:23 -> `长度小于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:25 -> `长度小于等于`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:29 -> `包含`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:30 -> `不包含`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:31 -> `匹配正则表达式`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:32 -> `为空`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:33 -> `不为空`
- [hardcoded_chinese] src/components/FormListItem/Condition.tsx:99 -> `请选择`
- [hardcoded_chinese] src/components/FormListItem/InputOrReference.tsx:190 -> `暂无描述`
- [hardcoded_chinese] src/components/FormListItem/InputOrReference.tsx:341 -> `请输入或引用参数`
- [hardcoded_chinese] src/components/FormListItem/InputOrReference.tsx:353 -> `请输入或引用参数`
- [hardcoded_chinese] src/components/FormListItem/InputOrReferenceFormTree.tsx:71 -> `暂无描述`
- [hardcoded_chinese] src/components/FormListItem/InputOrReferenceFormTree.tsx:183 -> `请输入或引用参数`
- [hardcoded_chinese] src/components/FormListItem/NestedForm copy 2.tsx:36 -> `请输入参数名称`
- [hardcoded_chinese] src/components/FormListItem/NestedForm copy 2.tsx:49 -> `请选择数据类型`
- [hardcoded_chinese] src/components/FormListItem/NestedForm copy 2.tsx:72 -> `请输入描述`
- [hardcoded_chinese] src/components/FormListItem/TreeInput.tsx:22 -> `变量类型`
- [hardcoded_chinese] src/components/FormListItem/TreeInput.tsx:23 -> `变量名`
- [hardcoded_chinese] src/components/FormListItem/TreeInput.tsx:112 -> `暂无描述`
- [hardcoded_chinese] src/components/FormListItem/components/TreeHeader.tsx:68 -> `文本`
- [hardcoded_chinese] src/components/FormListItem/components/TreeHeader.tsx:80 -> `输出结果`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:87 -> `请输入参数名称`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:112 -> `请选择数据类型`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:129 -> `新增子节点`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:156 -> `添加描述`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:168 -> `是否必须`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitle.tsx:178 -> `删除`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:78 -> `请输入参数名称`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:97 -> `请选择数据类型`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:128 -> `新增子节点`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:155 -> `添加描述`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:167 -> `是否必须`
- [hardcoded_chinese] src/components/FormListItem/components/TreeNodeTitleBody.tsx:177 -> `删除`

## src/pages/SpaceLog

- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:35 -> `插件`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:37 -> `工作流`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:39 -> `知识库`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:41 -> `变量`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:43 -> `数据表`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:45 -> `模型`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:56 -> `类型`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:57 -> `状态`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:57 -> `成功`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:58 -> `名称`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:59 -> `耗时`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:62 -> `发起时间`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/NodeDetails/index.tsx:70 -> `结束时间`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/index.tsx:87 -> `复制成功`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/index.tsx:113 -> `日志详情`
- [hardcoded_chinese] src/pages/SpaceLog/LogDetails/index.tsx:188 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:176 -> `消息ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:183 -> `会话ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:190 -> `用户UID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:197 -> `用户昵称（用户名）`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:204 -> `用户输入`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:214 -> `输出`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:224 -> `输入token`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:231 -> `输出token`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:238 -> `请求时间`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:247 -> `整体耗时`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:292 -> `消息ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:295 -> `请输入消息ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:299 -> `用户UID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:303 -> `请输入用户UID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:309 -> `会话ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:312 -> `请输入会话ID`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:316 -> `用户输入`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:320 -> `多个关键字以空格分隔，请输入用户消息`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:326 -> `时间范围`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:343 -> `输出`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:347 -> `多个关键字以空格分隔，请输入要查询的输出消息`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:381 -> `共 ${total} 条`
- [hardcoded_chinese] src/pages/SpaceLog/index.tsx:383 -> `条 / 页`

## src/pages/MyComputerManage

- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:44 -> `修改电脑名称`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:44 -> `新增电脑`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:55 -> `取消`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:56 -> `确认`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:66 -> `电脑名称`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:67 -> `请输入电脑名称`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:69 -> `请输入电脑名称`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:70 -> `名称不能超过 100 个字符`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:80 -> `最大存活Agent会话数量`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:81 -> `请输入`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:82 -> `每个Agent会话占用数百兆内存，请根据电脑实际的内存进行调整，超过配置的数量后，系统会自动停止未再使用的会话（再次向已停止的会话发送消息时会重新激活）`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:84 -> `请输入最大存活Agent会话数量`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:89 -> `取值范围为1～99999999`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:101 -> `描述`
- [hardcoded_chinese] src/pages/MyComputerManage/components/EditComputerModal/index.tsx:102 -> `请输入描述`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:91 -> `已启用`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:91 -> `已禁用`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:95 -> `操作失败`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:103 -> `确认删除该电脑？`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:105 -> `删除后将无法恢复，请谨慎操作。`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:106 -> `确认`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:108 -> `取消`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:112 -> `删除成功`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:144 -> `修改成功`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:155 -> `新增成功`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:162 -> `修改失败`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:162 -> `新增失败`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:168 -> `我的电脑管理`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:253 -> `已停用`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:255 -> `在线`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:256 -> `离线`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:288 -> `停用后将无法再通过智能体操控该电脑`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:303 -> `会话`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:316 -> `连接密钥，用于独立客户端容器部署，点击可复制`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:321 -> `客户端连接密钥已复制`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:331 -> `编辑`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:338 -> `删除`
- [hardcoded_chinese] src/pages/MyComputerManage/index.tsx:355 -> `暂无电脑配置`

## src/pages/SpaceSkillManage

- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:43 -> `技能已创建成功`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:58 -> `技能更新成功`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:100 -> `创建技能`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:100 -> `更新技能`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:118 -> `名称`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:120 -> `请输入技能名称`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:127 -> `名称不能超过30个字符!`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:129 -> `输入技能名称!`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:134 -> `输入技能名称`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:138 -> `描述`
- [hardcoded_chinese] src/pages/SpaceSkillManage/CreateSkill/index.tsx:140 -> `请输入描述，让大模型理解什么情况下应该调用此技能`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:45 -> `请选择要导入的文件`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:50 -> `文件获取失败，请重新选择`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:63 -> `仅支持 .zip,.skill 压缩文件格式或SKILL.md文件`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:79 -> `处理文件导入失败`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:103 -> `仅支持 .zip,.skill 压缩文件格式或SKILL.md文件`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:109 -> `文件大小不能超过20MB`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:129 -> `导入技能`
- [hardcoded_chinese] src/pages/SpaceSkillManage/ImportSkillProjectModal/index.tsx:132 -> `确认导入`
- [hardcoded_chinese] src/pages/SpaceSkillManage/MainContent/index.tsx:68 -> `未能找到相关结果`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:81 -> `你确定要删除此技能吗?`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:84 -> `技能删除成功`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:93 -> `复制到空间`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:101 -> `技能信息不存在`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:114 -> `技能复制成功`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:129 -> `技能ID不存在或无效，无法导出`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:140 -> `导出失败`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:151 -> `导出成功！`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:154 -> `导出项目失败:`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:155 -> `导出失败，请重试`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:213 -> `导入成功`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:218 -> `导入失败`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:224 -> `技能管理`
- [hardcoded_chinese] src/pages/SpaceSkillManage/index.tsx:237 -> `正在导出`
- [hardcoded_chinese] src/pages/SpaceSkillManage/type.ts:20 -> `复制到空间`
- [hardcoded_chinese] src/pages/SpaceSkillManage/type.ts:25 -> `导出技能`
- [hardcoded_chinese] src/pages/SpaceSkillManage/type.ts:30 -> `删除`

## src/pages/Chat

- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:64 -> `修改名称`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:69 -> `删除`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:90 -> `修改成功`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:112 -> `删除成功`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:205 -> `修改名称`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:226 -> `会话名称不能为空`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:230 -> `会话名称不能只包含空格`
- [hardcoded_chinese] src/pages/Chat/DropdownChangeName/index.tsx:240 -> `请输入会话名称`
- [hardcoded_chinese] src/pages/Chat/index.tsx:367 -> `任务执行中`
- [hardcoded_chinese] src/pages/Chat/index.tsx:368 -> `离开后，执行成功的任务会收到提示消息`
- [hardcoded_chinese] src/pages/Chat/index.tsx:369 -> `确定离开`
- [hardcoded_chinese] src/pages/Chat/index.tsx:410 -> `页面预览`
- [hardcoded_chinese] src/pages/Chat/index.tsx:653 -> `创建会话失败`
- [hardcoded_chinese] src/pages/Chat/index.tsx:656 -> `清空并创建会话失败`
- [hardcoded_chinese] src/pages/Chat/index.tsx:785 -> `会话ID不存在，无法新建文件`
- [hardcoded_chinese] src/pages/Chat/index.tsx:833 -> `你确定要删除此文件吗?`
- [hardcoded_chinese] src/pages/Chat/index.tsx:854 -> `文件不存在，无法删除`
- [hardcoded_chinese] src/pages/Chat/index.tsx:876 -> `删除成功`
- [hardcoded_chinese] src/pages/Chat/index.tsx:882 -> `删除文件失败:`
- [hardcoded_chinese] src/pages/Chat/index.tsx:958 -> `会话ID不存在，无法上传文件`
- [hardcoded_chinese] src/pages/Chat/index.tsx:968 -> `上传文件总大小不能超过${maxFileSize}MB`
- [hardcoded_chinese] src/pages/Chat/index.tsx:981 -> `上传成功`
- [hardcoded_chinese] src/pages/Chat/index.tsx:986 -> `上传失败`
- [hardcoded_chinese] src/pages/Chat/index.tsx:994 -> `会话ID不存在或无效，无法导出`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1003 -> `导出失败`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1011 -> `导出成功！`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1013 -> `导出项目失败:`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1035 -> `查看智能体详情`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1061 -> `打开预览页面`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1084 -> `关闭文件预览`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1085 -> `打开文件预览`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1109 -> `关闭智能体电脑`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1110 -> `打开智能体电脑`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1263 -> `您无该智能体权限`
- [hardcoded_chinese] src/pages/Chat/index.tsx:1414 -> `复制模板`

## src/pages/SpacePluginTool

- [hardcoded_chinese] src/pages/SpacePluginTool/PluginHeader/index.tsx:81 -> `代码`
- [hardcoded_chinese] src/pages/SpacePluginTool/PluginHeader/index.tsx:85 -> `已发布`
- [hardcoded_chinese] src/pages/SpacePluginTool/PluginHeader/index.tsx:86 -> `未发布`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:138 -> `参数名称`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:144 -> `请输入参数名称，确保含义清晰`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:151 -> `参数描述`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:156 -> `请输入参数描述，确保描述详细便于大模型更好的理解`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:165 -> `参数类型`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:180 -> `请选择数据类型`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:185 -> `传入方式`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:202 -> `是否必须`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:217 -> `默认值`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:223 -> `请输入默认值`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:238 -> `开启`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:248 -> `此参数是必填参数，填写默认值后，此开关可用`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:262 -> `操作`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:291 -> `参数名称`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:298 -> `请输入参数名称，确保含义清晰`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:307 -> `参数描述`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:312 -> `请输入参数描述，确保描述详细便于大模型更好的理解`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:321 -> `参数类型`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:336 -> `请选择数据类型`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:341 -> `开启`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:356 -> `操作`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:445 -> `请求方法与路径`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:451 -> `请选择请求方法`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:456 -> `请输入请求路径`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:459 -> `请输入请求路径`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:465 -> `请求内容格式`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:466 -> `请选择请求内容格式`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:472 -> `请求超时配置`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:473 -> `请输入超时配置`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:475 -> `请求超时配置，以秒为单位`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:478 -> `入参配置`
- [hardcoded_chinese] src/pages/SpacePluginTool/index.tsx:496 -> `出参配置`

## src/components/ChatInputHome

- [hardcoded_chinese] src/components/ChatInputHome/AtMentionIcon/index.tsx:31 -> `；向上使用 `
- [hardcoded_chinese] src/components/ChatInputHome/AtMentionIcon/index.tsx:195 -> `试试 @ 提及技能`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:18 -> `联网`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:18 -> `搜索`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:21 -> `推理`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:21 -> `思考`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:28 -> `思考`
- [hardcoded_chinese] src/components/ChatInputHome/ManualComponentItem/index.tsx:28 -> `联网`
- [hardcoded_chinese] src/components/ChatInputHome/MentionEditor/index.tsx:433 -> `直接输入指令, 可通过Shift+Enter换行, 通过回车发送消息；支持输入@唤起技能；支持粘贴图片`
- [hardcoded_chinese] src/components/ChatInputHome/MentionEditor/index.tsx:435 -> `直接输入指令, 可通过Shift+Enter换行, 通过回车发送消息；支持粘贴图片`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:65 -> `全部`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:66 -> `最近使用`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:67 -> `我的收藏`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:338 -> `加载 MentionPopup ${tab} 数据失败:`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:723 -> `搜索技能`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:762 -> `暂无收藏`
- [hardcoded_chinese] src/components/ChatInputHome/MentionPopup/index.tsx:762 -> `未找到匹配项`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:219 -> `粘贴图片-${Date.now()}-${index + 1}.png`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:271 -> `图片上传失败:`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:272 -> `${uploadFile.name} 上传失败`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:335 -> `会话已禁用`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:338 -> `请输入你的问题`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:341 -> `点击停止当前会话`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:343 -> `点击发送消息`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:355 -> `正在停止任务...`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:357 -> `点击停止Agent任务`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:362 -> `当前无进行中的会话`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:369 -> `正在停止会话...`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:371 -> `点击停止当前会话`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:398 -> `无智能体使用权限`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:398 -> `会话关联的智能体电脑不可用`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:429 -> `清空会话记录`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:482 -> `上传附件`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:507 -> `切换到普通模式`
- [hardcoded_chinese] src/components/ChatInputHome/index.tsx:508 -> `使用我的智能体电脑执行任务`

## src/components/Created

- [hardcoded_chinese] src/components/Created/MCPItem/index.tsx:67 -> `用户头像`
- [hardcoded_chinese] src/components/Created/MCPItem/index.tsx:72 -> `部署于`
- [hardcoded_chinese] src/components/Created/MCPTools/index.tsx:82 -> `暂无描述`
- [hardcoded_chinese] src/components/Created/MCPTools/index.tsx:99 -> `已添加`
- [hardcoded_chinese] src/components/Created/MCPTools/index.tsx:99 -> `添加`
- [hardcoded_chinese] src/components/Created/PageItem/index.tsx:48 -> `用户头像`
- [hardcoded_chinese] src/components/Created/PageItem/index.tsx:53 -> `创建于`
- [hardcoded_chinese] src/components/Created/PageItem/index.tsx:70 -> `已添加`
- [hardcoded_chinese] src/components/Created/PageItem/index.tsx:70 -> `添加`
- [hardcoded_chinese] src/components/Created/index.tsx:87 -> `插件`
- [hardcoded_chinese] src/components/Created/index.tsx:120 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:124 -> `组件库${selected.label}`
- [hardcoded_chinese] src/components/Created/index.tsx:128 -> `收藏`
- [hardcoded_chinese] src/components/Created/index.tsx:132 -> `仅查看官方${selected.label}`
- [hardcoded_chinese] src/components/Created/index.tsx:139 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:146 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:150 -> `当前空间智能体`
- [hardcoded_chinese] src/components/Created/index.tsx:157 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:161 -> `文档`
- [hardcoded_chinese] src/components/Created/index.tsx:168 -> `组件库数据表`
- [hardcoded_chinese] src/components/Created/index.tsx:175 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:179 -> `自定义服务`
- [hardcoded_chinese] src/components/Created/index.tsx:186 -> `全部`
- [hardcoded_chinese] src/components/Created/index.tsx:190 -> `仅查看官方${selected.label}`
- [hardcoded_chinese] src/components/Created/index.tsx:717 -> `用户头像`
- [hardcoded_chinese] src/components/Created/index.tsx:721 -> `发布于${getTime(item.created!)}`
- [hardcoded_chinese] src/components/Created/index.tsx:762 -> `已添加`
- [hardcoded_chinese] src/components/Created/index.tsx:762 -> `添加`
- [hardcoded_chinese] src/components/Created/index.tsx:808 -> `搜索`
- [hardcoded_chinese] src/components/Created/index.tsx:842 -> `创建${selected.label}`
- [hardcoded_chinese] src/components/Created/index.tsx:877 -> `暂无数据，请重新搜索`
- [hardcoded_chinese] src/components/Created/index.tsx:877 -> `暂无数据`
