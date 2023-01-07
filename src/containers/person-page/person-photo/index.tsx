import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IPerson } from "src/models/person";
import {
  addPersonToFavorites,
  removePersonFromFavorites,
} from "src/store/actions";
import { ReducersStore } from "src/store/reducers";

import favoriteIcon from "./images/favorite.svg";
import favoriteFillIcon from "./images/favorite-fill.svg";
import styles from "./styles.module.scss";

interface PersonPhotoProps {
  person: IPerson;
}

const PersonPhoto: React.FC<PersonPhotoProps> = ({ person }) => {
  const store = useSelector<ReducersStore, ReducersStore["favoritesReducer"]>(
    (state) => state.favoritesReducer
  );
  const isFavorite = store.favoritePersons.some((fP) => fP.id === person?.id);
  const dispatch = useDispatch();

  const togglePersonFavorite = () => {
    if (isFavorite) {
      dispatch(removePersonFromFavorites(person.id));
    } else {
      dispatch(addPersonToFavorites(person));
    }
  };

  return (
    <div className={styles.container}>
      <img src={person.img} className={styles.photo} alt="character portrait" />
      <button className={styles.favorite} onClick={togglePersonFavorite}>
        <img
          src={isFavorite ? favoriteFillIcon : favoriteIcon}
          alt="toggle favorite"
        />
      </button>
    </div>
  );
};

export default PersonPhoto;
