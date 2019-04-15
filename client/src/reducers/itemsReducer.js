import { FETCH_CATEGORY_ITEMS, ADD_ITEM_TO_CATEGORY } from "../actions/types";

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
    case ADD_ITEM_TO_CATEGORY:
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          [action.payload.categoryName]: [
            ...(state.items[action.payload.categoryName] || []),
            action.payload.item
          ]
        }
      };
    default:
      return state;
  }
};

export default itemsReducer;
