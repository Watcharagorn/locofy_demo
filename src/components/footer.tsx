import { FunctionComponent } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerLinks}>
        <div className={styles.nordSecurityAll}>
          © 2024 Nord Security. All Rights Reserved
        </div>
        <div className={styles.supportnordvpncom}>support@nordvpn.com</div>
        <div className={styles.termsOfService}>Terms of Service</div>
        <div className={styles.cookiePreferences}>Cookie Preferences</div>
      </div>
      <div className={styles.paymentContainer}>
        <img
          className={styles.creditCardssvgIcon}
          loading="lazy"
          alt=""
          src="/creditcardssvg.svg"
        />
        <div className={styles.languageContainer}>
          <img
            className={styles.svgIcon}
            loading="lazy"
            alt=""
            src="/svg-1.svg"
          />
          <a className={styles.english}>English</a>
          <div className={styles.languageDropdown}>
            <div className={styles.border} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
