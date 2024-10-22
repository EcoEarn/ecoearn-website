/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from 'next/link';
import Lottie from 'lottie-web';
import { useEffect } from 'react';
import AnimationData from '../../../../assets/animation/Top_animation.json';
import { AppEcoearnDomain, docsEcoearnDomain } from '@/api/constants';

function BrandModule() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('top-lottie') as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: AnimationData,
    });
  }, []);

  return (
    <section className={clsx(['section-container', styles.brandModuleWrap])}>
      <section className={clsx([styles.brandModuleContainer, styles.brandModule])}>
        <div className={styles.brandModuleBtns}>
          <p className="default-link-button">Built on aelf Blockchain</p>
        </div>

        <h1 className={styles.brandModuleTitle}>
          Boost your yield <br /> with <span className={styles.purple}>EcoEarn</span> staking.
        </h1>

        <p className={styles.brandModuleDesc}>Simple, secure, and fuss free for all.</p>

        <div className={styles.brandModuleBtns}>
          <Link href={AppEcoearnDomain + '/staking'} className="primary-link-button" target="_blank">
            Stake Now
          </Link>
          <Link href={docsEcoearnDomain} className="default-link-button" target="_blank">
            View Docs
          </Link>
        </div>

        <img
          className={styles.brandModuleHeader}
          src={require('../../../../assets/images/home/brand-header.png').default.src}
          alt=""
        />
        <div id="top-lottie" className={styles.brandModuleFooter}></div>
      </section>
    </section>
  );
}

export default BrandModule;
