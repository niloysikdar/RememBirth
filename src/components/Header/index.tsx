import { FC } from 'react';
import { FaInfo } from 'react-icons/fa';

import { motion } from 'framer-motion';

import styles from './style.module.scss';

interface headerProps {
  setAll: any;
  setToday: any;
  aboutOpen: any;
}

const Header: FC<headerProps> = (props) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>RememBirth</h3>
      <div className={styles.buttons}>
        <button className={styles.toggleButton} onClick={props.setAll}>
          All
        </button>
        <button className={styles.toggleButton} onClick={props.setToday}>
          Today
        </button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.info}
          onClick={props.aboutOpen}
        >
          <FaInfo size={25} />
        </motion.button>
      </div>
    </div>
  );
};

export { Header };
