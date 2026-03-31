# 多语言治理全量扫描报告（SAAS 2026-04-10）

- 生成时间：2026-03-31T11:37:17.017Z
- 扫描范围：src/pages, src/components, src/layouts, src/hooks, src/models, src/services
- 规则：hardcoded 中文字符串 / legacy `System.*` key / invalid `dict()` key 格式

## 汇总

- 总问题数：1980
- hardcoded 中文：1980
- legacy System key：0
- invalid dict key：0

## 按模块统计

| 模块 | hardcoded中文 | legacyKey | invalidKey | 总计 |
| --- | ---: | ---: | ---: | ---: |
| src/components/FileTreeView | 97 | 0 | 0 | 97 |
| src/pages/SpaceKnowledge | 82 | 0 | 0 | 82 |
| src/pages/UserManage | 82 | 0 | 0 | 82 |
| src/hooks | 80 | 0 | 0 | 80 |
| src/pages/EditAgent | 78 | 0 | 0 | 78 |
| src/pages/SpacePageDevelop | 72 | 0 | 0 | 72 |
| src/pages/SpaceLibrary | 64 | 0 | 0 | 64 |
| src/pages/SpaceTable | 58 | 0 | 0 | 58 |
| src/pages/Square | 58 | 0 | 0 | 58 |
| src/layouts/Setting | 57 | 0 | 0 | 57 |
| src/pages/IMChannel | 52 | 0 | 0 | 52 |
| src/pages/TeamSetting | 50 | 0 | 0 | 50 |
| src/pages/SpaceLibraryLog | 49 | 0 | 0 | 49 |
| src/pages/SpaceDevelop | 48 | 0 | 0 | 48 |
| src/models | 46 | 0 | 0 | 46 |
| src/components/FormListItem | 41 | 0 | 0 | 41 |
| src/pages/SpaceLog | 39 | 0 | 0 | 39 |
| src/pages/MyComputerManage | 38 | 0 | 0 | 38 |
| src/pages/SpaceSkillManage | 37 | 0 | 0 | 37 |
| src/pages/SpaceTaskCenter | 37 | 0 | 0 | 37 |
| src/pages/SpacePluginTool | 35 | 0 | 0 | 35 |
| src/pages/GlobalModelManage | 30 | 0 | 0 | 30 |
| src/pages/PublishAudit | 30 | 0 | 0 | 30 |
| src/layouts/DynamicMenusLayout | 30 | 0 | 0 | 30 |
| src/pages/MorePage | 28 | 0 | 0 | 28 |
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
| src/pages/Chat | 14 | 0 | 0 | 14 |
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
| src/components/PromptOptimizeModal | 2 | 0 | 0 | 2 |
| src/components/ShowStand | 2 | 0 | 0 | 2 |
| src/components/SlateVariableEditor | 2 | 0 | 0 | 2 |
| src/components/custom | 2 | 0 | 0 | 2 |
| src/pages/Index | 1 | 0 | 0 | 1 |
| src/pages/OpenApp | 1 | 0 | 0 | 1 |
| src/components/ChatInputHome | 1 | 0 | 0 | 1 |
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

## src/hooks

