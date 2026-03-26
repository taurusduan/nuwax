import AgentDetailsPage from '@/pages/AgentDetails/AgentDetailsPage';
import React from 'react';
import { history, useParams } from 'umi';

/**
 * 开放授权应用详情页面
 */
const AppDetails: React.FC = () => {
  // 智能体ID
  const params = useParams();
  const agentId = Number(params.agentId);

  // 会话发起后跳转的页面URL
  const conversationUrl = '/open-app/chat/:id/:agentId';

  // 查看智能体会话记录更多回调, 跳转到历史会话页面
  const handleViewMore = () => {
    history.push(`/open-app/history/conversation/${agentId}`);
  };

  return (
    <AgentDetailsPage
      agentId={agentId}
      conversationUrl={conversationUrl}
      onViewMore={handleViewMore}
    />
  );
};

export default AppDetails;
