import { FETCH_CATEGORIES } from "../actions/types";

const intialState = {
  categories: [],
  isFetching: false,
  error: undefined
};

const categoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
