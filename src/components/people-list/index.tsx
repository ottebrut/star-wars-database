import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { IPeople } from "src/models/people";

import styles from "src/components/people-list/styles.module.scss";

interface PeopleListProps {
  people: IPeople | null;
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  if (people) {
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
              <p>{person.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return <div />;
};

export default PeopleList;
