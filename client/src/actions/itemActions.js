import {
  FETCH_CATEGORY_ITEMS_DATA,
  FETCH_CATEGORY_ITEMS_SUCCESS,
  FETCH_CATEGORY_ITEMS_FAILURE,
  ADD_ITEM_TO_CATEGORY,
  ADD_ITEM_TO_CATEGORY_SUCCESS,
  ADD_ITEM_TO_CATEGORY_FAILURE
} from "./types";

import { getCategoryItems } from "../api/categories";
import { addItem } from "../api/items";

export const fetchCategoryItems = categoryId => {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_CATEGORY_ITEMS_DATA
    });
    try {
      // Call the API
      const { data } = await getCategoryItems(categoryId);
      // Update payload in reducer on success

      dispatch({
        type: FETCH_CATEGORY_ITEMS_SUCCESS,
        payload: data
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_CATEGORY_ITEMS_FAILURE,
        error: err
      });
    }
  };
};

export const addItemToList = item => {
  return async dispatch => {
    dispatch({
      type: ADD_ITEM_TO_CATEGORY
    });
    try {
      const { data } = await addItem(item);

      dispatch({
        type: ADD_ITEM_TO_CATEGORY_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ADD_ITEM_TO_CATEGORY_FAILURE,
        error: err
      });
    }
  };
};
