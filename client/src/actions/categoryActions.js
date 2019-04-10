import { FETCH_CATEGORIES } from "./types";
import { getCategories } from "../api/categories";

export const getCategoryNames = () => async dispatch => {
  const response = await getCategories();

  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data
  });
};
