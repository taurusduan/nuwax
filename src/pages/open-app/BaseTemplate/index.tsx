import { MOBILE_BREAKPOINT } from '@/constants/layout.constants';
import { useUnifiedTheme } from '@/hooks/useUnifiedTheme';
import User from '@/layouts/DynamicMenusLayout/User';
import UserAvatar from '@/layouts/DynamicMenusLayout/User/UserAvatar';
import Setting from '@/layouts/Setting';
import {
  ClockCircleOutlined,
  EllipsisOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo } from 'react';
import { history, Outlet, useModel } from 'umi';
import styles from './index.less';

// 绑定 classNames，便于动态样式组合
const cx = classNames.bind(styles);

/**
 * Layout 主布局组件
 * 负责响应式菜单、历史会话、消息、设置弹窗的布局与展示
 */
const BaseTemplate: React.FC = () => {
  // 导航风格管理（使用统一主题系统）
  const { navigationStyle, layoutStyle } = useUnifiedTheme();
  const { isSecondMenuCollapsed, setOpenAdmin, setIsMobile } =
    useModel('layout');
  // 状态管理
  const { userInfo } = useModel('userInfo');

  const { runTenantConfig } = useModel('tenantConfigInfo');
  const { loadMenus } = useModel('menuModel');

  /**
   * 检查是否为移动端设备
   * 使用 useCallback 优化，避免重复创建函数
   */
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    // 初始化加载菜单数据
    loadMenus();
    // 租户配置信息查询接口
    runTenantConfig();
  }, []);

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

  const historyItems = useMemo(
    () => [
      'Trae中Git同步更改操作...',
      'umi.js中 如何实现动态layo...',
      '腾讯云大模型API 配置模型...',
      '块自下向上伸展',
      '邮箱与JS方法',
    ],
    [],
  );

  // 新建会话
  const handleNewSession = () => {
    history.push(`/open-app/details/934`);
  };

  // 查看全部历史会话
  const handleViewAllHistory = () => {
    history.push(`/open-app/history/conversation/934`);
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

        <div className={'flex-1'}>
          <div className={styles.historyTitle}>
            <ClockCircleOutlined />
            历史会话
          </div>
          <div className={styles.historyList}>
            {historyItems.map((item) => (
              <button key={item} className={styles.historyItem} type="button">
                {item}
              </button>
            ))}
          </div>
          <button
            className={styles.viewAllBtn}
            type="button"
            onClick={handleViewAllHistory}
          >
            查看全部
          </button>
        </div>

        <div className={styles.userArea}>
          <UserAvatar
            avatar={userInfo?.avatar}
            onClick={() => setOpenAdmin(true)}
          />
          <span className={styles.userName}>
            {userInfo?.nickName || userInfo?.userName}
          </span>
          <User>
            <span className={styles.userMoreRight}>
              <EllipsisOutlined className={styles.moreIcon} />
            </span>
          </User>
        </div>
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
