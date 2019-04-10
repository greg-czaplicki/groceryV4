import { ADD_ITEM } from "../actions/types";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default itemReducer;
