'use client';
import NavHeader from '@/components/NavHeader';
import { ROUTER } from '@/constants/enum';
import { IHomePageProps } from '@/types/pages/home';
import { getGlobalConfig } from '@/api/utils';
import { useCallback } from 'react';
import { useEffectOnce } from 'react-use';
import Footer from '@/components/Footer';

type IProps = Pick<IHomePageProps, 'headerData'>;

export default function Layout(props: React.PropsWithChildren<IProps>) {
  const { headerData, children } = props;

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
    <main className="home-page">
      <NavHeader path={ROUTER.DEFAULT} data={headerData} />

      <>{children}</>

      <Footer />
    </main>
  );
}
