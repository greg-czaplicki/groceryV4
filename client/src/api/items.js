import axios from "axios";

export const getAllItems = () => {
  return axios.get("http://localhost:3001/items");
};
