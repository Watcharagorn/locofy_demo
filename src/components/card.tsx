import { FunctionComponent } from "react";
import styles from "./card.module.css";

export type CardType = {
  className?: string;
  unsplashnnzkZNYWHaU?: string;
  paris?: string;
  fillerElements?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  unsplashnnzkZNYWHaU,
  paris,
  fillerElements,
}) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <div className={styles.unsplashnnzkznywhauParent}>
        <img
          className={styles.unsplashnnzkznywhauIcon}
          alt=""
          src={unsplashnnzkZNYWHaU}
        />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{paris}</b>
          <div className={styles.fillerElementsParent}>
            <div className={styles.fillerElements}>{fillerElements}</div>
            <div className={styles.from}>from</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
