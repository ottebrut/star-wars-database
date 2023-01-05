import React from "react";
import cn from "classnames";

import { People } from "src/containers/people-page/models";

import styles from "./styles.module.scss";

interface PeopleListProps {
  people: People | null;
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  if (people) {
    return (
      <ul className={styles.list}>
        {people.map((person) => (
          <li key={person.id} className={cn(styles.list__item, styles.person)}>
            <a href="#">
              <img
                src={person.img}
                className={styles.person__photo}
                alt="character portrait"
              />{" "}
              <p>{person.name}</p>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return <>no data</>;
};

export default PeopleList;
