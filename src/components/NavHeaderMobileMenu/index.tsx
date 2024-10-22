import { Button } from 'antd';
import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import styles from './styles.module.scss';
import { jumpOrScrollToTop, openWithBlank, switchPage } from '@/utils/router';
import { ROUTER } from '@/constants/enum';
import { useCallback, useRef, useState } from 'react';
import { Popup } from 'antd-mobile';
import { Header } from '@/types/global/header';
import { s3Url } from '@/constants/network';
import CloseSVG from '../SVGComponents/CloseSVG';
import Link from 'next/link';
import { docsEcoearnDomain } from '@/api/constants';

enum HiddenSecondType {
  ALL_HIDDEN = 'none',
}

export type NavHeaderMobileMenuProps = {
  isOpen: boolean;
  data: Header;
  callback: () => void;
};

export default function NavHeaderMobileMenu({ isOpen = false, data, callback }: NavHeaderMobileMenuProps) {
  const [menuData, setMenuData] = useState(data.menuList || []);
  const showSecondMenusIndex = useRef<number>(-1);

  const onClose = () => {
    callback?.();
    showSecondMenus(HiddenSecondType.ALL_HIDDEN);
  };

  const showSecondMenus = useCallback(
    (parentIndex: number | HiddenSecondType) => {
      if (parentIndex === HiddenSecondType.ALL_HIDDEN || showSecondMenusIndex.current === parentIndex) {
        showSecondMenusIndex.current = -1;
        return setMenuData(data.menuList || []);
      }

      showSecondMenusIndex.current = parentIndex;

      const dataTrans = data.menuList?.map((item, index) => {
        return {
          ...item,
          isShowSecondMenus: index === parentIndex,
        };
      });
      if (Array.isArray(dataTrans) && dataTrans?.length > 0) {
        setMenuData(dataTrans);
      }
    },
    [data.menuList],
  );

  return (
    <Popup
      position="left"
      visible={isOpen}
      showCloseButton={false}
      className="navHeaderMobileMenu"
      bodyClassName={styles.navHeaderMobileMenuBody}
      stopPropagation={['click']}>
      <div className={clsx(['flex-row-between', styles.logoRow])}>
        <CommonImage
          src={data.logo?.filename_disk ? s3Url + data.logo.filename_disk : ''}
          style={{ width: (Number(data.logo.width) / Number(data.logo.height)) * 32, height: 32, cursor: 'pointer' }}
          fill
          alt="websiteLogo"
          priority
          onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT, onClose)}
        />
        <div style={{ cursor: 'pointer' }} onClick={onClose} className={styles.closeIcon}>
          <CloseSVG />
        </div>
      </div>
      <div className={styles.menusWrap}>
        <div className={styles.menuList}>
          <ul>
            <li>
              <Link className={styles.menuList_link} href={docsEcoearnDomain} target="_blank">
                Docs
              </Link>
            </li>
            <li>
              <Link className={styles.menuList_link} href="https://x.com/ecoearn_web3" target="_blank">
                <img src={require('../../assets/images/Twitter_mobile.png').default.src} alt="" />
              </Link>
            </li>
            <li>
              <Link className={styles.menuList_link} href="https://t.me/ecoearn_web3" target="_blank">
                <img src={require('../../assets/images/Telegram_mobile.png').default.src} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
}