- [hardcoded_chinese] src/hooks/useEcoMarket.ts:8 -> `你确定要删除此分享吗?`
- [hardcoded_chinese] src/hooks/useEcoMarket.ts:10 -> `删除成功`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:84 -> `发现新版本`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:86 -> `检测到新版本 ${newVersion}，是否立即更新？`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:87 -> `更新`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:88 -> `取消`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:120 -> `跳过重复的事件处理`
- [hardcoded_chinese] src/hooks/useEventPolling.ts:140 -> `处理事件时出错:`
- [hardcoded_chinese] src/hooks/useExclusivePanels.ts:57 -> `[ExclusivePanels] PagePreview 打开，关闭其他面板`
- [hardcoded_chinese] src/hooks/useExclusivePanels.ts:72 -> `[ExclusivePanels] AgentSidebar 打开，关闭 PagePreview`
- [hardcoded_chinese] src/hooks/useExclusivePanels.ts:78 -> `[ExclusivePanels] ShowArea 打开，关闭 PagePreview`
- [hardcoded_chinese] src/hooks/useFileImport.ts:67 -> `仅支持 .zip 压缩文件、.skill 文件或 SKILL.md 文件`
- [hardcoded_chinese] src/hooks/useFileImport.ts:70 -> `导入成功`
- [hardcoded_chinese] src/hooks/useFileImport.ts:164 -> `导入失败`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:46 -> ` 或 `
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:116 -> `用户已空闲`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:208 -> `⏸️ 暂停空闲检测`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:217 -> `▶️ 恢复空闲检测`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:265 -> `⚠️ 无法访问 iframe（可能是跨域）`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:281 -> `🚫 空闲检测未启用`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:291 -> `⏸️ 空闲检测已暂停，跳过事件监听器设置`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:296 -> `✅ 空闲检测已启用`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:315 -> `🧹 清理空闲检测事件监听器`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:338 -> `🖥️ 检测到 iframe 内用户活动`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:352 -> `🔗 绑定 iframe 事件监听器`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:369 -> `🔍 扫描 iframe`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:409 -> `🔄 检测到新 iframe，重新扫描`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:431 -> `🧹 清理 iframe 事件监听器`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:449 -> `👁️ 页面切出，暂停空闲计时器`
- [hardcoded_chinese] src/hooks/useIdleDetection.ts:453 -> `👁️ 页面切回，重置空闲计时器`
- [hardcoded_chinese] src/hooks/useMcp.tsx:152 -> `添加${item.label}`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:54 -> `[Event Delegate] 触发事件:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:61 -> `[Event Delegate] 数据解析失败:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:71 -> `[Event Delegate] 未找到事件配置: ${eventType}`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:75 -> `[Event Delegate] 找到事件配置:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:82 -> `页面路径配置错误`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:109 -> `[Event Delegate] 打开页面:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:117 -> `页面`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:123 -> `页面路径参数配置错误`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:131 -> `链接地址配置错误`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:135 -> `[Event Delegate] 打开外链:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:141 -> `[Event Delegate] 未知的事件类型: ${eventConfig.type}`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:174 -> `[Event Delegate] 缺少必要的属性:`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:185 -> `[Event Delegate] 事件代理已初始化`
- [hardcoded_chinese] src/hooks/useMessageEventDelegate.ts:190 -> `[Event Delegate] 事件代理已清理`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:33 -> `🔄 useModifiedSaveUpdate: 节流执行保存 [第${currentSaveCount}次]`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:43 -> `⏸️ useModifiedSaveUpdate: 保存正在进行中，跳过本次调用`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:49 -> `✅ useModifiedSaveUpdate: 开始执行保存操作`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:55 -> `🎉 useModifiedSaveUpdate: 保存成功完成`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:57 -> `❌ useModifiedSaveUpdate: 保存失败`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:67 -> `🚀 useModifiedSaveUpdate: 节流函数被调用`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:79 -> `📝 useModifiedSaveUpdate: isModified 状态变化 =`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:82 -> `⚡ useModifiedSaveUpdate: 触发节流保存函数`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:91 -> `🔗 useModifiedSaveUpdate: Hook 初始化完成`
- [hardcoded_chinese] src/hooks/useModifiedSaveUpdate.ts:94 -> `🧹 useModifiedSaveUpdate: 清理 Hook 状态`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:12 -> `确认`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:12 -> `放弃`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:12 -> `取消`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:20 -> `你有未保存的更改`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:29 -> `保存并离开`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:30 -> `不保存离开`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:51 -> `确认`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:51 -> `确认`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:53 -> `放弃`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:53 -> `放弃`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:55 -> `取消`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:55 -> `取消`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:75 -> `确认离开`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:76 -> `你确定要离开当前页面吗？`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:78 -> `确认`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:79 -> `放弃`
- [hardcoded_chinese] src/hooks/useNavigationGuard.tsx:80 -> `取消`
- [hardcoded_chinese] src/hooks/usePluginConfig.ts:213 -> `插件保存成功`
- [hardcoded_chinese] src/hooks/useRestartDevServer.ts:64 -> `项目ID不存在或无效，无法重启服务`
- [hardcoded_chinese] src/hooks/useRestartDevServer.ts:103 -> `重启开发服务器失败`
- [hardcoded_chinese] src/hooks/useScrollSync.ts:80 -> `🎯 标签点击：导航到 ${type}`
- [hardcoded_chinese] src/hooks/useScrollSync.ts:146 -> `🔄 滚动同步：自动切换到标签 ${targetActive}`
- [hardcoded_chinese] src/hooks/useSendCode.ts:11 -> `验证码已发送`
- [hardcoded_chinese] src/hooks/useTryRun.ts:162 -> `请重新配置入参,添加子级`
- [hardcoded_chinese] src/hooks/useUnifiedTheme.ts:117 -> `主题更新失败:`

## src/pages/EditAgent

- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:279 -> `模型设置`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:291 -> `请选择会话模型`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:305 -> `模型设置`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:317 -> `请选择会话模型`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:327 -> `请选择推理模型`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:369 -> `生成随机性`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:370 -> `temperature: 调高温度会使得模型的输出更多样性和创新性，反之，降低温度会使输出内容更加遵循指令要求但减少多样性。建议不要与 “Top p” 同时调整`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:384 -> `Top p 为累计概率: 模型在生成输出时会从概率最高的词汇开始选择，直到这些词汇的总概率累积达到 Top p 值。这样可以限制模型只选择这些高概率的词汇，从而控制输出内容的多样性。建议不要与 “生成随机性” 同时调整。`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:398 -> `携带上下文轮数`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:399 -> `设置带入模型上下文的对话历史轮数。轮数越多，多轮对话的相关性越高，但消耗的 Token 也越多`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:412 -> `最大回复长度`
- [hardcoded_chinese] src/pages/EditAgent/AgentModelSetting/index.tsx:413 -> `控制模型输出的 Tokens 长度上限。通常 100 Tokens 约等于 150 个中文汉字。`
- [hardcoded_chinese] src/pages/EditAgent/ArrangeTitle/index.tsx:96 -> `请选择会话模型`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:35 -> `插件`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:37 -> `工作流`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:39 -> `知识库`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:41 -> `变量`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:43 -> `数据表`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:45 -> `模型`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:56 -> `类型`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:57 -> `状态`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:57 -> `成功`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:58 -> `名称`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:59 -> `耗时`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:62 -> `发起时间`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/NodeDetails/index.tsx:69 -> `结束时间`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/index.tsx:76 -> `复制成功`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/index.tsx:102 -> `调试详情`
- [hardcoded_chinese] src/pages/EditAgent/DebugDetails/index.tsx:170 -> `暂无数据`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:61 -> `调试`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:71 -> `打开预览页面`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:85 -> `关闭文件预览`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:86 -> `打开文件预览`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:100 -> `关闭智能体电脑`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/PreviewAndDebugHeader/index.tsx:101 -> `打开智能体电脑`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:318 -> `重置`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:363 -> `请填写必填参数`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:403 -> `会话ID不存在，无法打开文件预览`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:429 -> `会话ID不存在，无法打开智能体电脑`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:664 -> `您无该智能体权限`
- [hardcoded_chinese] src/pages/EditAgent/PreviewAndDebug/index.tsx:674 -> `直接输入指令, 可通过Shift+Enter换行, 通过回车发送消息；支持粘贴图片`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:87 -> `replaceText 方法不存在`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:159 -> `输入系统提示词，对大模型进行角色塑造`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:179 -> `输入用户提示词，预置指令、问题或请求`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:214 -> `系统提示词`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:214 -> `用户提示词`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:216 -> `退出全屏`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:253 -> `系统提示词`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:254 -> `用户提示词`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:258 -> `全屏编辑`
- [hardcoded_chinese] src/pages/EditAgent/SystemTipsWord/index.tsx:272 -> `自动优化提示词`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:362 -> `[EditAgent] 配置信息尚未加载，跳过更新:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:380 -> `[EditAgent] 数组值无变化，跳过API调用:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:388 -> `[EditAgent] 布尔值无变化，跳过API调用:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:396 -> `[EditAgent] 数字值无变化，跳过API调用:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:541 -> `会话ID不存在，无法新建文件`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:583 -> `你确定要删除此文件吗?`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:588 -> `会话ID不存在，无法删除文件`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:610 -> `文件不存在，无法删除`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:631 -> `删除成功`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:637 -> `删除文件失败:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:655 -> `会话ID不存在，无法重命名文件`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:689 -> `会话ID不存在，无法保存文件`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:722 -> `会话ID不存在，无法上传文件`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:732 -> `上传文件总大小不能超过${maxFileSize}MB`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:744 -> `上传成功`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:749 -> `上传失败`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:757 -> `开发会话ID不存在或无效，无法导出`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:766 -> `导出失败`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:774 -> `导出成功！`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:776 -> `导出项目失败:`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:790 -> `对话人数`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:794 -> `对话次数`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:798 -> `收藏用户数`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:802 -> `点赞次数`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:823 -> `导出配置 - ${agentConfigInfo?.name}`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:824 -> `如果内部包含数据表或知识库，数据本身不会导出`
- [hardcoded_chinese] src/pages/EditAgent/index.tsx:1222 -> `智能体概览`

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

