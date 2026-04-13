import useRequestPromiseBridge from '@/hooks/useRequestPromiseBridge';
import { apiSendCode } from '@/services/account';
import { message } from 'antd';

const useSendCode = () => {
  // 发送验证码
  const { runWithPromise: runSendCode, loading: sendLoading } =
    useRequestPromiseBridge(apiSendCode, {
      manual: true,
      debounceInterval: 300,
      onSuccess: () => {
        message.success('验证码已发送');
      },
    });

  return {
    runSendCode,
    sendLoading,
  };
};

export default useSendCode;
