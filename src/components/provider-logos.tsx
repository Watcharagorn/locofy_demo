import { FunctionComponent } from "react";
import BackgroundBorder from "./background-border";
import styles from "./provider-logos.module.css";

export type ProviderLogosType = {
  className?: string;
};

const ProviderLogos: FunctionComponent<ProviderLogosType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.providerLogos, className].join(" ")}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <div className={styles.techLogosParent}>
            <div className={styles.techLogos}>
              <img
                className={styles.pictureWiredGreysvg}
                loading="lazy"
                alt=""
                src="/picture--wiredgreysvg.svg"
              />
            </div>
            <div className={styles.buzzfeedLogo}>
              <img
                className={styles.clipPathGroup}
                alt=""
                src="/clip-path-group.svg"
              />
            </div>
            <img
              className={styles.pictureBuzzfeedGreysvg}
              loading="lazy"
              alt=""
              src="/picture--wiredgreysvg.svg"
            />
            <img
              className={styles.pictureForbesGreysvg}
              loading="lazy"
              alt=""
              src="/picture--wiredgreysvg.svg"
            />
            <div className={styles.tedxGreysvg}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <img
              className={styles.pictureBusinessInsiderGre}
              loading="lazy"
              alt=""
              src="/picture--wiredgreysvg.svg"
            />
          </div>
        </div>
        <div className={styles.vPNFeatures}>
          <form className={styles.featureList}>
            <div className={styles.adBlockerValues}>
              <h1 className={styles.heading2}>Why choose NordVPN?</h1>
            </div>
            <div className={styles.comparisonSubheading}>
              <div className={styles.seeHowWe}>
                See how we compare to the other VPN providers.
              </div>
            </div>
            <img
              className={styles.headerRow}
              loading="lazy"
              alt=""
              src="/header--row@2x.png"
            />
            <div className={styles.row}>
              <div className={styles.connectionSpeedRow}>
                <div className={styles.dataConnection}>Connection speed*</div>
              </div>
              <button className={styles.data}>
                <div className={styles.mbps}>6730+ Mbps</div>
              </button>
              <div className={styles.malwareScanRow}>
                <div className={styles.data2220}>2220+ Mbps</div>
              </div>
              <div className={styles.malwareScanValues}>
                <div className={styles.data3320}>3320+ Mbps</div>
              </div>
              <div className={styles.trackerBlockerFeatures}>
                <div className={styles.data1600}>1600+ Mbps</div>
              </div>
              <div className={styles.adBlockerRow}>
                <div className={styles.data2320}>2320+ Mbps</div>
              </div>
            </div>
            <div className={styles.tableContent}>
              <div className={styles.vPNServers}>
                <div className={styles.serverCount}>
                  <div className={styles.dataVpn}>VPN servers</div>
                </div>
                <div className={styles.serverValues}>
                  <div className={styles.data1}>
                    <div className={styles.path}>6400+</div>
                  </div>
                  <div className={styles.competitorServers}>
                    <div className={styles.dataNot}>Not disclosed</div>
                  </div>
                  <div className={styles.competitorServers1}>
                    <div className={styles.data200}>200+</div>
                  </div>
                  <div className={styles.competitorServers2}>
                    <div className={styles.data3000}>3000+</div>
                  </div>
                  <div className={styles.competitorServers3}>
                    <div className={styles.data6500}>6500+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.dataMalwareScanForDownloWrapper}>
                <div className={styles.dataMalware}>
                  Malware scan for downloads
                </div>
              </div>
              <img className={styles.dataIcon} alt="" src="/data@2x.png" />
              <div className={styles.dataSvgWrapper}>
                <img className={styles.dataSvg} alt="" src="/data--svg.svg" />
              </div>
              <div className={styles.dataSvgContainer}>
                <img
                  className={styles.dataSvg1}
                  alt=""
                  src="/data--svg-1.svg"
                />
              </div>
              <div className={styles.dataSvgFrame}>
                <img
                  className={styles.dataSvg2}
                  alt=""
                  src="/data--svg-1.svg"
                />
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.dataSvg3}
                  alt=""
                  src="/data--svg-3@2x.png"
                />
              </div>
            </div>
            <div className={styles.securityFeatures}>
              <div className={styles.featureIcons}>
                <div className={styles.alertFeature}>
                  <div className={styles.dataAlerts}>
                    Alerts about leaked credentials
                  </div>
                </div>
                <img className={styles.dataIcon1} alt="" src="/data@2x.png" />
                <div className={styles.featureIconList}>
                  <img
                    className={styles.dataSvg4}
                    alt=""
                    src="/data--svg-4@2x.png"
                  />
                </div>
                <div className={styles.featureIconList1}>
                  <img
                    className={styles.dataSvg5}
                    alt=""
                    src="/data--svg-5.svg"
                  />
                </div>
                <div className={styles.featureIconList2}>
                  <img
                    className={styles.dataSvg6}
                    alt=""
                    src="/data--svg-5.svg"
                  />
                </div>
                <div className={styles.featureIconList3}>
                  <img
                    className={styles.dataSvg7}
                    alt=""
                    src="/data--svg-5.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.dataTrackerAndAdBlockerWrapper}>
                <div className={styles.dataTracker}>Tracker and ad blocker</div>
              </div>
              <img className={styles.dataIcon2} alt="" src="/data@2x.png" />
              <div className={styles.dataSvgWrapper1}>
                <img
                  className={styles.dataSvg8}
                  alt=""
                  src="/data--svg-8@2x.png"
                />
              </div>
              <div className={styles.dataSvgWrapper2}>
                <img
                  className={styles.dataSvg9}
                  alt=""
                  src="/data--svg-9.svg"
                />
              </div>
              <div className={styles.dataSvgWrapper3}>
                <img
                  className={styles.dataSvg10}
                  alt=""
                  src="/data--svg-8@2x.png"
                />
              </div>
              <div className={styles.dataSvgWrapper4}>
                <img
                  className={styles.dataSvg11}
                  alt=""
                  src="/data--svg-8@2x.png"
                />
              </div>
            </div>
            <div className={styles.comparisonFooter}>
              <div className={styles.footerRowData}>
                <button className={styles.buttonGetTheDeal}>
                  <div className={styles.getTheDeal}>Get the Deal</div>
                </button>
              </div>
            </div>
            <div className={styles.comparisonDate}>
              <div className={styles.dateOfComparison}>
                Date of comparison: January 11, 2024.
              </div>
            </div>
            <div className={styles.researchLink}>
              <div className={styles.researchContainer}>
                <div
                  className={styles.overallNetworkPerformance}
                >{`*Overall network performance according to research by AV-Test. You can read `}</div>
                <div className={styles.reportLinkWrapperParent}>
                  <div className={styles.reportLinkWrapper}>
                    <div className={styles.theFullReport}>the full report</div>
                  </div>
                  <div className={styles.install}>.</div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.securityContentWrapper}>
          <div className={styles.securityContent}>
            <div className={styles.securityDescriptionWrapper}>
              <div className={styles.securityDescription}>
                <h1 className={styles.addExtraLayersContainer}>
                  <p className={styles.addExtraLayers}>
                    Add extra layers of security to your
                  </p>
                  <p className={styles.digitalLife}>digital life</p>
                </h1>
                <div className={styles.protectionDescription}>
                  <div className={styles.getOurBest}>
                    Get our best online protection tools along with your NordVPN
                    service.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.managerContainer}>
              <div className={styles.background}>
                <div className={styles.managerContent}>
                  <div className={styles.nordpassPasswordManagerContainer}>
                    <p className={styles.nordpass}>NordPass</p>
                    <p className={styles.passwordManager}>password manager</p>
                  </div>
                  <div className={styles.organizeYourComplexContainer}>
                    <p className={styles.organizeYourComplex}>
                      Organize your complex passwords and
                    </p>
                    <p className={styles.keepThemSecurely}>
                      keep them securely in a single place.
                    </p>
                  </div>
                </div>
                <div className={styles.encryptionDescription}>
                  <img
                    className={styles.pictureNordpassMobileIos}
                    loading="lazy"
                    alt=""
                    src="/picture--nordpassmobileiossvg.svg"
                  />
                </div>
              </div>
              <div className={styles.background1}>
                <div className={styles.nordlockerFileEncryptionContainer}>
                  <p className={styles.nordlocker}>NordLocker</p>
                  <p className={styles.fileEncryptionTool}>
                    file encryption tool
                  </p>
                </div>
                <div className={styles.secureYourFilesContainer}>
                  <p className={styles.secureYourFiles}>
                    Secure your files with a click and back
                  </p>
                  <p className={styles.themUpOn}>them up on a private cloud.</p>
                </div>
                <img
                  className={styles.pictureNordlockerMobileIo}
                  loading="lazy"
                  alt=""
                  src="/picture--nordlockermobileiossvg.svg"
                />
              </div>
            </div>
            <div className={styles.savingsButtonWrapper}>
              <button className={styles.buttonGetExtraSavings}>
                <div className={styles.getExtraSavings}>Get Extra Savings</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.protectionDescriptionWrapperParent}>
          <div className={styles.protectionDescriptionWrapper}>
            <h1 className={styles.takeYourCybersecurityContainer}>
              <span className={styles.takeYourCybersecurityContainer1}>
                <p className={styles.takeYourCybersecurity}>
                  Take your cybersecurity to the next
                </p>
                <p className={styles.levelWithThreat}>
                  level with Threat Protection Pro
                </p>
              </span>
            </h1>
          </div>
          <div className={styles.featureDescription}>
            <div className={styles.theNewFeatureContainer}>
              <p className={styles.theNewFeature}>
                The new feature protects you from malware, trackers, and ads.
                Even if you’re not connected to a
              </p>
              <p className={styles.vpn}>VPN.</p>
            </div>
          </div>
          <div className={styles.section}>
            <BackgroundBorder
              pictureThreatProtectionPr="/picture--threatprotectionprotectivebubblethreatssmsvg@2x.png"
              heading3MalwareProtection="Malware protection"
              avoidMaliciousWebsitesAnd="Avoid malicious websites and protect"
              yourDevicesFromMalware="your devices from malware."
            />
            <BackgroundBorder
              pictureThreatProtectionPr="/picture--cookietrackingbrowsetracefemalesmsvg@2x.png"
              heading3MalwareProtection="Tracker blocker"
              avoidMaliciousWebsitesAnd="Block tracking cookies and browse the"
              yourDevicesFromMalware="internet without leaving a trace."
            />
            <BackgroundBorder
              pictureThreatProtectionPr="/picture--adblockersignmalelaptopsmsvg@2x.png"
              heading3MalwareProtection="Ad blocker"
              avoidMaliciousWebsitesAnd="No more pop-ups and intrusive ads —"
              yourDevicesFromMalware="only smooth browsing."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderLogos;