## src/pages/SpaceLibraryLog

- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:149 -> `复制成功`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:181 -> `日志详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogDetailDrawer/index.tsx:314 -> `暂无数据`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:108 -> `类型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:115 -> `请选择类型`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:121 -> `对象ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:127 -> `请输入对象ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:132 -> `对象名称`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:136 -> `请输入对象名称`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:139 -> `请求ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:144 -> `请输入请求ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:147 -> `用户ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:152 -> `请输入用户ID，仅支持输入整数`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:157 -> `用户名`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:161 -> `请输入用户名`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:164 -> `会话ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:167 -> `请输入会话ID`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:176 -> `查看会话详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:196 -> `输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:205 -> `多个关键字以空格分隔，请输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:208 -> `输出内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:217 -> `多个关键字以空格分隔，请输入内容`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:221 -> `时间范围`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:227 -> `输入token`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:234 -> `输出token`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:241 -> `请求时间`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:252 -> `整体耗时`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:354 -> `查询失败`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:367 -> `查询日志失败`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:380 -> `该条记录缺少 requestId，无法查看详情`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:392 -> `操作`
- [hardcoded_chinese] src/pages/SpaceLibraryLog/LogProTable/index.tsx:405 -> `详情`
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
- [hardcoded_chinese] src/models/conversationInfo.ts:262 -> `重启智能体成功`
- [hardcoded_chinese] src/models/conversationInfo.ts:311 -> `[keepalive] 页面可见，调用 apiEnsurePod 确保容器运行`
- [hardcoded_chinese] src/models/conversationInfo.ts:314 -> `[keepalive] apiEnsurePod 失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:336 -> `打开远程桌面视图失败`
- [hardcoded_chinese] src/models/conversationInfo.ts:506 -> `更新会话主题失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:627 -> `加载更多消息失败:`
- [hardcoded_chinese] src/models/conversationInfo.ts:675 -> `问答`
- [hardcoded_chinese] src/models/conversationInfo.ts:1000 -> `Agent正在执行任务，请等待当前任务完成后再发送新请求`
- [hardcoded_chinese] src/models/conversationInfo.ts:1003 -> `正在执行任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:1004 -> `正在执行任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:1007 -> `提示`
- [hardcoded_chinese] src/models/conversationInfo.ts:1008 -> `智能体正在执行任务中，需要先暂停当前任务后才能发送新请求，是否暂停当前任务？`
- [hardcoded_chinese] src/models/conversationInfo.ts:1036 -> `用户主动取消任务`
- [hardcoded_chinese] src/models/conversationInfo.ts:1162 -> `网络超时或服务不可用，请稍后再试`
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
- [hardcoded_chinese] src/pages/SpaceTaskCenter/index.tsx:51 -> `任务中心`

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

