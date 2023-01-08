import { ICharacter } from "src/models/character";
import favoritesActionTypes from "src/store/constants/favorites-action-types";

export const addCharacterToFavorites = (Character: ICharacter) => ({
  type: favoritesActionTypes.ADD_CHARACTER_TO_FAVORITE,
  payload: Character,
});

export const removeCharacterFromFavorites = (CharacterId: string) => ({
  type: favoritesActionTypes.REMOVE_CHARACTER_FROM_FAVORITE,
  payload: CharacterId,
});
