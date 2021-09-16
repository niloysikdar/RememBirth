import { AnimatePresence } from 'framer-motion';

import { useAllToggle } from '../../hooks/useAllToggle';
import { useModal } from '../../hooks/useModal';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { data } from '../../data';
import { About } from '../../components/About';

import { getDate } from '../../utils/getDateAndMonth';
import styles from './style.module.scss';

const Home = () => {
  const { isAll, setAll, setToday } = useAllToggle();
  const { isModalOpen, open, close } = useModal();

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
        {isModalOpen && <About handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export { Home };
