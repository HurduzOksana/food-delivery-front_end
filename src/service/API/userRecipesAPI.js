import axios from "axios";

axios.defaults.baseURL =
  "https://food-delivery-back-end-hurduz.onrender.com/api";

export const addRecipeTofavoriteAPI = (id) => {
  return axios.post(`/favorites/${id}`).then(({ data }) => {
    return data;
  });
};

export const getFavoriteRecipesAPI = (page) => {
  if (page === "all") {
    return axios.get(`/favorites?all=true`).then(({ data }) => {
      return data;
    });
  }
  return axios.get(`/favorites?page=${page}`).then(({ data }) => {
    return data;
  });
};

export const removeRecipeFromFavoriteAPI = (id) => {
  return axios.delete(`/favorites/${id}`).then(({ data }) => {
    return data._id;
  });
};
