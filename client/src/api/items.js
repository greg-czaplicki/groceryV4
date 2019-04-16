import axios from "axios";

export const addItem = item => {
  return axios.post("http://localhost:3001/items/", item);
};
