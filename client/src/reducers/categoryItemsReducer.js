const categoryItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ITEMS_IN_CATEGORY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoryItemsReducer;
