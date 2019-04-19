import axios from "axios";

export const getCategories = () => {
  return axios.get("/categories/");
};

export const getCategoryItems = id => {
  return axios.get(`/categories/${id}/items`);
};
