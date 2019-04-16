import {
  FETCH_CATEGORIES_DATA,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  RESET_CATEGORIES_DATA
} from "../actions/types";

const intialState = {
  payload: [],
  isLoading: false,
  error: {}
};

const categoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_DATA:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: false
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case RESET_CATEGORIES_DATA:
      return { ...state, ...this.initialState };
    default:
      return state;
  }
};

export default categoriesReducer;
