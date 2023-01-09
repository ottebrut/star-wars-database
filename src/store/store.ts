import { configureStore } from "@reduxjs/toolkit";

import { setLocalStorageData } from "src/utils/local-storage";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  setLocalStorageData("favoritesReducer", store.getState().favorites);
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
