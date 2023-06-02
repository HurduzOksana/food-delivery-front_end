import { createSlice } from "@reduxjs/toolkit";
import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  removeRecipeFromFavorite,
} from "../../redux/userRecipes/userRecipesOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const initialState = {
  myRecipes: [],
  shoppingList: [],
  favorite: [],
  totalFavorite: 0,
  totalMyRecipes: 0,
  isLoading: false,
  isLoadBtn: false,
  error: null,
  recipeById: [],
};

const userRecipesSlice = createSlice({
  name: "userRecipes",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addRecipeToFavorite.pending, (state) => {
        state.isLoadBtn = true;
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        state.favorite.push(payload);
      })
      .addCase(addRecipeToFavorite.rejected, rejected)
      .addCase(removeRecipeFromFavorite.pending, (state) => {
        state.isLoadBtn = true;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        const index = state.favorite.findIndex((item) => item._id === payload);
        state.favorite.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(removeRecipeFromFavorite.rejected, rejected)
      .addCase(getFavoriteRecipes.pending, (state) => {
        state.isLoadBtn = true;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        state.error = null;
        state.favorite = payload.results;
        state.totalFavorite = payload.totalHits;
      })
      .addCase(getFavoriteRecipes.rejected, rejected)

      .addMatcher(
        (action) => action.type.endsWith(`/rejected`),
        (_state, { payload }) => {
          if (payload.code === 401) {
            return initialState;
          }
        }
      ),
});

export default userRecipesSlice.reducer;
