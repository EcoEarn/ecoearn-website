/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Col, Row } from 'antd';

function BrandModule() {
  return (
    <section className={clsx(['section-container', styles.gridModuleWrap])}>
      <section className={clsx([styles.gridModuleContainer, styles.gridModule])}>
        <h4 className={styles.gridTitle}>Why EcoEarn.</h4>
        <Row gutter={[10, 30]}>
          <Col xs={24}>
            <div className={clsx([styles.gridModuleItemContainer, styles.gridModuleItemContainer1])}>
              <img
                className={styles.gridModuleImg1}
                src={require('../../../../assets/images/home/whyecoearn_multiple_staking_option.png').default.src}
                alt=""
              />
              <div className={clsx([styles.gridModuleItem, styles.gridItem_1])}>
                <h4 className={clsx([styles.gridModuleTitle, styles.gridTitle1])}>Multiple staking options</h4>
                <p className={clsx([styles.gridModuleDesc, styles.gridDesc1])}>
                  EcoEarn offers diverse staking options, allowing you to stake points, tokens, and LPs for maximum
                  flexibility and earnings potential.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={clsx([styles.gridModuleItemContainer, styles.gridModuleItemContainer2])}>
              <img
                className={styles.gridModuleImg2}
                src={require('../../../../assets/images/home/whyecoearn_Flexible_Options.png').default.src}
                alt=""
              />
              <div className={clsx([styles.gridModuleItem, styles.gridItem_2])}>
                <h4 className={clsx([styles.gridModuleTitle, styles.gridTitle2])}>Flexible Options & High Rewards</h4>
                <p className={clsx([styles.gridModuleDesc, styles.gridDesc2])}>
                  Choose your preferred staking options or stake duration to suit your needs, and boost your earnings by
                  inviting others and increasing your stake.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={clsx([styles.gridModuleItemContainer, styles.gridModuleItemContainer3])}>
              <img
                className={styles.gridModuleImg3}
                src={require('../../../../assets/images/home/ecoearn_Stake Rewards.png').default.src}
                alt=""
              />
              <div className={clsx([styles.gridModuleItem, styles.gridItem_3])}>
                <h4 className={clsx([styles.gridModuleTitle, styles.gridTitle3])}>
                  Stake Rewards Before They’re Unstake
                </h4>
                <p className={clsx([styles.gridModuleDesc, styles.gridDesc3])}>
                  Boost your crypto potential with our unique staking system that lets you stake locked rewards to earn
                  additional returns on top of your existing earnings.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default BrandModule;
