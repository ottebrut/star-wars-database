import React from "react";

import { IPersonInfo } from "src/containers/person-page/models";

import styles from "./styles.module.scss";

interface PersonInfoProps {
  personInfo: IPersonInfo;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {personInfo.map(
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

export default PersonInfo;
