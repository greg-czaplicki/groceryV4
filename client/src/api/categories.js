import axios from "axios";

export const getCategories = () => {
  return axios.get("/api/categories/");
};

export const getCategoryItems = id => {
  return axios.get(`/api/categories/${id}/items`);
};
