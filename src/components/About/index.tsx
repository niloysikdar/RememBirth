import { FC } from 'react';
import { motion } from 'framer-motion';
import { Backdrop } from '../Backdrop';
import { flip } from '../../utils/ModalanimationTypes';

import styles from './style.module.scss';

interface propType {
  handleClose: any;
}

const About: FC<propType> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles.about}
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo vitae
          odit beatae provident autem, repellendus libero eum ducimus impedit
          quia ut temporibus sunt ex incidunt vero voluptas porro blanditiis
          saepe!
        </p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export { About };
