import React from "react";

import { ICharacterInfo } from "src/containers/character-page/models";

import styles from "./styles.module.scss";

interface CharacterInfoProps {
  info: ICharacterInfo;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ info }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {info.map(
          ({ label, data }) =>
            data && (
              <li className={styles.list__item} key={label}>
                <span className={styles.item__label}>{label}</span>: {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CharacterInfo;
