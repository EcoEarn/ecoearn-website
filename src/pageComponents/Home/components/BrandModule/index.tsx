/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from 'next/link';

function BrandModule() {
  return (
    <section className={clsx(['section-container', styles.brandModuleWrap])}>
      <section className={clsx([styles.brandModuleContainer, styles.brandModule])}>
        <div className={styles.brandModuleBtns}>
          <Link className="default-link-button" href="">
            Built on aelf Blockchain
          </Link>
        </div>

        <h1 className={styles.brandModuleTitle}>
          Boost your yield <br /> with <span className={styles.purple}>EcoEarn</span> staking.
        </h1>

        <p className={styles.brandModuleDesc}>Simple, secure, and fuss free for all.</p>

        <div className={styles.brandModuleBtns}>
          <Link href="/staking" className="primary-link-button">
            Stake Now
          </Link>
          <Link href="/docs" className="default-link-button">
            View Docs
          </Link>
        </div>

        <img
          className={styles.brandModuleHeader}
          src={require('../../../../assets/images/home/brand-header.png').default.src}
          alt=""
        />
        <img
          className={styles.brandModuleFooter}
          src={require('../../../../assets/images/home/brand-footer.png').default.src}
          alt=""
        />
      </section>
    </section>
  );
}

export default BrandModule;
