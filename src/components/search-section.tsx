import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete } from "antd";
import styles from "./search-section.module.css";

export type SearchSectionType = {
  className?: string;
};

const SearchSection: FunctionComponent<SearchSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.searchSection, className].join(" ")}>
      <div className={styles.bannerGradient} />
      <img
        className={styles.bannerBackground}
        alt=""
        src="/banner--background@2x.png"
      />
      <div className={styles.searchContainer}>
        <div className={styles.title}>
          <div
            className={styles.letsExplore}
          >{`Let’s explore & travel the world`}</div>
          <div className={styles.findTheBest}>
            Find the best destinations and the most popular stays!
          </div>
        </div>
        <form className={styles.searchForm}>
          <div className={styles.inputsRow}>
            <div className={styles.inputGroup}>
              <AutoComplete
                className={styles.departureField}
                value="Singapore -  Changi (SIN)"
                size="medium"
                options={[
                  { value: "Singapore (SIN)" },
                  { value: "Sydney (SYD)" },
                  { value: "Siem Reap (REP)" },
                  { value: "Shanghai (PVG)Sanya (SYX)" },
                ]}
                filterOption={(inputValue: any, option: any) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue?.toUpperCase()) !== -1
                }
              />
            </div>
            <div className={styles.inputGroup1}>
              <AutoComplete className={styles.arrivalField} />
            </div>
            <div className={styles.inputGroup2}>
              <AutoComplete
                className={styles.dateField}
                placeholder="01/05/2022"
                size="medium"
              />
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.searchFlightsButton}>
              <a className={styles.button}>Search flights</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
