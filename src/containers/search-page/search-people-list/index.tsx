import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { IPeople } from "src/models/people";

import styles from "./styles.module.scss";

interface SearchPeopleListProps {
  people: IPeople | null;
}

const SearchPeopleList: React.FC<SearchPeopleListProps> = ({ people }) => {
  if (people?.length) {
    return (
      <ul className={styles.list}>
        {people.map((person) => (
          <li key={person.id} className={cn(styles.list__item, styles.person)}>
            <Link to={`/people/${person.id}`}>
              <img
                src={person.img}
                className={styles.person__photo}
                alt="character portrait"
              />
              <p className={styles.person__name}>{person.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return <h2 className={styles.comment}>No results</h2>;
};

export default SearchPeopleList;
