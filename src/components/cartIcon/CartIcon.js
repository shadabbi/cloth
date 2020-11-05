import React from "react";
import { connect } from "react-redux";

import classes from "./CartIcon.module.scss";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import { setCartDropdownState } from "../../redux/cartDropdown/cartDropdownAction";

const cartIcon = ({
  cartDropdownVisible,
  setCartDropdownState,
  itemsCount,
}) => {
  return (
    <div
      className={classes["cart-icon"]}
      onClick={() => setCartDropdownState(!cartDropdownVisible)}
    >
      <CartIcon className={classes["shopping-icon"]}></CartIcon>
      <span className={classes["item-count"]}>
        {itemsCount.reduce((pre, next) => pre + next.quantity, 0)}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCartDropdownState: (isVisible) =>
    dispatch(setCartDropdownState(isVisible)),
});

const mapStateToProps = (state) => {
  return {
    cartDropdownVisible: state.cartDropdownVisiblety.isVisible,
    itemsCount: state.cartDropdownVisiblety.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
