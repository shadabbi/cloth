import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import shopReducer from "./shop/reducer";
import cartDropdownReducer from "./cartDropdown/cartDropdownReducer";

export default combineReducers({
  user: userReducer,
  collections: shopReducer,
  cartDropdownVisiblety: cartDropdownReducer,
});
