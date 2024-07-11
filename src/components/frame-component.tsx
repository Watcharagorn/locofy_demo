import { FunctionComponent } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.guaranteeContentWrapper, className].join(" ")}>
      <div className={styles.guaranteeContent}>
        <div className={styles.border}>
          <img
            className={styles.backgroundIcon}
            loading="lazy"
            alt=""
            src="/background@2x.png"
          />
          <div className={styles.background}>
            <h1 className={styles.heading2}>30-day money-back guarantee</h1>
            <div className={styles.trialDescription}>
              <div className={styles.notSureIf}>
                Not sure if this is what you need? Take your time to try the
                NordVPN service completely risk-free.
              </div>
              <button className={styles.buttonTryNordvpnRiskFree}>
                <div className={styles.tryNordvpnRisk}>
                  Try NordVPN Risk Free
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.containerIcon}
          loading="lazy"
          alt=""
          src="/container@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