## src/pages/GlobalModelManage

- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:52 -> `全部`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:53 -> `聊天对话-纯文本`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:54 -> `向量嵌入`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:55 -> `聊天对话-多模态`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:62 -> `删除成功`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:65 -> `删除失败`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:89 -> `更新管控状态失败`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:127 -> `编辑`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:136 -> `授权`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:148 -> `删除`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:150 -> `删除模型`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:168 -> `模型名称`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:175 -> `类型`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:180 -> `聊天对话-纯文本`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:181 -> `向量嵌入`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:182 -> `聊天对话-多模态`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:189 -> `模型标识`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:195 -> `模型介绍`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:201 -> `状态`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:206 -> `已启用`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:207 -> `已禁用`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:211 -> `创建者`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:217 -> `更新时间`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:224 -> `管控`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:225 -> `若开启管控，需授权才能使用`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:231 -> `关闭`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:232 -> `开启`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:244 -> `操作`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:263 -> `获取数据失败`
- [hardcoded_chinese] src/pages/GlobalModelManage/index.tsx:285 -> `公共模型管理`

## src/pages/PublishAudit

- [hardcoded_chinese] src/pages/PublishAudit/components/RejectAuditModal.tsx:31 -> `拒绝审核成功`
- [hardcoded_chinese] src/pages/PublishAudit/components/RejectAuditModal.tsx:55 -> `拒绝审核`
- [hardcoded_chinese] src/pages/PublishAudit/components/RejectAuditModal.tsx:66 -> `请输入拒绝原因`
- [hardcoded_chinese] src/pages/PublishAudit/components/RejectAuditModal.tsx:67 -> `请输入拒绝原因`
- [hardcoded_chinese] src/pages/PublishAudit/components/RejectAuditModal.tsx:69 -> `请输入拒绝原因`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:87 -> `通过审核成功`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:106 -> `通过`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:113 -> `拒绝`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:120 -> `查看`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:131 -> `发布名称`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:134 -> `请输入插件工作流或智能体名称`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:138 -> `类型`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:143 -> `智能体`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:144 -> `网页应用`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:145 -> `插件`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:146 -> `工作流`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:147 -> `技能`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:151 -> `描述信息`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:158 -> `版本信息`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:165 -> `发布者`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:171 -> `状态`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:178 -> `待审核`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:179 -> `通过`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:180 -> `拒绝`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:188 -> `通过`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:192 -> `拒绝`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:196 -> `待审核`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:211 -> `发布时间`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:218 -> `操作`
- [hardcoded_chinese] src/pages/PublishAudit/index.tsx:274 -> `发布审核`

