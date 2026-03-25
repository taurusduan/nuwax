import React from 'react';
import { useParams } from 'umi';
import AgentDetailsPage from './AgentDetailsPage';
import useSkillInfo from './useSkillInfo';

/**
 * 主页咨询聊天页面
 */
const AgentDetails: React.FC = () => {
  // 智能体ID
  const params = useParams();
  const agentId = Number(params.agentId);

  // 技能信息
  const { skillInfo } = useSkillInfo();

  return <AgentDetailsPage agentId={agentId} skillInfo={skillInfo} />;
};

export default AgentDetails;
