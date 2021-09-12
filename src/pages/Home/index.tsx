import { Card } from "../../components/Card";
import { data } from "../../data";

import styles from "./style.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export { Home };
