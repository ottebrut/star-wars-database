import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { ICharacters } from "src/models/character";

import styles from "./styles.module.scss";

interface SearchCharactersListProps {
  characters: ICharacters | null;
}

const SearchCharactersList: React.FC<SearchCharactersListProps> = ({
  characters,
}) => {
  if (characters?.length) {
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
                alt="character's portrait"
              />
              <p className={styles.character__name}>{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return <h2 className={styles.comment}>No results</h2>;
};

export default SearchCharactersList;
