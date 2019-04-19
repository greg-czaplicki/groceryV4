import axios from "axios";

export const addItem = item => {
  return axios.post("/api/items/", item);
};

export const toggleItem = item => {
  return axios.patch(`/api/items/${item._id}`, {
    isComplete: !item.isComplete
  });
};

export const getAllItems = () => {
  return axios.get("/api/items/");
};

export const getItemInfo = id => {
  return axios.get(`/api/items/${id}`);
};

export const updateItemInfo = (id, item) => {
  return axios.patch(`/api/items/${id}`, item);
};

export const deleteItem = id => {
  return axios.delete(`/api/items/${id}`);
};
