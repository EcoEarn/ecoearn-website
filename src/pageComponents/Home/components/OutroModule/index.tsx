/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import Lottie from 'lottie-web';
import AnimationData from '../../../../assets/animation/footerAnimation.json';
import { AppEcoearnDomain } from '@/api/constants';

function OutroModule() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('back-lottie') as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: AnimationData,
    });
    // backL.setSpeed(2);
    // backL.addEventListener('loopComplete',() => backL.pause())
  }, []);

  return (
    <section className={clsx(['section-container', styles.outroModuleWrap])}>
      <section className={clsx([styles.outroModuleContainer, styles.outroModule])}>
        <h1 className={styles.outroModuleTitle}>
          Unlock DeFi today with <span className={styles.purple}>EcoEarn</span>&apos;s growing staking ecosystem today!
        </h1>

        <div className={styles.outroModuleBtns}>
          <Link
            href={AppEcoearnDomain + '/staking'}
            target="_blank"
            className={clsx(['primary-link-button', styles.linkButton])}>
            Stake Now
          </Link>
        </div>
      </section>
      <div id="back-lottie" className={styles.lottie}></div>
    </section>
  );
}

export default OutroModule;
