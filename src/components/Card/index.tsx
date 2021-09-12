import { FC } from "react";
import { itemType } from "../../data/type/itemType";

const Card: FC<itemType> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

export { Card };
