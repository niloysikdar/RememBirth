import { Header } from "../../components/Header";

import { Card } from "../../components/Card";
import { data } from "../../data";

import styles from "./style.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        {data.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </>
  );
};

export { Home };
