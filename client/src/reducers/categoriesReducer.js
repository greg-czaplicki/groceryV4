import { GET_CATEGORIES } from "../actions/types";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
