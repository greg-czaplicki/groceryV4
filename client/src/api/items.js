import axios from "axios";

export const addItem = item => {
  return axios.post("http://localhost:3001/items/", item);
};

export const toggleItem = item => {
  return axios.patch(`http://localhost:3001/items/${item._id}`, {
    isComplete: !item.isComplete
  });
};
