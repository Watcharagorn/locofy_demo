import { FunctionComponent } from "react";
import styles from "./section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.giftLogo}>
        <img
          className={styles.pictureSailyLogosvg}
          loading="lazy"
          alt=""
          src="/picture--sailylogosvg-1@2x.png"
        />
      </div>
      <div className={styles.giftDescription}>
        <div className={styles.giftDetails}>
          <div className={styles.aboutTheGift}>About the gift:</div>
          <div className={styles.sailyIsA}>
            Saily is a global eSIM app for travelers who want to stay connected.
            Choose from hundreds of
          </div>
        </div>
        <div className={styles.flexibleDataPlansContainer}>
          <p className={styles.flexibleDataPlans}>
            flexible data plans in over 150 countries and avoid unexpected
            roaming fees. No contracts, no strings
          </p>
          <p className={styles.attached}>attached.</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
