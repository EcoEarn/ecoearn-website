import Link from 'next/link';
import styles from './styles.module.scss';
import { docsEcoearnDomain } from '@/api/constants';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <img className={styles.footer__logo} src={require('../../assets/images/logo.png').default.src} alt="" />
          <img
            className={styles.footer__logo_s}
            src={require('../../assets/images/logo_small.png').default.src}
            alt=""
          />

          <div className={styles.footer__content__links}>
            <Link className={styles.footer__link} href="/terms-of-service" target="_blank">
              Terms of Service
            </Link>
            <div className={styles.divider}></div>
            <Link className={styles.footer__link} href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
            <div className={styles.divider}></div>
            <Link className={styles.footer__link} href={docsEcoearnDomain} target="_blank">
              Docs
            </Link>
          </div>
        </div>

        <div className={styles.footer__links}>
          <Link className={styles.footer__out_link} href="https://x.com/ecoearn_web3" target="_blank">
            <img src={require('../../assets/images/icon_twitter.png').default.src} alt="" />
          </Link>
          <Link className={styles.footer__out_link} href="https://t.me/ecoearn_web3" target="_blank">
            <img src={require('../../assets/images/icon_telegram.png').default.src} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
