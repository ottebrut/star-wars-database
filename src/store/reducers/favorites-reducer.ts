import { IPerson } from "src/models/person";
import {
  ADD_PERSON_TO_FAVORITE,
  favoritesActionTypes,
  REMOVE_PERSON_FROM_FAVORITE,
} from "src/store/constants/favorites-action-types";
import { getLocalStorageData } from "src/utils/local-storage";

export interface FavoritesState {
  favoritePersons: IPerson[];
}

const initialState: FavoritesState = getLocalStorageData(
  "favoritesReducer"
) || {
  favoritePersons: [],
};

interface FavoritesAction {
  type: typeof favoritesActionTypes[number];
  payload: unknown;
}

export const favoritesReducer = (
  state = initialState,
  action?: FavoritesAction
) => {
  switch (action?.type) {
    case ADD_PERSON_TO_FAVORITE: {
      const person = action.payload as IPerson;
      const updatedPersons = state.favoritePersons.filter(
        (fP) => fP.id !== person.id
      );
      updatedPersons.unshift(person);
      return {
        ...state,
        favoritePersons: updatedPersons,
      };
    }
    case REMOVE_PERSON_FROM_FAVORITE: {
      const personId = action.payload as string;
      const updatedPersons = state.favoritePersons.filter(
        (fP) => fP.id !== personId
      );
      return {
        ...state,
        favoritePersons: updatedPersons,
      };
    }
    default:
      return state;
  }
};
