import { FC } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import styles from './card.module.scss';

interface propsType {
  github: string;
  linkedIn: string;
  twitter?: string;
}

const Links: FC<propsType> = (props) => {
  return (
    <div className={styles.linksdiv}>
      <a href={props.github} target='_blank' rel='noreferrer'>
        <FaGithub size={23} color='#000' />
      </a>
      <a href={props.linkedIn} target='_blank' rel='noreferrer'>
        <FaLinkedinIn size={23} color='#000' />
      </a>
      {props.twitter && (
        <a href={props.twitter} target='_blank' rel='noreferrer'>
          <FaTwitter size={23} color='#000' />
        </a>
      )}
    </div>
  );
};

export { Links };
