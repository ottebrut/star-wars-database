import React from "react";
import { Link } from "react-router-dom";

import UiButton from "src/components/ui/ui-button";

import styles from "./styles.module.scss";

interface CharactersNavigationProps {
  page: number;
  maxPage: number;
}

const CharactersNavigation: React.FC<CharactersNavigationProps> = ({
  page,
  maxPage,
}) => {
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${page - 1}`} className={styles.link}>
        <UiButton disabled={page <= 1}>Previous</UiButton>
      </Link>
      <Link to={`/people/?page=${page + 1}`} className={styles.link}>
        <UiButton disabled={page >= maxPage}>Next</UiButton>
      </Link>
    </div>
  );
};

export default CharactersNavigation;
