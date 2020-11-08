import React, { useState } from "react";

import classes from "./SingIn.module.scss";
import FormInput from "../formInput/FormInput";
import Btn from "../customBtn/CustomBtn";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={classes["sing-in"]}>
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          label="Email"
          changeHandler={changeHandler}
          type="email"
          value={userCredentials.email}
          required
        ></FormInput>
        <FormInput
          name="password"
          label="Password"
          changeHandler={changeHandler}
          type="password"
          value={userCredentials.password}
          required
        ></FormInput>
        <div className={classes.btns}>
          <Btn type="submit">Sign in</Btn>
          <Btn isGoogleSingIn onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Btn>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
