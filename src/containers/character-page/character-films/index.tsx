import React, { useEffect, useState } from "react";

import Loader from "src/components/loader";
import {
  IFilmApiResponse,
  IFilmData,
} from "src/containers/character-page/character-films/models";
import { getApiResponses } from "src/utils/get-api-response";
import { notFalse } from "src/utils/types";

import styles from "./styles.module.scss";

interface CharacterFilmsProps {
  filmsUrls: string[];
}

const CharacterFilms: React.FC<CharacterFilmsProps> = ({ filmsUrls }) => {
  const [filmsData, setFilmsData] = useState<IFilmData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const filmsRes = (
        await getApiResponses<IFilmApiResponse>(filmsUrls)
      ).filter(notFalse);

      setFilmsData(
        filmsRes.map(({ title, episode_id }) => ({
          title,
          episode: episode_id,
        }))
      );
      setLoading(false);
    })();
  }, [filmsUrls]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <Loader loading={loading}>
          {filmsData &&
            filmsData.map(({ title, episode }) => (
              <li className={styles.item} key={title}>
                <span className={styles.item__episode}>Episode {episode}</span>
                <span className={styles.item__colon}> : </span>
                <span className={styles.item__title}>{title}</span>
              </li>
            ))}
        </Loader>
      </ul>
    </div>
  );
};

export default CharacterFilms;
