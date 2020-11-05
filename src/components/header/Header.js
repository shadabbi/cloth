import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";

import classes from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cartIcon/CartIcon";
import CartDrop from "../cartDropDown/CartDropDown";

const header = ({ cartDropdownVisible, currentUser }) => {
  return (
    <div className={classes.header}>
      <Link to="/" className={classes["logo-container"]}>
        <Logo className={classes.logo} />
      </Link>
      <div className={classes.options}>
        <Link to="/Shop" className={classes.option}>
          SHOP
        </Link>
        <Link to="/contact" className={classes.option}>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={classes.option}
            onClick={() => auth.signOut()}
          >
            SIGN OUT{" "}
            <h3 style={{ marginLeft: "1rem" }}>{currentUser.displayName}</h3>
          </div>
        ) : (
          <Link className={classes.option} to="/sign">
            SING IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartDropdownVisible ? <CartDrop /> : null}
    </div>
  );
};

const setStateToProps = (state) => {

  return {
    currentUser: state.user.currentUser,
    cartDropdownVisible: state.cartDropdownVisiblety.isVisible,
  };
};

export default connect(setStateToProps)(header);
