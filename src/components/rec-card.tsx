import { FunctionComponent } from "react";
import styles from "./rec-card.module.css";

export type RecCardType = {
  className?: string;
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  emptyInfoElements?: string;
};

const RecCard: FunctionComponent<RecCardType> = ({
  className = "",
  unsplash5MV818tzxeo,
  bali,
  d3N,
  emptyInfoElements,
}) => {
  return (
    <div className={[styles.recCard1, className].join(" ")}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.holidayDetailsParent}>
          <div className={styles.holidayDetails1}>
            <div className={styles.bali}>{bali}</div>
            <div className={styles.d3n}>{d3N}</div>
          </div>
          <div className={styles.emptyInfoElements}>{emptyInfoElements}</div>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
