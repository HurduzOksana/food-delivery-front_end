export const getFullCategoryList = (state) => state.outerRecipes.categoryList;

export const getError = (state) => state.outerRecipes.isError;

export const getLimitedRecipes = (state) =>
  state.outerRecipes.limitedRecipesByCategory;
