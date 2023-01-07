import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReducersStore } from "src/store/reducers";

import bookmarkIcon from "./images/bookmark.svg";
import styles from "./styles.module.scss";

const FavoritesBookmark: React.FC = () => {
  const store = useSelector<ReducersStore, ReducersStore["favoritesReducer"]>(
    (state) => state.favoritesReducer
  );
  const count = store.favoritePersons.length;

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count > 99 ? "..." : count}</span>
        <img
          src={bookmarkIcon}
          className={styles.icon}
          alt="favorites counter"
        />
      </Link>
    </div>
  );
};

export default FavoritesBookmark;
