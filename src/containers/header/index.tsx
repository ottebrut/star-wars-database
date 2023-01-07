import React from "react";
import { NavLink } from "react-router-dom";

import FavoritesBookmark from "src/components/favorites-bookmark";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
      </ul>

      <FavoritesBookmark />
    </div>
  );
};

export default Header;
