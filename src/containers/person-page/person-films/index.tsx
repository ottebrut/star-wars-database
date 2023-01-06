import React, { useEffect, useState } from "react";

import {
  IFilmApiResponse,
  IFilmData,
} from "src/containers/person-page/person-films/models";
import { getApiResponses } from "src/utils/network";
import { notFalse } from "src/utils/types";

import styles from "./styles.module.scss";

interface PersonFilmsProps {
  filmsUrls: string[];
}

const PersonFilms: React.FC<PersonFilmsProps> = ({ filmsUrls }) => {
  const [filmsData, setFilmsData] = useState<IFilmData[] | null>(null);

  useEffect(() => {
    (async () => {
      const filmsRes = (
        await getApiResponses<IFilmApiResponse>(filmsUrls)
      ).filter(notFalse);

      setFilmsData(
        filmsRes.map(({ title, episode_id }) => ({
          title,
          episode: episode_id,
        }))
      );
    })();
  }, [filmsUrls]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filmsData &&
          filmsData.map(({ title, episode }) => (
            <li className={styles.item} key={title}>
              <span className={styles.item__episode}>Episode {episode}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
