import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICharacter } from "src/models/character";
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

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCharacterToFavorites: (state, action: PayloadAction<ICharacter>) => {
      const character = action.payload;
      const updatedCharacters = state.favoriteCharacters.filter(
        (fC) => fC.id !== character.id
      );
      updatedCharacters.unshift(character);
      return {
        ...state,
        favoriteCharacters: updatedCharacters,
      };
    },
    removeCharacterFromFavorites: (state, action: PayloadAction<string>) => {
      const characterId = action.payload;
      const updatedCharacters = state.favoriteCharacters.filter(
        (fC) => fC.id !== characterId
      );
      return {
        ...state,
        favoriteCharacters: updatedCharacters,
      };
    },
  },
});

export const { addCharacterToFavorites, removeCharacterFromFavorites } =
  favoritesSlice.actions;
