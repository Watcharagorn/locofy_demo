import { FunctionComponent } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.featureContentWrapper, className].join(" ")}>
      <div className={styles.featureContent}>
        <div className={styles.featuresContainer}>
          <h1 className={styles.heading1}>Get more with NordVPN</h1>
        </div>
        <div className={styles.benefitsContainer}>
          <div className={styles.backgroundborder}>
            <img
              className={styles.pictureDedicatedIpWomanB}
              loading="lazy"
              alt=""
              src="/picture--dedicatedipwomanbicyclepinbubblesmsvg@2x.png"
            />
            <div className={styles.benefitDescriptions}>
              <div className={styles.benefitHeadings}>
                <h3 className={styles.heading3}>Dedicated IP</h3>
                <div className={styles.getAllTheContainer}>
                  <p className={styles.getAllThe}>
                    Get all the benefits of a VPN with an IP
                  </p>
                  <p className={styles.addressThatBelongs}>
                    address that belongs only to you. Enjoy
                  </p>
                  <p className={styles.secureBrowsingWith}>
                    secure browsing with fewer
                  </p>
                  <p className={styles.interruptionsAndSay}>
                    interruptions, and say goodbye to IP
                  </p>
                  <p className={styles.blocklistsAndAnnoying}>
                    blocklists and annoying CAPTCHAs –
                  </p>
                  <p className={styles.addDedicatedIp}>
                    add Dedicated IP to your VPN
                  </p>
                  <p className={styles.subscriptionAtThe}>
                    subscription at the checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.backgroundborder1}>
            <div className={styles.pictureIncognisMagnifyingWrapper}>
              <img
                className={styles.pictureIncognisMagnifying}
                loading="lazy"
                alt=""
                src="/picture--incognismagnifyingglassmanbubblesmsvg@2x.png"
              />
            </div>
            <div className={styles.heading3IncogniParent}>
              <h3 className={styles.heading31}>Incogni</h3>
              <div className={styles.takeYourPersonalContainer}>
                <p className={styles.takeYourPersonal}>
                  Take your personal data off the market
                </p>
                <p className={styles.effortlesslyAvoidPotential}>
                  effortlessly, avoid potential scams,
                </p>
                <p className={styles.phishingAttacksAnd}>
                  phishing attacks, and identity theft – get
                </p>
                <p className={styles.theIncogniData}>
                  the Incogni data removal tool on top of
                </p>
                <p className={styles.yourVpnPlan}>
                  your VPN plan and take back control of
                </p>
                <p className={styles.yourOnlineData}>
                  your online data privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
