import React from "react";
import { NavLink } from "react-router-dom";

import FavoritesBookmark from "src/components/favorites-bookmark";
import { useTheme } from "src/context/theme/theme-provider";
import { ITheme } from "src/models/theme";

import deathStarIcon from "./images/death-star.svg";
import droidIcon from "./images/droid.svg";
import sabersIcon from "./images/sabers.svg";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const icon = getIconByTheme(theme);

  return (
    <div className={styles.container}>
      <img src={icon} className={styles.logo} alt="logo" />
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>

      <FavoritesBookmark />
    </div>
  );
};

export default Header;

function getIconByTheme(theme: ITheme): string {
  if (theme === "dark") {
    return deathStarIcon;
  }
  if (theme === "light") {
    return sabersIcon;
  }
  return droidIcon;
}
