import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { ICharacters } from "src/models/character";

import styles from "src/components/characters-list-big/styles.module.scss";

interface CharactersListBigProps {
  characters: ICharacters;
}

const CharactersListBig: React.FC<CharactersListBigProps> = ({
  characters,
}) => {
  return (
    <ul className={styles.list}>
      {characters.map((character) => (
        <li
          key={character.id}
          className={cn(styles.list__item, styles.character)}
        >
          <Link to={`/people/${character.id}`}>
            <img
              src={character.img}
              className={styles.character__photo}
              alt="character portrait"
            />
            <p>{character.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersListBig;
