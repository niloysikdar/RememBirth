import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './style.module.scss';

interface backdropPropstype {
  children: any;
  onClick: any;
}

const Backdrop: FC<backdropPropstype> = (props) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export { Backdrop };
