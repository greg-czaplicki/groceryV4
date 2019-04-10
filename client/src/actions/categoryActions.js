import { FETCH_CATEGORIES } from "./types";
import { getCategories } from "../api/categories";
import { addItem } from "../api/items";

export const fetchCategoryNames = () => async dispatch => {
  const response = await getCategories();

  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data
  });
};

export const addNewItem = item => async dispatch => {
  const response = await addItem(item);

  dispatch({
    type: "ADD_ITEM",
    payload: response.data
  });
};
