import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "src/hooks/redux";

import bookmarkIcon from "./images/bookmark.svg";
import styles from "./styles.module.scss";

const FavoritesBookmark: React.FC = () => {
  const store = useAppSelector((state) => state.favorites);
  const count = store.favoriteCharacters.length;

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
