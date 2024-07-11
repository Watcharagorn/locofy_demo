import { FunctionComponent } from "react";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <header className={styles.header}>
        <a className={styles.skipToMain}>Skip to main content</a>
        <button className={styles.navLink}>
          <img
            className={styles.navLink1}
            alt=""
            loading="lazy"
            src="/nav--link.svg"
          />
        </button>
      </header>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.dealName}>
          <h3 className={styles.nordvpnDeal}>NordVPN deal + Saily gift</h3>
        </div>
        <div className={styles.dealOffer}>
          <div className={styles.dealDescription}>
            <h1 className={styles.get72OffContainer}>
              <p className={styles.get72Off}>Get 72% off NordVPN +</p>
              <p className={styles.aSailyEsim}>a Saily eSIM data gift</p>
            </h1>
          </div>
          <div className={styles.backgroundshadow}>
            <img
              className={styles.pictureNordsvg}
              alt=""
              src="/picture--nordsvg.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>-72%</div>
            </div>
          </div>
        </div>
        <div className={styles.dealButtonWrapperParent}>
          <div className={styles.dealButtonWrapper}>
            <div className={styles.dealButtonContainer}>
              <div className={styles.buttonContainer}>
                <button className={styles.buttonGetTheDeal}>
                  <div className={styles.getTheDeal}>Get the Deal</div>
                </button>
                <div className={styles.paragraphbackground}>
                  <div className={styles.becomeEivorAVikingRaiderRParent}>
                    <div className={styles.becomeEivorA}>00</div>
                    <div className={styles.container}>
                      <div className={styles.div1}>:</div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div2}>09</div>
                    <div className={styles.frame}>
                      <div className={styles.div3}>:</div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div4}>39</div>
                    <div className={styles.frameDiv}>
                      <div className={styles.div5}>:</div>
                    </div>
                  </div>
                  <div className={styles.div6}>03</div>
                </div>
              </div>
              <div className={styles.svgParent}>
                <img className={styles.svgIcon} alt="" src="/svg@2x.png" />
                <div className={styles.dayMoneyBackGuarantee}>
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
          <div className={styles.backgroundshadow1}>
            <img
              className={styles.pictureSailyGift1svg}
              alt=""
              src="/picture--sailygift1svg.svg"
            />
            <div className={styles.sailyLogoContainer}>
              <img
                className={styles.pictureSailyLogosvg}
                alt=""
                src="/picture--sailylogosvg@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
