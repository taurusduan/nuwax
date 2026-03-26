import avatarImage from '@/assets/images/avatar.png';
import ConditionRender from '@/components/ConditionRender';
import { MOBILE_BREAKPOINT } from '@/constants/layout.constants';
import { useUnifiedTheme } from '@/hooks/useUnifiedTheme';
import ConversationItem from '@/layouts/DynamicMenusLayout/HomeSection/ConversationItem';
import User from '@/layouts/DynamicMenusLayout/User';
import Setting from '@/layouts/Setting';
import { ConversationInfo } from '@/types/interfaces/conversationInfo';
import {
  ClockCircleOutlined,
  EllipsisOutlined,
  PlusCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo } from 'react';
import { history, Outlet, useModel, useParams } from 'umi';
import styles from './index.less';

// 绑定 classNames，便于动态样式组合
const cx = classNames.bind(styles);

/**
 * Layout 主布局组件
 * 负责响应式菜单、历史会话、消息、设置弹窗的布局与展示
 */
const BaseTemplate: React.FC = () => {
  const { id: cId, agentId } = useParams();
  // 导航风格管理（使用统一主题系统）
  const { navigationStyle, layoutStyle } = useUnifiedTheme();
  const { isSecondMenuCollapsed, setOpenAdmin, setIsMobile } =
    useModel('layout');
  // 状态管理
  const { userInfo, getUserInfo } = useModel('userInfo');

  const { runTenantConfig } = useModel('tenantConfigInfo');

  // 查询会话记录
  const { conversationList, runHistory } = useModel('conversationHistory');

  /**
   * 检查是否为移动端设备
   * 使用 useCallback 优化，避免重复创建函数
   */
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    // 获取用户信息
    getUserInfo();
    // 租户配置信息查询接口
    runTenantConfig();

    // 查询会话记录
    runHistory({
      agentId,
      limit: 20,
    });
  }, [agentId]);

  /**
   * 监听窗口尺寸变化，判断是否为移动端
   * 使用防抖优化性能
   */
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100); // 100ms 防抖
    };

    window.addEventListener('resize', handleResize);
    checkIsMobile(); // 初始化判断

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkIsMobile]);

  /**
   * 主容器样式类名（使用独立的布局风格类）
   * 包含导航风格和布局风格类
   */
  const mainContainerClassName = useMemo(
    () =>
      cx(
        'flex',
        'h-full',
        styles.container,
        `xagi-layout-${layoutStyle}`, // 布局风格类（独立于Ant Design）
        `xagi-nav-${navigationStyle}`, // 导航风格类
      ),
    [layoutStyle, navigationStyle],
  );

  /**
   * 页面容器样式类名（使用独立的布局风格类）
   * 根据导航风格动态调整
   */
  const pageContainerClassName = useMemo(
    () =>
      cx(
        'flex-1',
        styles[
          `xagi-layout-${isSecondMenuCollapsed ? 'collapsed' : 'expanded'}`
        ],
        styles['page-container'],
        styles[`xagi-layout-${layoutStyle}`],
        styles[`xagi-nav-${navigationStyle}`],
      ),
    [layoutStyle, navigationStyle, isSecondMenuCollapsed],
  );

  // 新建会话
  const handleNewSession = () => {
    history.push(`/open-app/details/934`);
  };

  // 查看全部历史会话
  const handleViewAllHistory = () => {
    history.push(`/open-app/history/conversation/934`);
  };

  // 会话跳转
  const handleLink = (id: number, agentId: number) => {
    history.push(`/open-app/chat/${id}/${agentId}`);
  };

  return (
    <div className={mainContainerClassName}>
      {/* 侧边菜单栏区域 */}
      <div className={styles.agentSidebarContainer}>
        <div className={styles.sidebarTop}>
          <div className={styles.logo}>K</div>
          <button className={styles.collapseBtn} type="button">
            <span />
          </button>
        </div>

        <button
          className={styles.newSessionBtn}
          type="button"
          onClick={handleNewSession}
        >
          <span className={styles.newSessionText}>
            <PlusCircleOutlined />
            新建会话
          </span>
          <span className={styles.shortcutTag}>K</span>
        </button>

        <div className={cx('flex', 'flex-col', 'overflow-hide')}>
          <div className={cx(styles['history-title'])}>
            <span className={cx(styles.title)}>
              <ClockCircleOutlined />
              历史会话
            </span>

            <ConditionRender condition={conversationList?.length}>
              <span
                className={cx(styles['more-conversation'])}
                onClick={handleViewAllHistory}
              >
                查看全部 <RightOutlined />
              </span>
            </ConditionRender>
          </div>

          {/* 历史会话列表 */}
          <div className={cx('flex-1', 'overflow-y')}>
            {conversationList?.length ? (
              conversationList.map((item: ConversationInfo, index: number) => (
                <ConversationItem
                  key={item.id}
                  isActive={cId === item.id?.toString()}
                  isFirst={index === 0}
                  onClick={() => handleLink(item.id, item.agentId)}
                  name={item.topic}
                  taskStatus={item.taskStatus}
                />
              ))
            ) : (
              <>
                <div className={cx(styles['no-used'])}>右边看👉</div>
                <div className={cx(styles['no-used'])}>
                  在会话框中输入指令开始你的第一次会话吧～
                </div>
              </>
            )}
          </div>

          {/* <div className={styles.historyList}>
            {historyItems.map((item) => (
              <button key={item} className={styles.historyItem} type="button">
                {item}
              </button>
            ))}
          </div> */}
          {/* <button
            className={styles.viewAllBtn}
            type="button"
            onClick={handleViewAllHistory}
          >
            查看全部
          </button> */}
        </div>

        {/* 用户区域，固定在底部 */}
        <footer
          className={cx(
            'flex',
            'items-center',
            'justify-between',
            'gap-4',
            styles['user-area'],
          )}
          onClick={() => setOpenAdmin(true)}
        >
          <div className={cx('cursor-pointer', styles['user-avatar'])}>
            <img src={userInfo?.avatar || (avatarImage as string)} alt="" />
          </div>
          <span className={cx('flex-1', 'text-ellipsis', styles['user-name'])}>
            {userInfo?.nickName || userInfo?.userName}
          </span>
          <User>
            <EllipsisOutlined className={styles.moreIcon} />
          </User>
        </footer>
      </div>

      {/* 主内容区 */}
      <div
        className={`${pageContainerClassName} scroll-container`}
        id="page-container-selector"
      >
        <Outlet />
      </div>

      {/* 设置弹窗 */}
      <Setting />
    </div>
  );
};

export default BaseTemplate;
