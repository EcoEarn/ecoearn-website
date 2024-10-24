'use client';
import { getGlobalConfig } from '@/api/utils';
import { useCallback } from 'react';
import { useEffectOnce } from 'react-use';
import BrandModule from './components/BrandModule';
import GridModule from './components/GridModule';
import StepModule from './components/StepModule';
import SwiperModule from './components/SwiperModule';
import BuildModule from './components/BuildModule';
import OutroModule from './components/OutroModule';
import styles from './styles.module.scss';

export default function HomeMain() {
  const setGlobalConfig = useCallback(async () => {
    if (typeof document !== 'undefined') {
      const globalConfig = await getGlobalConfig();
      const colorObj = {
        ...globalConfig.themeColor,
        ...globalConfig.functionalColor,
        ...globalConfig.neutralColor,
      };
      Object.entries(colorObj).forEach((ele) => {
        document?.body.style.setProperty(`--${ele[0]}`, ele[1]);
      });
    }
  }, []);

  useEffectOnce(() => {
    setGlobalConfig();
  });

  return (
    <div className={styles['home-main']}>
      <BrandModule />

      <GridModule />

      <StepModule />

      <SwiperModule />

      <BuildModule />

      <OutroModule />
    </div>
  );
}
