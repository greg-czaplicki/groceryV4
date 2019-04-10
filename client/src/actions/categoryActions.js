import { GET_CATEGORIES } from "./types";
import { getCategories } from "../api/categories";

export const getCategories = () => async dispatch => {
  const response = await getCategories();

  dispatch({
    type: GET_CATEGORIES,
    payload: response.data
  });
};
