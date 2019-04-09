import { combineReducers } from "redux";

import categoriesReducer from "../reducers/categoriesReducer";
import categoryItemsReducer from "./categoryItemsReducer";

export default combineReducers({
  categories: categoriesReducer,
  itemsInCategory: categoryItemsReducer
});
