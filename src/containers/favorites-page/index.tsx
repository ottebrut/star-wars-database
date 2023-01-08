import React from "react";
import { useSelector } from "react-redux";

import CharactersListBig from "src/components/characters-list-big";
import { ReducersStore } from "src/store/reducers";

import styles from "./styles.module.scss";

const FavoritesPage: React.FC = () => {
  const store = useSelector<ReducersStore, ReducersStore["favoritesReducer"]>(
    (state) => state.favoritesReducer
  );
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
