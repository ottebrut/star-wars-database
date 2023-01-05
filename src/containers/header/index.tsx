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
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
