import { FunctionComponent } from "react";
import HotelCard1 from "./hotel-card1";
import HotelCard from "./hotel-card";
import styles from "./popular-stays.module.css";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: FunctionComponent<PopularStaysType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popularStays, className].join(" ")}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <div className={styles.viewAllContainer}>
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-4.svg"
          />
        </div>
      </div>
      <div className={styles.hotelCards}>
        <HotelCard1
          unsplashHhRfsdWxXus="/unsplashhhrfsdwxxus@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          reviews="(60 reviews)"
          reviewSingleSeparator="4.9"
        />
        <HotelCard
          unsplashtSn8bPOpVEo="/unsplashtsn8bpopveo@2x.png"
          storyBeachfrontSuite="2-Story beachfront suite"
          discoveryShores="Discovery Shores"
          night="$360/night"
          reviews="(116 reviews)"
          prop="4.8"
          starIcons="/vector-3.svg"
        />
        <HotelCard
          unsplashtSn8bPOpVEo="/unsplashrlwe8f8anoc@2x.png"
          storyBeachfrontSuite="Single deluxe hut"
          discoveryShores="Arctic Hut "
          night="$420/night"
          reviews="(78 reviews)"
          prop="4.7"
          starIcons="/vector-5.svg"
        />
        <HotelCard1
          unsplashHhRfsdWxXus="/unsplashyqrybvxug5q@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          reviews="(63 reviews)"
          reviewSingleSeparator="4.6"
        />
      </div>
      <div className={styles.viewAllStaysParent}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img
          className={styles.arrowRightIcon1}
          alt=""
          src="/arrowright-4.svg"
        />
      </div>
    </div>
  );
};

export default PopularStays;
