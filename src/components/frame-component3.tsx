import { FunctionComponent } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.connectionContentWrapper, className].join(" ")}>
      <div className={styles.connectionContent}>
        <img
          className={styles.pictureWomanLaptopVpnSaf}
          loading="lazy"
          alt=""
          src="/picture--womanlaptopvpnsafedatawebp@2x.png"
        />
        <div className={styles.securityWrapper}>
          <div className={styles.securityDescriptionWrapper}>
            <h1 className={styles.keepYourDataContainer}>
              <p className={styles.keepYourData}>
                Keep your data safe from prying
              </p>
              <p className={styles.eyes}>eyes</p>
            </h1>
            <div className={styles.securityContent}>
              <div className={styles.ultimateSecurity}>Ultimate security</div>
              <div className={styles.nordvpnSafeguardsYourContainer}>
                <p className={styles.nordvpnSafeguardsYour}>
                  NordVPN safeguards your connection with next-generation
                </p>
                <p className={styles.encryptionSoYou}>
                  encryption, so you can log into your accounts, make bank
                  transfers,
                </p>
                <p className={styles.andShopOnline}>
                  and shop online without worries. Even on unprotected Wi-Fi.
                </p>
              </div>
            </div>
            <div className={styles.securityContent1}>
              <div className={styles.noLogsPolicy}>No-logs policy</div>
              <div className={styles.itsNobodysBusinessContainer}>
                <p className={styles.itsNobodysBusiness}>
                  It’s nobody’s business what you do online. That’s why we don’t
                </p>
                <p className={styles.trackCollectOr}>
                  track, collect, or share your private data. We couldn’t
                  provide any
                </p>
                <p className={styles.detailsAboutYou}>
                  details about you to third parties, even if they ask.
                </p>
              </div>
            </div>
            <div className={styles.dealButtons}>
              <button className={styles.buttonGetTheDeal}>
                <div className={styles.getTheDeal}>Get the Deal</div>
              </button>
              <button className={styles.buttonGetTheDeal1}>
                <div className={styles.getTheDeal1}>Get the Deal</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
