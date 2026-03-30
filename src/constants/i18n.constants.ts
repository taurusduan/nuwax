export const DEFAULT_I18N_LANG = 'en-us';

export const I18N_STORAGE_KEYS = {
  ACTIVE_LANG: 'XAGI_I18N_ACTIVE_LANG',
  LANG_MAP_CACHE: 'XAGI_I18N_LANG_MAP_CACHE',
  LANG_MAP_CACHE_AT: 'XAGI_I18N_LANG_MAP_CACHE_AT',
} as const;

export const I18N_MAP_CACHE_TTL = 24 * 60 * 60 * 1000;

export const MIN_EN_I18N_MAP: Record<string, string> = {
  'NuwaxPC.Common.Global.confirm': 'Confirm',
  'NuwaxPC.Common.Global.cancel': 'Cancel',
  'NuwaxPC.Common.Global.save': 'Save',
  'NuwaxPC.Common.Global.loading': 'Loading...',
  'NuwaxPC.Common.Global.copy': 'Copy',
  'NuwaxPC.Common.Global.refresh': 'Refresh',
  'NuwaxPC.Common.Global.backHome': 'Back to Home',
  'NuwaxPC.Common.Global.pending': 'Pending',
  'NuwaxPC.Toast.Global.savedSuccessfully': 'Saved successfully',
  'NuwaxPC.Toast.Global.copiedSuccessfully': 'Copied successfully',
  'NuwaxPC.Toast.Global.networkError': 'Network error',
  'NuwaxPC.Toast.Global.serverTimeout': 'Server timeout, please retry',
  'NuwaxPC.Toast.Global.serverUnreachable': 'Network error, unable to connect',
  'NuwaxPC.Toast.Global.languageSavedReload': 'Language saved, reloading...',
  'NuwaxPC.Pages.Setting.profileTitle': 'Profile',
  'NuwaxPC.Pages.Setting.accountTitle': 'Account',
  'NuwaxPC.Pages.Setting.emailBind': 'Email Binding',
  'NuwaxPC.Pages.Setting.phoneBind': 'Phone Binding',
  'NuwaxPC.Pages.Setting.resetPassword': 'Reset Password',
  'NuwaxPC.Pages.Setting.themeSwitch': 'Theme Switch',
  'NuwaxPC.Pages.Setting.usageStatistics': 'Usage Statistics',
  'NuwaxPC.Pages.Setting.themeLoadFailed': 'Failed to load theme config',
  'NuwaxPC.Pages.Setting.userName': 'User Name',
  'NuwaxPC.Pages.Setting.nickName': 'Nickname',
  'NuwaxPC.Pages.Setting.inputUserName': 'Please input user name',
  'NuwaxPC.Pages.Setting.inputNickName': 'Please input nickname',
  'NuwaxPC.Pages.Setting.phone': 'Phone Number',
  'NuwaxPC.Pages.Setting.email': 'Email',
  'NuwaxPC.Pages.Setting.dynamicCode': 'Dynamic Code',
  'NuwaxPC.Pages.Setting.expiresAt': 'expires at {0}',
  'NuwaxPC.Pages.Setting.language': 'Language',
  'NuwaxPC.Pages.Setting.selectLanguage': 'Select language',
  'NuwaxPC.Pages.Setting.bindPending': 'Pending binding',
  'NuwaxPC.Pages.SystemConfigI18n.manageTitle': 'Language Management',
  'NuwaxPC.Pages.SystemConfigI18n.columnName': 'Language Name',
  'NuwaxPC.Pages.SystemConfigI18n.columnLang': 'Language Code',
  'NuwaxPC.Pages.SystemConfigI18n.columnDefault': 'Default',
  'NuwaxPC.Pages.SystemConfigI18n.columnStatus': 'Status',
  'NuwaxPC.Pages.SystemConfigI18n.columnSort': 'Sort',
  'NuwaxPC.Pages.SystemConfigI18n.columnModified': 'Modified Time',
  'NuwaxPC.Pages.SystemConfigI18n.defaultYes': 'Yes',
  'NuwaxPC.Pages.SystemConfigI18n.defaultNo': 'No',
  'NuwaxPC.Pages.SystemConfigI18n.statusEnabled': 'Enabled',
  'NuwaxPC.Pages.SystemConfigI18n.statusDisabled': 'Disabled',
  'NuwaxPC.Components.UserMenu.defaultUserName': 'User Name',
  'NuwaxPC.Components.UserMenu.profile': 'Profile',
  'NuwaxPC.Components.UserMenu.logout': 'Logout',
  'NuwaxPC.Components.UserOperate.documents': 'Documents',
  'NuwaxPC.Components.UserOperate.myComputer': 'My Computer',
  'NuwaxPC.Components.UserOperate.noUnreadMessage': 'No unread message',
  'NuwaxPC.Components.UserOperate.unreadMessageCount': '{0} unread messages',
  'NuwaxPC.Pages.Login.inputEmailRequired': 'Please input email',
  'NuwaxPC.Pages.Login.inputPhoneRequired': 'Please input phone number',
  'NuwaxPC.Pages.Login.invalidEmail': 'Please input a valid email',
  'NuwaxPC.Pages.Login.invalidPhone': 'Please input a valid phone number',
  'NuwaxPC.Pages.Login.passwordRequired':
    'Please input password with 6+ characters',
  'NuwaxPC.Pages.Login.invalidPassword': 'Please input a valid password',
  'NuwaxPC.Pages.Login.serviceAgreementTitle':
    'Service Agreement and Privacy Protection',
  'NuwaxPC.Pages.Login.serviceAgreementAgree': 'Agree',
  'NuwaxPC.Pages.Login.serviceAgreementDisagree': 'Disagree',
  'NuwaxPC.Pages.Login.passwordLogin': 'Password Login',
  'NuwaxPC.Pages.Login.codeLoginOrRegister': 'Code Login / Register',
  'NuwaxPC.Pages.Login.welcome': 'Welcome to {0}',
  'NuwaxPC.Pages.Login.inputEmailPlaceholder': 'Please input email',
  'NuwaxPC.Pages.Login.inputPhonePlaceholder': 'Please input phone number',
  'NuwaxPC.Pages.Login.inputPasswordPlaceholder':
    'Please input password with 6+ characters',
  'NuwaxPC.Pages.Login.login': 'Login',
  'NuwaxPC.Pages.Login.nextStep': 'Next',
  'NuwaxPC.Pages.VerifyCode.inputEmailCode': 'Enter email verification code',
  'NuwaxPC.Pages.VerifyCode.inputSmsCode': 'Enter SMS verification code',
  'NuwaxPC.Pages.VerifyCode.codeSentTo': 'Verification code sent to {0}{1}',
  'NuwaxPC.Pages.VerifyCode.yourEmail': 'your email ',
  'NuwaxPC.Pages.VerifyCode.yourPhone': 'phone number ',
  'NuwaxPC.Pages.VerifyCode.countdownSuffix': 's later',
  'NuwaxPC.Pages.VerifyCode.resend': 'Resend',
  'NuwaxPC.Pages.SetPassword.title': 'Set Password',
  'NuwaxPC.Pages.SetPassword.description':
    'Please use at least 6 characters. Avoid passwords reused on other sites.',
  'NuwaxPC.Pages.SetPassword.passwordRequired':
    'Please input password with 6+ characters',
  'NuwaxPC.Pages.SetPassword.invalidPassword': 'Please input a valid password',
  'NuwaxPC.Pages.SetPassword.passwordPlaceholder':
    'Please input password with 6+ characters',
  'NuwaxPC.Pages.SetPassword.confirmPasswordRequired':
    'Please confirm your password',
  'NuwaxPC.Pages.SetPassword.passwordMismatch':
    'The two passwords do not match',
  'NuwaxPC.Pages.SetPassword.confirmPasswordInvalid':
    'Please input a valid password',
  'NuwaxPC.Pages.SetPassword.confirmPasswordPlaceholder':
    'Please confirm your password',
  'NuwaxPC.Pages.AgentEdit.showStand': 'Showroom',
  'NuwaxPC.Pages.AgentEdit.versionHistory': 'Version History',
  'NuwaxPC.Pages.AgentEdit.draftAutoSavedAt': 'Draft auto-saved at {0}',
  'NuwaxPC.Pages.AgentEdit.unpublishedChanges': 'Unpublished changes',
  'NuwaxPC.Pages.AgentEdit.publish': 'Publish',
  'NuwaxPC.Pages.Error403.licenseExpired':
    'Sorry, your license authorization has expired',
  'NuwaxPC.Pages.Error404.pageNotFound':
    'Sorry, the page you visited does not exist',
  'NuwaxPC.Pages.HomeDrag.errorTitle':
    'Drag feature is temporarily unavailable',
  'NuwaxPC.Pages.HomeDrag.errorDescription':
    'Please refresh the page and try again',
  'NuwaxPC.Pages.HomeDrag.refreshPage': 'Refresh Page',
  'NuwaxPC.Components.NoMoreDivider.noMoreData': 'No more data',
  'NuwaxPC.Components.WorkspaceSearch.placeholder':
    'Please input search content',
  'NuwaxPC.Toast.UploadAvatar.invalidType':
    'Please upload JPG, JPEG, or PNG image files',
  'NuwaxPC.Toast.UploadAvatar.invalidSize': 'Image size cannot exceed 2MB',
};

export const I18N_CLIENTS = ['NuwaxPC', 'NuwaxMobile', 'NuwaClaw'] as const;

export const I18N_SCOPES = [
  'Pages',
  'Components',
  'Toast',
  'Modal',
  'Common',
] as const;

export const I18N_KEY_REGEX =
  /^(NuwaxPC|NuwaxMobile|NuwaClaw)\.(Pages|Components|Toast|Modal|Common)\.[A-Z][A-Za-z0-9]*\.[a-z][A-Za-z0-9]*$/;
