import { combineReducers } from "@reduxjs/toolkit";

import { favoritesSlice } from "src/store/reducers/favorites-slice";

export default combineReducers({
  favorites: favoritesSlice.reducer,
});
