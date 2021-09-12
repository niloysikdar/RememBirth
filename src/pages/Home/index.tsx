import { useState } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { data } from "../../data";

import { getDate } from "../../utils/getDateAndMonth";

import styles from "./style.module.scss";

const Home = () => {
  const [isAll, setIsAll] = useState(true);

  const setAll = () => {
    setIsAll(true);
  };

  const setToday = () => {
    setIsAll(false);
  };

  return (
    <>
      <Header setAll={setAll} setToday={setToday} />
      <div className={styles.home}>
        {isAll
          ? data.map((item) => <Card key={item.name} data={item} />)
          : data
              .filter((item) => item.birthDate === getDate())
              .map((cardData) => <Card key={cardData.name} data={cardData} />)}
      </div>
    </>
  );
};

export { Home };
