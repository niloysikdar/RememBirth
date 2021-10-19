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
        <h2>RememBirth</h2>
        <section>
          <p>
            Never forget important birthdays anymore.
            <br /><br />
            Keep track of birthday's for family, friends and 
            colleagues with our easy to use application.
          </p>        
        </section>
        <button onClick={handleClose}>Close</button>        
      </motion.div>
    </Backdrop>
  );
};

export { About };
