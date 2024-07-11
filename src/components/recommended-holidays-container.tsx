import { FunctionComponent } from "react";
import RecCard from "./rec-card";
import styles from "./recommended-holidays-container.module.css";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: FunctionComponent<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.recommendedHolidaysContainer, className].join(" ")}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <div className={styles.viewHolidays}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-2.svg"
          />
        </div>
      </div>
      <div className={styles.recCardsContainer}>
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          emptyInfoElements="$899"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplashj82dskoxvy8@2x.png"
          bali="Switzerland"
          d3N="6D5N"
          emptyInfoElements="$900"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplash4ezkckxolre@2x.png"
          bali="Boracay"
          d3N="5D4N"
          emptyInfoElements="$699"
        />
        <RecCard
          unsplash5MV818tzxeo="/unsplashuyqmxhjr3ne@2x.png"
          bali="Palawan"
          d3N="4D3N"
          emptyInfoElements="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon1}
          alt=""
          src="/arrowright-2.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
