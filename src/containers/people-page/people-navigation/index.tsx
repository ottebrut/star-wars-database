import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface PeopleNavigationProps {
  page: number;
  maxPage: number;
}

const PeopleNavigation: React.FC<PeopleNavigationProps> = ({
  page,
  maxPage,
}) => {
  return (
    <div>
      <Link to={`/people/?page=${page - 1}`} className={styles.link}>
        <button className={styles.button} disabled={page <= 1}>
          Previous page
        </button>
      </Link>
      <Link to={`/people/?page=${page + 1}`} className={styles.link}>
        <button className={styles.button} disabled={page >= maxPage}>
          Next page
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
