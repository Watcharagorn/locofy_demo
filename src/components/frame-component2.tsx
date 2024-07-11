import { FunctionComponent } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.speedContentWrapper, className].join(" ")}>
      <div className={styles.speedContent}>
        <div className={styles.speedDescriptionWrapper}>
          <div className={styles.speedDescriptionContainer}>
            <h1 className={styles.enjoyAFastContainer}>
              <p className={styles.enjoyAFast}>
                Enjoy a fast and stable connection
              </p>
              <p className={styles.anywhere}>anywhere</p>
            </h1>
            <div className={styles.limitDescription}>
              <div className={styles.noBandwidthLimits}>
                No bandwidth limits
              </div>
              <div className={styles.thereAreNoContainer}>
                <p className={styles.thereAreNo}>
                  There are no speed limits at our end. Enjoy your full-speed
                  VPN
                </p>
                <p className={styles.connectionWithoutAny}>
                  connection without any throttling.
                </p>
              </div>
            </div>
            <div className={styles.compatibilityDescription}>
              <div className={styles.worksOnAll}>Works on all devices</div>
              <div className={styles.nordvpnIsCompatibleContainer}>
                <p className={styles.nordvpnIsCompatible}>
                  NordVPN is compatible with all popular platforms, including
                </p>
                <p className={styles.windowsMacosLinux}>
                  Windows, macOS, Linux, Android, and iOS. Besides, you can
                  secure
                </p>
                <p className={styles.upTo10}>
                  up to 10 devices with a single account, including your router.
                </p>
              </div>
            </div>
            <div className={styles.availabilityWrapper}>
              <div className={styles.availableOn}>Available on:</div>
              <div className={styles.downloadLinks}>
                <div className={styles.content}>
                  <div className={styles.content1}>
                    <img
                      className={styles.linkAndroidDownloads}
                      loading="lazy"
                      alt=""
                      src="/link--android-downloads.svg"
                    />
                    <img
                      className={styles.linkWindowsDownloads}
                      loading="lazy"
                      alt=""
                      src="/link--windows-downloads.svg"
                    />
                    <img
                      className={styles.linkIosDownloads}
                      loading="lazy"
                      alt=""
                      src="/link--ios-downloads.svg"
                    />
                    <div className={styles.desktopLinks}>
                      <img
                        className={styles.linkMacosDownloads}
                        loading="lazy"
                        alt=""
                        src="/link--macos-downloads.svg"
                      />
                      <img
                        className={styles.linkFirefoxExtensionDownl}
                        loading="lazy"
                        alt=""
                        src="/link--firefox-extension-downloads.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.buttonGetTheDeal}>
                    <div className={styles.getTheDeal}>Get the Deal</div>
                  </button>
                </div>
                <img
                  className={styles.linkChromeExtensionDownlo}
                  loading="lazy"
                  alt=""
                  src="/link--chrome-extension-downloads.svg"
                />
                <img
                  className={styles.linkEdgeExtensionDownload}
                  loading="lazy"
                  alt=""
                  src="/link--edge-extension-downloads.svg"
                />
                <img
                  className={styles.linkLinuxDownloads}
                  loading="lazy"
                  alt=""
                  src="/link--linux-downloads.svg"
                />
                <img
                  className={styles.linkOtherDownloads}
                  alt=""
                  src="/link--other-downloads.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.pictureLaptopStableConnec}
          loading="lazy"
          alt=""
          src="/picture--laptopstableconnectionfastprotectedmdwebp@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
