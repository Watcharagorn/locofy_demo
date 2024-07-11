import { FunctionComponent } from "react";
import Card from "./card";
import styles from "./pop-destinations-main.module.css";

export type PopDestinationsMainType = {
  className?: string;
};

const PopDestinationsMain: FunctionComponent<PopDestinationsMainType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popDestinationsMain, className].join(" ")}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <div className={styles.viewAllTop}>
          <a className={styles.viewAllDestinations}>View all destinations</a>
          <img
            className={styles.arrowRightIcon}
            loading="lazy"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
      <footer className={styles.cardsContainer}>
        <Card
          unsplashnnzkZNYWHaU="/unsplashnnzkznywhau@2x.png"
          paris="Paris"
          fillerElements="$699"
        />
        <Card
          unsplashnnzkZNYWHaU="/unsplashyc8qqp50bda@2x.png"
          paris="Greece"
          fillerElements="$1079"
        />
        <Card
          unsplashnnzkZNYWHaU="/unsplashltnpejwdsay@2x.png"
          paris="Norway"
          fillerElements="$895"
        />
        <Card
          unsplashnnzkZNYWHaU="/unsplashm0oiyn5u8zm@2x.png"
          paris="Tuscany"
          fillerElements="$1245"
        />
      </footer>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon1} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopDestinationsMain;
