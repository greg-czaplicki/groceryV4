import { getCategories, getCategoryItems } from "../api/categories";

export const fetchCategories = () => async dispatch => {
  const response = await getCategories();

  dispatch({
    type: "FETCH_CATEGORIES",
    payload: response.data
  });
};

export const fetchItemsInCategory = id => async dispatch => {
  const response = await getCategoryItems(id);

  dispatch({
    type: "FETCH_ITEMS_IN_CATEGORY",
    payload: response.data
  });
};
