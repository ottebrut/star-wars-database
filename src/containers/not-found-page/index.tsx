import React from "react";
import { useLocation } from "react-router";

import notFoundImage from "./images/not-found.png";
import styles from "./styles.module.scss";

const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <img src={notFoundImage} className={styles.img} alt="not found" />;
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
