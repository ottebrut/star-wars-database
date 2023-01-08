import { combineReducers } from "redux";

import {
  favoritesReducer,
  IFavoritesState,
} from "src/store/reducers/favorites-reducer";

export interface ReducersStore {
  favoritesReducer: IFavoritesState;
}

export default combineReducers({
  favoritesReducer,
});
