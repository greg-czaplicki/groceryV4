import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  categories: categoriesReducer,
  item: itemReducer
});
