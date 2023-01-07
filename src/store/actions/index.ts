import { IPerson } from "src/models/person";
import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "src/store/constants/favorites-action-types";

export const addPersonToFavorites = (person: IPerson) => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person,
});

export const removePersonFromFavorites = (personId: string) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId,
});
