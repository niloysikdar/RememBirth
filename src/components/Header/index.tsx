import { FC } from "react";
import styles from "./style.module.scss";

interface headerProps {
  setAll: any;
  setToday: any;
}

const Header: FC<headerProps> = (props) => {
  return (
    <div className={styles.header}>
      <button onClick={props.setAll}>All</button>
      <button onClick={props.setToday}>Today</button>
    </div>
  );
};

export { Header };
