import {
  FETCH_ALL_ITEMS_DATA,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_ALL_ITEMS_FAILURE,
  ADD_ITEM_TO_CATEGORY,
  ADD_ITEM_TO_CATEGORY_SUCCESS,
  ADD_ITEM_TO_CATEGORY_FAILURE,
  TOGGLE_ITEM_COMPLETE,
  TOGGLE_ITEM_COMPLETE_SUCCESS,
  TOGGLE_ITEM_COMPLETE_FAILURE,
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  DELETE_ALL_ITEMS,
  DELETE_ALL_ITEMS_FAILURE,
  DELETE_ALL_ITEMS_SUCCESS
} from "../actions/types";

import produce from "immer";

const intialState = {
  payload: [],
  updateItem: {},
  error: {}
};

const itemsReducer = (state = intialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ALL_ITEMS_DATA:
        return {
          ...state
        };

      case FETCH_ALL_ITEMS_SUCCESS:
        return {
          ...state,
          payload: action.payload
        };

      case FETCH_ALL_ITEMS_FAILURE:
        return {
          ...state,
          error: action.error
        };
      case ADD_ITEM_TO_CATEGORY:
        return {
          ...state
        };

      case ADD_ITEM_TO_CATEGORY_SUCCESS:
        return {
          ...state,
          payload: [...state.payload, action.payload]
        };

      case ADD_ITEM_TO_CATEGORY_FAILURE:
        return {
          ...state,
          error: action.error
        };

      case TOGGLE_ITEM_COMPLETE:
        return {
          ...state
        };

      case TOGGLE_ITEM_COMPLETE_SUCCESS:
        const itemIndex = state.payload.findIndex(
          item => item._id === action.payload._id
        );

        draft.payload[itemIndex].isComplete = !draft.payload[itemIndex]
          .isComplete;
        break;

      case TOGGLE_ITEM_COMPLETE_FAILURE:
        return {
          ...state,
          error: action.error
        };

      case FETCH_ITEM:
        return {
          ...state
        };

      case FETCH_ITEM_SUCCESS:
        return {
          ...state,
          updateItem: action.payload
        };

      case FETCH_ITEM_FAILURE:
        return {
          ...state,
          error: action.error
        };

      case DELETE_ALL_ITEMS:
        return {
          ...state
        };

      case DELETE_ALL_ITEMS_SUCCESS:
        return {
          ...state,
          payload: []
        };

      case DELETE_ALL_ITEMS_FAILURE:
        return {
          ...state,
          error: action.error
        };

      default:
        return state;
    }
  });

export default itemsReducer;
