import { FC } from 'react';
import { itemType } from '../../types/UserDataType';
import { Links } from './Links';

import styles from './card.module.scss';

interface cardProps {
  data: itemType;
}

const Card: FC<cardProps> = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.data.imageURL} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <h3>BirthDate: {props.data.birthDate}</h3>
      <Links
        github={props.data.gitHubURL}
        linkedIn={props.data.linkedInURL}
        twitter={props.data.twitterURL}
      />
    </div>
  );
};

export { Card };
