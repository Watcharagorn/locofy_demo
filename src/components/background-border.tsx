import { FunctionComponent } from "react";
import styles from "./background-border.module.css";

export type BackgroundBorderType = {
  className?: string;
  pictureThreatProtectionPr?: string;
  heading3MalwareProtection?: string;
  avoidMaliciousWebsitesAnd?: string;
  yourDevicesFromMalware?: string;
};

const BackgroundBorder: FunctionComponent<BackgroundBorderType> = ({
  className = "",
  pictureThreatProtectionPr,
  heading3MalwareProtection,
  avoidMaliciousWebsitesAnd,
  yourDevicesFromMalware,
}) => {
  return (
    <div className={[styles.backgroundborder, className].join(" ")}>
      <img
        className={styles.pictureThreatProtectionPr}
        loading="lazy"
        alt=""
        src={pictureThreatProtectionPr}
      />
      <h3 className={styles.heading3}>{heading3MalwareProtection}</h3>
      <div className={styles.avoidMaliciousWebsitesContainer}>
        <p className={styles.avoidMaliciousWebsites}>
          {avoidMaliciousWebsitesAnd}
        </p>
        <p className={styles.yourDevicesFrom}>{yourDevicesFromMalware}</p>
      </div>
    </div>
  );
};

export default BackgroundBorder;
