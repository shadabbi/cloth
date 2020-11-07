const initState = {
  collections: [],
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_SHOP":
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
