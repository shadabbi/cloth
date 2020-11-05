import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartDropdownReducer from "./cartDropdown/cartDropdownReducer";

export default combineReducers({
  user: userReducer,
  cartDropdownVisiblety: cartDropdownReducer,
});