## src/layouts/DynamicMenusLayout

- [hardcoded_chinese] src/layouts/DynamicMenusLayout/CollapseButton/index.tsx:103 -> `展开菜单`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/CollapseButton/index.tsx:103 -> `收起菜单`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/DynamicSecondMenu/index.tsx:251 -> `处理路径跳转失败，请检查菜单路径是否存在`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/DynamicSecondMenu/index.tsx:595 -> `成员与设置`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/DynamicSecondMenu/index.tsx:595 -> `成员与设置`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:40 -> `新建成功`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:129 -> `创建团队空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:156 -> `团队名称`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:157 -> `请输入团队名称`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:159 -> `请输入团队名称`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/CreateNewTeam/index.tsx:161 -> `描述`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/PersonalSpaceContent/index.tsx:91 -> `智能体开发`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/PersonalSpaceContent/index.tsx:96 -> `成员与设置`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/PersonalSpaceContent/index.tsx:96 -> `成员与设置`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/SpaceTitle/PersonalSpaceContent/index.tsx:155 -> `个人空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/index.tsx:50 -> `个人空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/index.tsx:62 -> `个人空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/index.tsx:64 -> `个人空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/index.tsx:68 -> `个人空间`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SpaceSection/index.tsx:97 -> `工作空间智能体`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:90 -> `智能体`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:96 -> `网页应用`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:102 -> `技能`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:108 -> `插件`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:114 -> `工作流`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/SquareSection/index.tsx:120 -> `模板`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/index.tsx:559 -> `新对话`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/index.tsx:562 -> `主页`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/index.tsx:565 -> `更多`
- [hardcoded_chinese] src/layouts/DynamicMenusLayout/index.tsx:578 -> ` 和 动态菜单的 `

## src/pages/MorePage

- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:204 -> ` 或 ISO 字符串且非 `
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:208 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:225 -> `权限配置保存成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:230 -> `保存权限失败:`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/ApiKeyPermissionModal/index.tsx:299 -> `暂无权限定义`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:26 -> `启用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:27 -> `停用`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:64 -> `API KEY 已成功复制到剪贴板`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:76 -> `密钥名称`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:94 -> `隐藏`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:94 -> `显示`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:102 -> `复制`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:115 -> `创建时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:122 -> `过期时间`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:129 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:136 -> `永不过期`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:142 -> `状态`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:148 -> `未知`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:154 -> `操作`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:167 -> `调用统计`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:176 -> `权限配置`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:185 -> `编辑`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:194 -> `删除`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:199 -> `删除后将无法恢复，请谨慎操作。`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:205 -> `删除成功`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:216 -> `API 密钥管理`
- [hardcoded_chinese] src/pages/MorePage/ApiKey/index.tsx:217 -> `管理您的API密钥与访问权限`
- [hardcoded_chinese] src/pages/MorePage/ApiKeyLogs/index.tsx:6 -> `Api调用日志`

