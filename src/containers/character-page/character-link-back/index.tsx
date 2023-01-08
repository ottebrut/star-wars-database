import React from "react";
import { useNavigate } from "react-router-dom";

import arrowLeft from "../images/arrow-left.svg";
import styles from "./styles.module.scss";

const CharacterLinkBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className={styles["link-container"]} onClick={handleGoBack}>
      <img src={arrowLeft} className={styles.image} alt="back arrow" />
      <span>Go back</span>
    </button>
  );
};

export default CharacterLinkBack;
