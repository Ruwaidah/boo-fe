import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "../features/pets/petsSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    favorites: favoritesReducer,
  },
});