import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addRecipeTofavoriteAPI,
  removeRecipeFromFavoriteAPI,
  getFavoriteRecipesAPI,
} from "../../service/API/userRecipesAPI";

export const addRecipeToFavorite = createAsyncThunk(
  "userRecipes/addToFavorite",
  async (id, { rejectWithValue, dispatch, getState }) => {
    try {
      const data = await addRecipeTofavoriteAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  "userRecipes/removeFromFavorite",
  async (id, { rejectWithValue, dispatch, getState }) => {
    try {
      if (id.page) {
        const data = await removeRecipeFromFavoriteAPI(id.id);
        return data;
      }
      const data = await removeRecipeFromFavoriteAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  "userRecipes/getFavoriteRecipes",
  async (page, { rejectWithValue, getState }) => {
    try {
      if (page === "all") {
        const data = await getFavoriteRecipesAPI("all");
        return data;
      }
      const data = await getFavoriteRecipesAPI(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
