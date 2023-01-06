import React from "react";
import { NavLink } from "react-router-dom";

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
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
