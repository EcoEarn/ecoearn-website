/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Col, Row } from 'antd';
import React, { useState } from 'react';

function SwiperModule() {
  const [current, setCurrent] = useState(0);

  return (
    <section className={clsx([styles.swiperModuleWrap])}>
      <section className={clsx([styles.swiperModuleContainer, styles.swiperModule])}>
        <h1 className={styles.swiperModuleTitle}>Choose & Earn</h1>

        <div className={styles.swiperModuleContent}>
          <div className={styles.swiperModuleTabs}>
            <div className={styles.swiperModuleTabMenu}>
              <div
                className={clsx(styles.swiperModuleTabItem, current === 0 && styles.active)}
                onClick={() => setCurrent(0)}>
                <span className={styles.swiperModuleTabTitle}>Point Staking</span>
              </div>
              <div
                className={clsx(styles.swiperModuleTabItem, current === 1 && styles.active)}
                onClick={() => setCurrent(1)}>
                <span className={styles.swiperModuleTabTitle}>Farm</span>
              </div>
              <div
                className={clsx(styles.swiperModuleTabItem, current === 2 && styles.active)}
                onClick={() => setCurrent(2)}>
                <span className={styles.swiperModuleTabTitle}>Simple Staking</span>
              </div>
              <div
                className={clsx(styles.swiperModuleTabItem, current === 3 && styles.active)}
                onClick={() => setCurrent(3)}>
                <span className={styles.swiperModuleTabTitle}>Reward</span>
              </div>
            </div>

            <div className={styles.swiperModuleTabPanes}>
              <div className={clsx(styles.swiperModuleTabPane, current === 0 && styles.active)}>
                <div className={styles.swiperModuleTabPaneContent}>
                  <div className={clsx(styles.swiperModuleTabPaneImgWrap, styles.swiperModuleTabPaneImgWrap1)}>
                    <img
                      src={require('../../../../assets/images/home/choose-earn_point_staking.png').default.src}
                      alt=""
                    />
                  </div>
                  <Row className={styles.swiperModuleTabPaneContentRow}>
                    <Col xs={24} sm={24} md={{ span: 16, offset: 8 }} lg={{ span: 14, offset: 10 }}>
                      <div className={styles.swiperModuleTabPaneDescWrap}>
                        <p className={styles.swiperModuleTabPaneType}>Point Staking</p>
                        <h4 className={styles.swiperModuleTabPaneTitle}>Transform engagement into earnings!</h4>
                        <p className={styles.swiperModuleTabPaneDesc}>
                          By participating in dApp activities or making valuable contributions, you earn points that can
                          be strategically staked on EcoEarn. This allows you to unlock additional rewards, enhancing
                          the value of your participation.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={clsx(styles.swiperModuleTabPane, current === 1 && styles.active)}>
                <div className={styles.swiperModuleTabPaneContent}>
                  <div className={clsx(styles.swiperModuleTabPaneImgWrap, styles.swiperModuleTabPaneImgWrap2)}>
                    <img src={require('../../../../assets/images/home/choose-earn_farm.png').default.src} alt="" />
                  </div>
                  <Row style={{ height: '100%' }}>
                    <Col xs={24} sm={24} md={24} lg={{ span: 14, offset: 10 }}>
                      <div className={styles.swiperModuleTabPaneDescWrap}>
                        <p className={styles.swiperModuleTabPaneType}>Farm</p>
                        <h4 className={styles.swiperModuleTabPaneTitle}>
                          Harvest Higher <br /> Rewards
                        </h4>
                        <p className={styles.swiperModuleTabPaneDesc}>
                          Dive into the opportunity of DeFi farming by providing liquidity and staking your LP tokens
                          into the pool. This strategy not only contributes to the liquidity ecosystem but also enhances
                          your earning potential.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={clsx(styles.swiperModuleTabPane, current === 2 && styles.active)}>
                <div className={styles.swiperModuleTabPaneContent}>
                  <div className={clsx(styles.swiperModuleTabPaneImgWrap, styles.swiperModuleTabPaneImgWrap3)}>
                    <img
                      src={require('../../../../assets/images/home/choose-earn_simple_staking.png').default.src}
                      alt=""
                    />
                  </div>
                  <Row style={{ height: '100%' }}>
                    <Col xs={24} sm={24} md={24} lg={{ span: 14, offset: 10 }}>
                      <div className={styles.swiperModuleTabPaneDescWrap}>
                        <p className={styles.swiperModuleTabPaneType}>Simple Staking</p>
                        <h4 className={styles.swiperModuleTabPaneTitle}>Boost Your Tokens</h4>
                        <p className={styles.swiperModuleTabPaneDesc}>
                          Unstake the potential of your crypto tokens by staking them to earn rewarding returns! The
                          magic lies in time—the longer you commit to staking, the more generous the Annual Percentage
                          Rate (APR) becomes. Dive into staking and watch your assets flourish over time!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={clsx(styles.swiperModuleTabPane, current === 3 && styles.active)}>
                <div className={styles.swiperModuleTabPaneContent}>
                  <div className={clsx(styles.swiperModuleTabPaneImgWrap, styles.swiperModuleTabPaneImgWrap4)}>
                    <img src={require('../../../../assets/images/home/choose-earn_reward.png').default.src} alt="" />
                  </div>
                  <Row style={{ height: '100%' }}>
                    <Col xs={24} sm={24} md={24} lg={{ span: 14, offset: 10 }}>
                      <div className={styles.swiperModuleTabPaneDescWrap}>
                        <p className={styles.swiperModuleTabPaneType}>Simple Staking</p>
                        <h4 className={styles.swiperModuleTabPaneTitle}>
                          Maximise <br /> Your Earnings
                        </h4>
                        <p className={styles.swiperModuleTabPaneDesc}>
                          Capitalize on the rewards you&apos;ve earned by staking them to generate even more returns.
                          Alternatively, enjoy the flexibility to withdraw your available rewards at any time, giving
                          you complete control over your earnings management.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SwiperModule;