## src/pages/EcosystemTemplate

- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:232 -> `获取模板列表失败:`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:233 -> `获取模板列表失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:318 -> `未命名插件`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:319 -> `暂无描述`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:337 -> `未命名插件`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:338 -> `暂无描述`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:378 -> `更新失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:383 -> `更新成功`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:387 -> `更新失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:401 -> `下线失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:405 -> `已下线`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:410 -> `下线失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:490 -> `更新成功`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:490 -> `创建成功`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:497 -> `保存分享失败:`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:558 -> `获取数据失败:`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:559 -> `获取数据失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:584 -> `智能体`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:588 -> `工作流`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:592 -> `网页应用`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:674 -> `获取详情失败`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:690 -> `模板已下线`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:707 -> `模板已撤销发布`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:743 -> `搜索模板`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:764 -> `搜索模板`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:872 -> `查看详情`
- [hardcoded_chinese] src/pages/EcosystemTemplate/index.tsx:960 -> `暂无数据`

## src/components/base

- [hardcoded_chinese] src/components/base/ActionMenu/index.tsx:53 -> `更多`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:29 -> `智能体`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:34 -> `插件`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:39 -> `工作流`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:44 -> `知识库`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:49 -> `数据表`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:54 -> `模型`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:59 -> `网页应用`
- [hardcoded_chinese] src/components/base/AgentType/index.tsx:64 -> `技能`
- [hardcoded_chinese] src/components/base/CopyButton/index.tsx:25 -> `复制`
- [hardcoded_chinese] src/components/base/CopyButton/index.tsx:53 -> `复制`
- [hardcoded_chinese] src/components/base/CopyButton/index.tsx:95 -> `复制失败:`
- [hardcoded_chinese] src/components/base/CopyIconButton/index.tsx:42 -> `复制`
- [hardcoded_chinese] src/components/base/CopyIconButton/index.tsx:76 -> `复制失败:`
- [hardcoded_chinese] src/components/base/EcoShareStatus/index.tsx:13 -> `草稿`
- [hardcoded_chinese] src/components/base/EcoShareStatus/index.tsx:16 -> `审核中`
- [hardcoded_chinese] src/components/base/EcoShareStatus/index.tsx:19 -> `已发布`
- [hardcoded_chinese] src/components/base/EcoShareStatus/index.tsx:22 -> `已下线`
- [hardcoded_chinese] src/components/base/EcoShareStatus/index.tsx:25 -> `已驳回`
- [hardcoded_chinese] src/components/base/McpInstallType/index.tsx:33 -> `组件库`
- [hardcoded_chinese] src/components/base/McpStatus/index.tsx:22 -> `待部署`
- [hardcoded_chinese] src/components/base/McpStatus/index.tsx:26 -> `部署中`
- [hardcoded_chinese] src/components/base/McpStatus/index.tsx:30 -> `已部署`
- [hardcoded_chinese] src/components/base/McpStatus/index.tsx:34 -> `部署失败`
- [hardcoded_chinese] src/components/base/McpStatus/index.tsx:38 -> `已停止`
- [hardcoded_chinese] src/components/base/MenuListItem/index.tsx:101 -> `取消收藏`

