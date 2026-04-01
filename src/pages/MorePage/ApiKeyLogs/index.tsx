import WorkspaceLayout from '@/components/WorkspaceLayout';
import { dict } from '@/services/i18nRuntime';
import LogProTable from './LogProTable';

const ApiKeyLogs: React.FC = () => {
  return (
    <WorkspaceLayout
      title={dict('PC.Pages.MorePage.ApiKeyLogs.pageTitle')}
      hideScroll={false}
    >
      <LogProTable />
    </WorkspaceLayout>
  );
};
export default ApiKeyLogs;
