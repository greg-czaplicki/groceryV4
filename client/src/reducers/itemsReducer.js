import {
  FETCH_CATEGORY_ITEMS_DATA,
  FETCH_CATEGORY_ITEMS_SUCCESS,
  FETCH_CATEGORY_ITEMS_FAILURE,
  RESET_CATEGORY_ITEMS_DATA,
  ADD_ITEM_TO_CATEGORY,
  ADD_ITEM_TO_CATEGORY_SUCCESS,
  ADD_ITEM_TO_CATEGORY_FAILURE
} from "../actions/types";

import produce from "immer";

const intialState = {
  payload: [],
  isLoading: false,
  error: {}
};

const itemsReducer = (state = intialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_CATEGORY_ITEMS_DATA:
        return {
          ...state,
          isLoading: true
        };

      case FETCH_CATEGORY_ITEMS_SUCCESS:
        return {
          ...state,
          payload: [...state.payload, action.payload],
          isLoading: false
        };

      case FETCH_CATEGORY_ITEMS_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        };
      case ADD_ITEM_TO_CATEGORY:
        return {
          ...state,
          isLoading: true
        };

      case ADD_ITEM_TO_CATEGORY_SUCCESS:
        const result = state.payload.find(
          category => category._id === action.payload.category
        );
        const index = state.payload.indexOf(result);

        draft.payload[index].items.push(action.payload);
        draft.isLoading = false;
        break;

      case ADD_ITEM_TO_CATEGORY_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        };
      case RESET_CATEGORY_ITEMS_DATA:
        return { ...state, ...this.initialState };
      default:
        return state;
    }
  });

export default itemsReducer;
