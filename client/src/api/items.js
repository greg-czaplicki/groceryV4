import axios from "axios";

export const addItem = item => {
  return axios.post("/items/", item);
};

export const toggleItem = item => {
  return axios.patch(`/items/${item._id}`, {
    isComplete: !item.isComplete
  });
};

export const getAllItems = () => {
  return axios.get("/items/");
};

export const getItemInfo = id => {
  return axios.get(`/items/${id}`);
};

export const updateItemInfo = (id, item) => {
  return axios.patch(`/items/${id}`, item);
};

export const deleteItem = id => {
  return axios.delete(`/items/${id}`);
};
