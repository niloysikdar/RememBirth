import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { data } from "../../data";
import { About } from "../../components/About";

import { getDate } from "../../utils/getDateAndMonth";
import styles from "./style.module.scss";

const Home = () => {
  const [isAll, setIsAll] = useState(true);
  const setAll = () => setIsAll(true);
  const setToday = () => setIsAll(false);

  const [isAboutOpen, setAboutOpen] = useState(false);
  const open = () => setAboutOpen(true);
  const close = () => setAboutOpen(false);

  return (
    <>
      <Header setAll={setAll} setToday={setToday} aboutOpen={open} />
      <div className={styles.home}>
        {isAll
          ? data.map((item) => <Card key={item.name} data={item} />)
          : data
              .filter((item) => item.birthDate === getDate())
              .map((cardData) => <Card key={cardData.name} data={cardData} />)}
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isAboutOpen && <About handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export { Home };
