/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Col, Row, Steps } from 'antd';
import type { StepsProps } from 'antd';
import Link from 'next/link';
import { AppEcoearnDomain } from '@/api/constants';
import CountCompo from './components/CountCompo';

const customDot: StepsProps['progressDot'] = (_, { index }) => (
  <span className={styles.defaultDot}>Step {index + 1}</span>
);

function StepModule() {
  return (
    <section className={clsx(['section-container', styles.stepModuleWrap])}>
      <section className={clsx([styles.stepModuleContainer, styles.stepModule])}>
        <Row>
          <Col xs={24} sm={24} md={11}>
            <div className={styles.stepModuleImgWrap}>
              <div className={styles.stepModuleContentWrap}>
                <h1 className={styles.stepModuleTitle}>
                  Earn Reward in <br /> <CountCompo className={styles.purple} targetNumber={3} /> Simple Steps
                </h1>
                <Link
                  href={AppEcoearnDomain + '/staking'}
                  target="_blank"
                  className={clsx(['primary-link-button', styles.stepModuleLink])}>
                  Stake Now
                </Link>
              </div>

              <img
                className={styles.stepModuleImgBg}
                src={require('../../../../assets/images/home/simple_steps.png').default.src}
                alt=""
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={13}>
            <Steps
              current={3}
              direction="vertical"
              progressDot={customDot}
              className={styles.antSteps}
              items={[
                {
                  title: 'Connect',
                  description: 'Connect seamlessly with Portkey Wallet and dive into a hassle-free login experience.',
                },
                {
                  title: 'Stake',
                  description:
                    'Unleash the power of your assets with varied staking options. Be a part of our dynamic reward distribution platform!',
                },
                {
                  title: 'Reward',
                  description:
                    'Reap the benefits! Watch your rewards grow and amplify earnings by re-staking collected rewards.',
                },
              ]}
            />
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default StepModule;
