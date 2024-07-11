import { FunctionComponent } from "react";
import styles from "./hotel-card1.module.css";

export type HotelCard1Type = {
  className?: string;
  unsplashHhRfsdWxXus?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  reviews?: string;
  reviewSingleSeparator?: string;
};

const HotelCard1: FunctionComponent<HotelCard1Type> = ({
  className = "",
  unsplashHhRfsdWxXus,
  entireBungalow,
  matterhornSuites,
  night,
  reviews,
  reviewSingleSeparator,
}) => {
  return (
    <div className={[styles.hotelCard1, className].join(" ")}>
      <div className={styles.hotelCard}>
        <img
          className={styles.unsplashhhrfsdwxxusIcon}
          alt=""
          src={unsplashHhRfsdWxXus}
        />
        <div className={styles.stayDetails}>
          <div className={styles.stayType}>
            <div className={styles.entireBungalow}>{entireBungalow}</div>
            <b className={styles.matterhornSuites}>{matterhornSuites}</b>
            <div className={styles.night}>{night}</div>
          </div>
          <img className={styles.videoIcon} alt="" src="/video.svg" />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.ratingStars}>
            <div className={styles.reviewSingleSeparator}>
              {reviewSingleSeparator}
            </div>
            <img className={styles.starSingleIcon} alt="" src="/vector-3.svg" />
          </div>
        </div>
        <div className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard1;
