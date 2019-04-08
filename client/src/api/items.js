import axios from "axios";

export const deleteItem = async id => {
  return await axios.delete(`http://localhost:3000/items/${id}/`);
};
