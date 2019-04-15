import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY_ITEMS,
  ADD_ITEM_TO_CATEGORY
} from "./types";
import { getCategories, getCategoryItems, addItem } from "../api/categories";

export const fetchCategoryNames = () => async dispatch => {
  const { data } = await getCategories();

  dispatch({
    type: FETCH_CATEGORIES,
    payload: data
  });
};

export const fetchCategoryItems = categoryId => async dispatch => {
  const { data } = await getCategoryItems(categoryId);

  const category = data.name;

  const result = data.items.reduce((items, item) => {
    items[category] = items[category] ? [...items[category], item] : [item];

    return items;
  }, {});

  dispatch({
    type: FETCH_CATEGORY_ITEMS,
    payload: result
  });
};

export const addItemToCategory = item => async dispatch => {
  const { categoryName } = item;
  const { data } = await addItem(item);

  dispatch({
    type: ADD_ITEM_TO_CATEGORY,
    payload: { item: data, categoryName }
  });
};
