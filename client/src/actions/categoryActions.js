import {
  FETCH_CATEGORIES_DATA,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "./types";
import { getCategories } from "../api/categories";

export const fetchCategoryNames = () => {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_CATEGORIES_DATA
    });
    try {
      // Call the API
      const { data } = await getCategories();

      // Update payload in reducer on success
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: data
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        error: err
      });
    }
  };
};
