import React from "react";

import loader from "./images/loader.svg";
import "src/components/ui/ui-vars.scss";
import styles from "./styles.module.scss";

const UiLoader: React.FC = () => {
  return <img src={loader} className={styles.loader} alt="loader" />;
};

export default UiLoader;
