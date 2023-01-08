import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ICharacter } from "src/models/character";
import {
  addCharacterToFavorites,
  removeCharacterFromFavorites,
} from "src/store/actions";
import { ReducersStore } from "src/store/reducers";

import favoriteIcon from "./images/favorite.svg";
import favoriteFillIcon from "./images/favorite-fill.svg";
import styles from "./styles.module.scss";

interface CharacterPhotoProps {
  character: ICharacter;
}

const CharacterPhoto: React.FC<CharacterPhotoProps> = ({ character }) => {
  const store = useSelector<ReducersStore, ReducersStore["favoritesReducer"]>(
    (state) => state.favoritesReducer
  );
  const isFavorite = store.favoriteCharacters.some(
    (fC) => fC.id === character?.id
  );
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeCharacterFromFavorites(character.id));
    } else {
      dispatch(addCharacterToFavorites(character));
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={character.img}
        className={styles.photo}
        alt="character portrait"
      />
      <button className={styles.favorite} onClick={toggleFavorite}>
        <img
          src={isFavorite ? favoriteFillIcon : favoriteIcon}
          alt="toggle favorite"
        />
      </button>
    </div>
  );
};

export default CharacterPhoto;
