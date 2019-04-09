import axios from "axios";

export const getAllItems = () => {
  return axios.get("http://localhost:3000/items");
};

export const deleteItem = id => {
  return axios.delete(`http://localhost:3000/items/${id}/`);
};

export const addItem = item => {
  return axios.post(`http://localhost:3000/items/`, item);
};
