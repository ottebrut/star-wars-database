import React from "react";
import cn from "classnames";

import { ThemeData } from "src/containers/home-page/theme-selector/models";
import { useTheme } from "src/context/theme/theme-provider";

import darkSideImg from "./images/dark-side.jpg";
import lightSideImg from "./images/light-side.jpg";
import neutralSideImg from "./images/neutral-side.jpeg";
import styles from "./styles.module.scss";

const themesData: ThemeData[] = [
  {
    key: "dark",
    img: darkSideImg,
    text: "Dark Side",
    classes: styles.theme_dark,
  },
  {
    key: "light",
    img: lightSideImg,
    text: "Light Side",
    classes: styles.theme_light,
  },
  {
    key: "neutral",
    img: neutralSideImg,
    text: "Han Solo Style",
    classes: styles.theme_neutral,
  },
];

const ThemeSelector: React.FC = () => {
  const { updateTheme } = useTheme();

  return (
    <div className={styles.container}>
      {themesData.map((theme) => (
        <button
          className={cn(styles["theme-container"], theme.classes)}
          onClick={() => updateTheme(theme.key)}
          key={theme.key}
        >
          <div className={styles.theme__title}>{theme.text}</div>
          <img src={theme.img} className={styles.theme__img} alt={theme.text} />
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