## src/pages/SpacePluginCloudTool

- [hardcoded_chinese] src/pages/SpacePluginCloudTool/PluginCodeHeader/index.tsx:91 -> `代码`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/PluginCodeHeader/index.tsx:95 -> `已发布`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/PluginCodeHeader/index.tsx:96 -> `未发布`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:117 -> `参数名称`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:123 -> `请输入参数名称，确保含义清晰`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:130 -> `参数描述`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:135 -> `请输入参数描述，确保描述详细便于大模型更好的理解`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:144 -> `参数类型`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:159 -> `请选择数据类型`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:164 -> `是否必须`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:179 -> `默认值`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:185 -> `请输入默认值`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:200 -> `开启`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:210 -> `此参数是必填参数，填写默认值后，此开关可用`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:224 -> `操作`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:253 -> `参数名称`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:260 -> `请输入参数名称，确保含义清晰`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:269 -> `参数描述`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:274 -> `请输入参数描述，确保描述详细便于大模型更好的理解`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:283 -> `参数类型`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:298 -> `请选择数据类型`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:303 -> `开启`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:318 -> `操作`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:400 -> `入参配置`
- [hardcoded_chinese] src/pages/SpacePluginCloudTool/index.tsx:420 -> `出参配置`

## src/pages/EcosystemPlugin

- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:177 -> `获取插件列表失败:`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:178 -> `获取插件列表失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:215 -> `未命名插件`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:216 -> `暂无描述`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:234 -> `未命名插件`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:235 -> `暂无描述`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:276 -> `操作失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:281 -> `更新成功`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:285 -> `更新失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:301 -> `下线失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:305 -> `已下线`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:310 -> `下线失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:379 -> `更新成功`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:379 -> `创建成功`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:383 -> `操作失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:387 -> `保存分享失败:`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:388 -> `操作失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:425 -> `获取数据失败:`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:426 -> `获取数据失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:528 -> `获取插件详情失败`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:543 -> `插件已下线`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:558 -> `插件已撤销发布`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:624 -> `搜索插件`
- [hardcoded_chinese] src/pages/EcosystemPlugin/index.tsx:717 -> `暂无数据`

## src/components/AgentSidebar

- [hardcoded_chinese] src/components/AgentSidebar/AgentConversation/index.tsx:87 -> `暂无相关会话`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:94 -> `定时任务创建成功`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:106 -> `定时任务更新成功`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:186 -> `创建定时任务`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:186 -> `更新定时任务`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:199 -> `定时周期`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:201 -> `请输入`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:209 -> `请输入`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:221 -> `任务名称`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:222 -> `请输入任务名称`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:224 -> `请输入任务名称`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:228 -> `任务内容`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:229 -> `请输入任务内容`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/CreateTimedTask/index.tsx:230 -> `请输入你要执行的任务信息，信息提供的越详细执行成功率越高`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/TaskList/index.tsx:31 -> `暂无进行中的任务`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/TaskList/index.tsx:32 -> `暂无已取消的任务`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/TaskList/index.tsx:54 -> `你确定要取消此定时任务吗?`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/TaskList/index.tsx:57 -> `确定`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/TaskList/index.tsx:59 -> `取消`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/index.tsx:70 -> `定时任务已取消`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/index.tsx:87 -> `进行中`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/index.tsx:119 -> `进行中`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/index.tsx:132 -> `已取消`
- [hardcoded_chinese] src/components/AgentSidebar/TimedTask/index.tsx:152 -> `进行中`
