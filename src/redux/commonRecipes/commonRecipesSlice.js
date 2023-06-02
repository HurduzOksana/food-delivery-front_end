import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoryList,
  getLimitedRecipesByCategory,
  getAllRecipesByCategory,
} from "../../redux/commonRecipes/commonOperations";

const pending = (state) => {
  state.isCategoryFetching = true;
};
const rejected = (state) => {
  state.isCategoryFetching = false;
};

const initialState = {
  isCategoryFetching: false,
  categoryList: [],
  allRecipesByCategory: [],
  recipesByQuery: {
    results: [],
    totalHits: 0,
  },
  isError: false,
};

export const commmonRecipesSlice = createSlice({
  name: "commonRecipes",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
      })
      .addCase(getLimitedRecipesByCategory.fulfilled, (state, { payload }) => {
        state.limitedRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
        state.allRecipesByCategory = payload;
        state.isCategoryFetching = false;
      })

      .addCase(getCategoryList.pending, pending)
      .addCase(getLimitedRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.pending, pending)

      .addCase(getCategoryList.rejected, rejected)
      .addCase(getLimitedRecipesByCategory.rejected, rejected)
      .addCase(getAllRecipesByCategory.rejected, rejected)

      .addMatcher(
        (action) => action.type.endsWith(`/rejected`),
        (_state, { payload }) => {
          if (payload.code === 401) {
            return initialState;
          }
        }
      ),
});

export default commmonRecipesSlice.reducer;
