import React from "react";
import { useParams } from "react-router-dom";

import CharacterFilms from "src/containers/character-page/character-films";
import CharacterInfo from "src/containers/character-page/character-info";
import CharacterLinkBack from "src/containers/character-page/character-link-back";
import CharacterPhoto from "src/containers/character-page/character-photo";
import useCharacterData from "src/containers/character-page/use-character-data";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { ICharacter } from "src/models/character";
import { getCharacterImage } from "src/utils/get-character-data";

import styles from "./styles.module.scss";

interface CharacterPageProps extends WithErrorApiViewProps {}

const CharacterPage: React.FC<CharacterPageProps> = ({ setErrorApi }) => {
  const { id } = useParams();
  const characterId = id!;
  const { characterInfo, characterName, characterFilms } = useCharacterData({
    id: characterId,
    setErrorApi,
  });
  const character: ICharacter | null = characterName
    ? {
        name: characterName,
        id: characterId,
        img: getCharacterImage(characterId),
      }
    : null;

  return (
    <>
      <CharacterLinkBack />

      {character && (
        <div className={styles.character}>
          <span className={styles.character__name}>{characterName}</span>

          <div className={styles["character__data-container"]}>
            <CharacterPhoto character={character} />
            <CharacterInfo info={characterInfo!} />
            <CharacterFilms filmsUrls={characterFilms!} />
          </div>
        </div>
      )}
    </>
  );
};

export default withErrorApi(CharacterPage);
