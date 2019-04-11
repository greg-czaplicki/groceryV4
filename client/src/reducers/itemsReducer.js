import { FETCH_CATEGORY_ITEMS } from "../actions/types";

const intialState = {
  items: {},
  isFetching: false,
  error: undefined
};

const itemsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_ITEMS:
      return {
        ...state,
        isFetching: false,
        items: { ...state.items, ...action.payload }
      };
    default:
      return state;
  }
};

export default itemsReducer;
