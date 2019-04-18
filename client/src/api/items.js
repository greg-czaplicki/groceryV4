import axios from "axios";

export const addItem = item => {
  return axios.post("http://localhost:3001/items/", item);
};

export const toggleItem = item => {
  return axios.patch(`http://localhost:3001/items/${item._id}`, {
    isComplete: !item.isComplete
  });
};

export const getAllItems = () => {
  return axios.get("http://localhost:3001/items/");
};

export const getItemInfo = id => {
  return axios.get(`http://localhost:3001/items/${id}`);
};

export const updateItemInfo = (id, item) => {
  return axios.patch(`http://localhost:3001/items/${id}`, item);
};

export const deleteItem = id => {
  return axios.delete(`http://localhost:3001/items/${id}`);
};
