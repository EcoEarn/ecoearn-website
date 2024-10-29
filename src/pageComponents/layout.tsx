'use client';
import NavHeader from '@/components/NavHeader';
import { ROUTER } from '@/constants/enum';
import { IHomePageProps } from '@/types/pages/home';
import { getGlobalConfig } from '@/api/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';
import Footer from '@/components/Footer';
import NavFooter from '@/components/NavFooter';

type IProps = Pick<IHomePageProps, 'headerData' | 'footerData'>;

export default function Layout(props: React.PropsWithChildren<IProps>) {
  const { headerData, footerData, children } = props;
  const [showHeader, setShowHeader] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    let lastScrollPosition = 0;
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const position = scrollContainer.scrollTop;

        if (lastScrollPosition > position) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }

        lastScrollPosition = position;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <main className="home-page" ref={scrollContainerRef}>
      <NavHeader path={ROUTER.DEFAULT} data={headerData} style={{ top: !showHeader ? '-80px' : '0' }} />

      <div style={{ marginTop: '-80px' }}>{children}</div>

      <NavFooter data={footerData} />
    </main>
  );
}
