import { dict } from '@/services/i18nRuntime';
import { dict } from '@/services/i18nRuntime';
import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

const cx = classNames.bind(styles);

const SiteProtocol: React.FC = () => {
  return (
    <>
      <span className={cx(styles.span)}>{dict('NuwaxPC.Pages.Login.readAndAgree')}</span>
      <a
        href="https://nuwax.com/user-agreement.html"
        target="_blank"
        rel="noreferrer"
        className={cx(styles.a)}
      >
        {dict('NuwaxPC.Pages.Login.serviceAgreement')}
      </a>
      <span className={cx(styles.span)}>{dict('NuwaxPC.Pages.Login.and')}</span>
      <a
        href="https://nuwax.com/privacy.html"
        target="_blank"
        rel="noreferrer"
        className={cx(styles.a)}
      >
        {dict('NuwaxPC.Pages.Login.privacyAgreement')}
      </a>
    </>
  );
};

export default SiteProtocol;
