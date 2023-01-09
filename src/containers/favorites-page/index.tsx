import React from "react";

import CharactersListBig from "src/components/characters-list-big";
import { useAppSelector } from "src/hooks/redux";

import styles from "./styles.module.scss";

const FavoritesPage: React.FC = () => {
  const store = useAppSelector((state) => state.favorites);
  const characters = store.favoriteCharacters;

  return (
    <>
      <h1 className="header__text">Favorite Characters</h1>
      {characters.length ? (
        <CharactersListBig characters={characters} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritesPage;
