import { FunctionComponent } from "react";
import styles from "./hotel-card.module.css";

export type HotelCardType = {
  className?: string;
  unsplashtSn8bPOpVEo?: string;
  storyBeachfrontSuite?: string;
  discoveryShores?: string;
  night?: string;
  reviews?: string;
  prop?: string;
  starIcons?: string;
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  className = "",
  unsplashtSn8bPOpVEo,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  reviews,
  prop,
  starIcons,
}) => {
  return (
    <div className={[styles.hotelCard2, className].join(" ")}>
      <div className={styles.hotelCard}>
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={unsplashtSn8bPOpVEo}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>
              {storyBeachfrontSuite}
            </div>
            <b className={styles.discoveryShores}>{discoveryShores}</b>
            <div className={styles.night}>{night}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{prop}</div>
            <img className={styles.starIcons} alt="" src={starIcons} />
          </div>
        </div>
        <div className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
