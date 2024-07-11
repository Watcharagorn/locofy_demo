import { FunctionComponent } from "react";
import FrameComponent4 from "../components/frame-component4";
import Section from "../components/section";
import ProviderLogos from "../components/provider-logos";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./nordvpncom-by-htmltodesign.module.css";

const NordvpncomByHtmltodesign: FunctionComponent = () => {
  return (
    <div className={styles.nordvpncomByHtmltodesign}>
      <div className={styles.background}>
        <div className={styles.ipStatus}>
          <div
            className={styles.yourIp10428214144}
          >{`Your IP: 104.28.214.144 · ISP: Cloudflare Warp · Your Status: `}</div>
        </div>
        <a className={styles.unprotected}>Unprotected</a>
      </div>
      <FrameComponent4 />
      <Section />
      <ProviderLogos />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default NordvpncomByHtmltodesign;
