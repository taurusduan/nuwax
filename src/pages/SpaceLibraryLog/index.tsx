import WorkspaceLayout from '@/components/WorkspaceLayout';
import LogProTable from '@/pages/SpaceLibraryLog/LogProTable';
import { dict } from '@/services/i18nRuntime';

const SpaceLibraryLog = () => {
  return (
    <WorkspaceLayout title={dict('NuwaxPC.Pages.SpaceLibraryLog.Index.pageTitle')} hideScroll={true}>
      <LogProTable />
    </WorkspaceLayout>
  );
};

export default SpaceLibraryLog;
