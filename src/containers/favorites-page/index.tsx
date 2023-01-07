import React from "react";
import { useSelector } from "react-redux";

import PeopleList from "src/components/people-list";
import { ReducersStore } from "src/store/reducers";

import styles from "./styles.module.scss";

const FavoritesPage: React.FC = () => {
  const store = useSelector<ReducersStore, ReducersStore["favoritesReducer"]>(
    (state) => state.favoritesReducer
  );
  const people = store.favoritePersons;

  return (
    <>
      <h1 className="header__text">Favorite Characters</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritesPage;
