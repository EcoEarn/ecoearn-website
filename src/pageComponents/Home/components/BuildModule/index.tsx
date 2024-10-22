/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import AelfSVG from '@/assets/images/home/aelf.svg';
import SchrodingerSVG from '@/assets/images/home/schrodinger.svg';
import PortkeySVG from '@/assets/images/home/portkey.svg';
import AelfMobileSVG from '@/assets/images/home/aelf_mobile.svg';
import SchrodingerMobileSVG from '@/assets/images/home/schrodinger_mobile.svg';
import PortkeyMobileSVG from '@/assets/images/home/portkey_mobile.svg';
import Link from 'next/link';

function BuildModule() {
  return (
    <section className={clsx([styles.buildModuleWrap])}>
      <section className={clsx([styles.buildModuleContainer, styles.buildModule])}>
        <div className={clsx([styles.buildModuleHeader])}>
          <h2 className={styles.buildModuleTitle}>
            Built on the aelf <br /> ecosystem
          </h2>
          <Link
            href="https://aelf.com/"
            target="_blank"
            className={clsx(['default-link-button', styles.buildModuleLink])}>
            Find Out More
          </Link>
        </div>
        <div className={clsx([styles.buildModuleContent])}>
          <div className={clsx([styles.buildModuleWrapItem, styles.buildModuleItem1])}>
            <h4 className={styles.buildModuleWrapItemTitle}>AI-Powered Operational Efficiency</h4>
            <p className={styles.buildModuleWrapItemDesc}>
              In consensus and smart contract execution, boosting scalability and reducing resource use.
            </p>
          </div>
          <div className={clsx([styles.buildModuleWrapItem, styles.buildModuleItem2])}>
            <h4 className={styles.buildModuleWrapItemTitle}>Zero Gas Fees</h4>
            <p className={styles.buildModuleWrapItemDesc}>
              Aelf&apos;s zero Gas fee structure allows users to participate in our projects more easily and
              cost-effectively.
            </p>
          </div>
          <div className={clsx([styles.buildModuleWrapItem, styles.buildModuleItem3])}>
            <h4 className={styles.buildModuleWrapItemTitle}>
              Flexible <br />
              Architecture
            </h4>
            <p className={styles.buildModuleWrapItemDesc}>
              Modular design offers a tailored development environment via custom sidechains.
            </p>
          </div>
        </div>

        <div className={styles.buildModuleLinkBottom}>
          <Link
            href="https://aelf.com/"
            target="_blank"
            className={clsx(['default-link-button', styles.buildModuleLinkBottomLink])}>
            Find Out More
          </Link>
        </div>

        <div className={styles.buildModuleFooter}>
          <Link href="https://aelf.com/" className={styles.buildModuleFooterItem} target="_blank">
            <AelfSVG />
          </Link>
          <Link href="https://schrodingernft.ai/" className={styles.buildModuleFooterItem} target="_blank">
            <SchrodingerSVG />
          </Link>
          <Link href="https://portkey.finance/" className={styles.buildModuleFooterItem} target="_blank">
            <PortkeySVG />
          </Link>
        </div>

        <div className={styles.buildModuleFooterMobile}>
          <Link href="https://aelf.com/" className={styles.buildModuleFooterMobileItem} target="_blank">
            <AelfMobileSVG />
          </Link>
          <Link href="https://schrodingernft.ai/" className={styles.buildModuleFooterMobileItem} target="_blank">
            <SchrodingerMobileSVG />
          </Link>
          <Link href="https://portkey.finance/" className={styles.buildModuleFooterMobileItem} target="_blank">
            <PortkeyMobileSVG />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default BuildModule;
