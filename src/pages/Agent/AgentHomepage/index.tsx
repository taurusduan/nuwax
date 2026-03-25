import AgentDetailsPage from '@/pages/AgentDetails/AgentDetailsPage';
import React from 'react';
import { history, useParams } from 'umi';

/**
 * 智能体首页
 * @returns
 */
const AgentHomepage: React.FC = () => {
  // 智能体ID
  const params = useParams();
  const agentId = Number(params.agentId);

  // 会话发起后跳转的页面URL
  const conversationUrl = '/agent/chatpage/:id/:agentId';

  // 查看智能体会话记录更多回调, 跳转到历史会话页面
  const handleViewMore = () => {
    history.push(`/agent/history-conversation/${agentId}`);
  };

  return (
    <AgentDetailsPage
      agentId={agentId}
      conversationUrl={conversationUrl}
      onViewMore={handleViewMore}
    />
  );
};

export default AgentHomepage;
