import { FC } from "react";
import { FaInfo } from "react-icons/fa";

import styles from "./style.module.scss";

interface headerProps {
  setAll: any;
  setToday: any;
}

const Header: FC<headerProps> = (props) => {
  return (
    <div className={styles.header}>
      <h3>RememBirth</h3>
      <div className={styles.buttons}>
        <button className={styles.toggleButton} onClick={props.setAll}>
          All
        </button>
        <button className={styles.toggleButton} onClick={props.setToday}>
          Today
        </button>
      </div>
      <button className={styles.info}>
        <FaInfo size={25} />
      </button>
    </div>
  );
};

export { Header };
