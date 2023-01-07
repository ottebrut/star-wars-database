import { combineReducers } from "redux";

import {
  favoritesReducer,
  FavoritesState,
} from "src/store/reducers/favorites-reducer";

export interface ReducersStore {
  favoritesReducer: FavoritesState;
}

export default combineReducers({
  favoritesReducer,
});
