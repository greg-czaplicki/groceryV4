import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import itemsReducer from "./itemsReducer";

export default combineReducers({
  categories: categoriesReducer,
  items: itemsReducer
});
