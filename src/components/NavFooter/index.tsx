/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import { NavigationType, ROUTER } from '@/constants/enum';
import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import { jumpOrScrollToTop, switchPage } from '@/utils/router';
import styles from './styles.module.scss';
import { s3Url } from '@/constants/network';
import { Footer } from '@/types/global/footer';
import XSVG from '@/assets/images/x_logo.svg';
import TelegramSVG from '@/assets/images/Telegram.svg';
import SmallXSVG from '@/assets/images/x_logo_s.svg';
import SmallTelegramSVG from '@/assets/images/telegram_s.svg';

export interface INavFooter {
  className?: string;
  style?: CSSProperties;
  footerMediaClassName?: string;
  data: Footer;
}

export default function NavFooter({ className, style, footerMediaClassName, data }: INavFooter) {
  const [socialMediaData, setSocialMediaData] = useState(data.socialMediaList);
  const showActiveMedia = useCallback(
    (index: number) => {
      const dataTrans = data.socialMediaList?.map((v, k) => {
        return {
          ...v,
          isActive: index === k,
        };
      });
      if (dataTrans?.length > 0) {
        setSocialMediaData(dataTrans);
      }
    },
    [data.socialMediaList],
  );
  const logoWidth = useMemo(() => {
    if (data.logo?.width && data.logo?.height) {
      return (Number(data.logo.width) / Number(data.logo.height)) * 32;
    }
    return 142;
  }, [data.logo?.height, data.logo?.width]);

  useEffect(() => {
    if (!data?.commonStyles) {
      return;
    }
    if (typeof document !== 'undefined') {
      const { secondMenuDefaultFontColor, secondMenuFontHoverColor } = data?.commonStyles || {};
      if (secondMenuDefaultFontColor) {
        document?.body.style.setProperty('--secondMenuDefaultFontColor', secondMenuDefaultFontColor);
      }
      if (secondMenuFontHoverColor) {
        document?.body.style.setProperty('--secondMenuFontHoverColor', secondMenuFontHoverColor);
      }
    }
  }, [data]);

  return (
    <footer
      id="website-footer"
      className={clsx(['section-container', 'flex-row-content-center', styles.footer, className])}
      style={{ backgroundColor: data.commonStyles?.defaultBackgroundColor, ...style }}>
      <div className={clsx(['page-container', styles.footerBody])}>
        <div className={styles.footerNav}>
          <div className={clsx('flex-column', styles.footerLogoWrapper)}>
            <CommonImage
              src={data.logo?.filename_disk ? s3Url + data.logo.filename_disk : ''}
              style={{
                width: logoWidth,
                height: 32,
              }}
              fill
              alt="websiteLogo"
              className={styles.logo}
              onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
            />
            <img src={require('@/assets/images/logo_small.png').default.src} className={styles.mobileLogo} alt="" />
            <div className={styles.footerDescription}>{data.description}</div>
          </div>

          <div className={clsx(['flex-row', styles.menus])}>
            {Array.isArray(data.menuList) &&
              data.menuList.map((item, index) => {
                return (
                  <div key={'FooterFirstMenu-' + item.title + index} className={styles.menuGroup}>
                    {item.type === NavigationType.NOT_JUMP && <div className={styles.firstMenus}>{item.title}</div>}
                    {item?.children &&
                      item.children?.map((v, k) => {
                        return (
                          <div
                            key={'FooterSecondMenu-' + v.title + k}
                            className={styles.secondMenus}
                            onClick={() => switchPage(v.type, v.path)}>
                            {v.title?.includes('Twitter') ? (
                              <>
                                <XSVG className={styles.secondMenuItemIcon} />
                                <SmallXSVG className={styles.secondMenuItemMIcon} />
                              </>
                            ) : null}
                            {v.title?.includes('TG') ? (
                              <>
                                <TelegramSVG className={styles.secondMenuItemIcon} />
                                <SmallTelegramSVG className={styles.secondMenuItemMIcon} />
                              </>
                            ) : null}
                            <span>{v.title}</span>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}
