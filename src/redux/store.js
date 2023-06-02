import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import commonRecipesSlice from "../../src/redux/commonRecipes/commonRecipesSlice";
import userRecipesSlice from "../../src/redux/userRecipes/userRecipesSlice";

const commonRecipesPersistConfig = {
  key: "commonRecipes",
  storage,
  whitelist: ["categoryList"],
};

const userRecipesPersistConfig = {
  key: "userRecipes",
  storage,
  whitelist: ["myRecipes", "favorite"],
};

const persistedCommonRecipesReducer = persistReducer(
  commonRecipesPersistConfig,
  commonRecipesSlice
);

const persistedUserRecipesReduser = persistReducer(
  userRecipesPersistConfig,
  userRecipesSlice
);

export const store = configureStore({
  reducer: {
    outerRecipes: persistedCommonRecipesReducer,
    userRecipes: persistedUserRecipesReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
