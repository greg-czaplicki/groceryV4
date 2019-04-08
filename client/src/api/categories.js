import axios from "axios";

export const getCategories = async () => {
  return await axios.get("http://localhost:3000/categories/");
};

export const getCategoryItems = async id => {
  return await axios.get(`http://localhost:3000/categories/${id}/items`);
};
