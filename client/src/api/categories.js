import axios from "axios";

export const getCategories = () => {
  return axios.get("http://localhost:3001/categories/");
};

export const getCategoryItems = id => {
  return axios.get(`http://localhost:3001/categories/${id}/items`);
};

export const addItem = item => {
  return axios.post(
    `http://localhost:3001/categories/${item.category}/items`,
    item
  );
};
