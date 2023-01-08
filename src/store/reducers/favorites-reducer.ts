import { ICharacter } from "src/models/character";
import favoritesActionTypes from "src/store/constants/favorites-action-types";
import { getLocalStorageData } from "src/utils/local-storage";

export interface IFavoritesState {
  favoriteCharacters: ICharacter[];
}

export function isIFavoritesState(state: unknown): state is IFavoritesState {
  return typeof state === "object" && !!state && "favoriteCharacters" in state;
}

const initialState: IFavoritesState = getLocalStorageData(
  "favoritesReducer",
  isIFavoritesState
) || {
  favoriteCharacters: [],
};

interface IFavoritesAction {
  type: keyof typeof favoritesActionTypes;
  payload: unknown;
}

export const favoritesReducer = (
  state = initialState,
  action?: IFavoritesAction
): IFavoritesState => {
  switch (action?.type) {
    case favoritesActionTypes.ADD_CHARACTER_TO_FAVORITE: {
      const character = action.payload as ICharacter;
      const updatedCharacters = state.favoriteCharacters.filter(
        (fC) => fC.id !== character.id
      );
      updatedCharacters.unshift(character);
      return {
        ...state,
        favoriteCharacters: updatedCharacters,
      };
    }
    case favoritesActionTypes.REMOVE_CHARACTER_FROM_FAVORITE: {
      const characterId = action.payload as string;
      const updatedCharacters = state.favoriteCharacters.filter(
        (fC) => fC.id !== characterId
      );
      return {
        ...state,
        favoriteCharacters: updatedCharacters,
      };
    }
    default:
      return state;
  }
};
