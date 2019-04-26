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
  EDIT_ITEM,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DELETE_ALL_ITEMS,
  DELETE_ALL_ITEMS_SUCCESS,
  DELETE_ALL_ITEMS_FAILURE
} from "./types";
import {
  addItem,
  toggleItem,
  getAllItems,
  getItemInfo,
  updateItemInfo,
  deleteItem,
  deleteAllItems
} from "../api/items";

export const fetchAllItems = () => {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_ALL_ITEMS_DATA
    });

    try {
      // Call the API
      const { data } = await getAllItems();
      // Update payload in reducer on success
      dispatch({
        type: FETCH_ALL_ITEMS_SUCCESS,
        payload: data
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_ALL_ITEMS_FAILURE,
        error: err
      });
    }
  };
};

export const addItemToList = item => {
  return async dispatch => {
    dispatch({
      type: ADD_ITEM_TO_CATEGORY
    });

    try {
      const { data } = await addItem(item);

      dispatch({
        type: ADD_ITEM_TO_CATEGORY_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: ADD_ITEM_TO_CATEGORY_FAILURE,
        error: err
      });
    }
  };
};

export const toggleItemComplete = item => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_ITEM_COMPLETE
    });

    try {
      const { data } = await toggleItem(item);

      dispatch({
        type: TOGGLE_ITEM_COMPLETE_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TOGGLE_ITEM_COMPLETE_FAILURE,
        error: err
      });
    }
  };
};

export const fetchItemInfo = item => {
  return async dispatch => {
    dispatch({
      type: FETCH_ITEM
    });

    try {
      const { data } = await getItemInfo(item);

      dispatch({
        type: FETCH_ITEM_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: FETCH_ITEM_FAILURE,
        error: err
      });
    }
  };
};

export const editItemInfo = (id, item) => {
  return async dispatch => {
    dispatch({
      type: EDIT_ITEM
    });

    try {
      await updateItemInfo(id, item);

      dispatch({
        type: EDIT_ITEM_SUCCESS
      });
    } catch (err) {
      dispatch({
        type: EDIT_ITEM_FAILURE,
        error: err
      });
    }
  };
};

export const deleteItemFromList = id => {
  return async dispatch => {
    dispatch({
      type: DELETE_ITEM
    });

    try {
      await deleteItem(id);

      dispatch({
        type: DELETE_ITEM_SUCCESS
      });
    } catch (err) {
      dispatch({
        type: DELETE_ITEM_FAILURE,
        error: err
      });
    }
  };
};

export const deleteAllItemsFromList = () => {
  return async dispatch => {
    dispatch({
      type: DELETE_ALL_ITEMS
    });

    try {
      await deleteAllItems();

      dispatch({
        type: DELETE_ALL_ITEMS_SUCCESS
      });
    } catch (err) {
      dispatch({
        type: DELETE_ALL_ITEMS_FAILURE,
        error: err
      });
    }
  };
};
