import axios from "axios";

export const getCategories = () => {
  return axios.get("http://localhost:3000/categories/");
};

export const getCategoryItems = id => {
  return axios.get(`http://localhost:3000/categories/${id}/items`);
};
