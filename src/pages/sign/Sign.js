import React, { Component } from "react";
import classes from "./Sing.module.scss";
import SingIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

class Sign extends Component {
  render() {
    return (
      <div className={classes.sign}>
        <SingIn />
        <SignUp />
      </div>
    );
  }
}

export default Sign;
