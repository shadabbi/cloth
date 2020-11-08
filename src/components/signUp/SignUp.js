import React, { useState } from "react";

import classes from "./SignUp.module.scss";
import FormInput from "../../components/formInput/FormInput";
import Btn from "../../components/customBtn/CustomBtn";

import { auth, createUserProfile } from "../../firebase/firebase.util";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passwords are not same");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className={classes["sing-up"]}>
      <h2 className={classes.title}>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className={classes["sing-up-form"]}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
          label="confirmPassword"
          required
        />

        <Btn type="submit" onClick={submitHandler}>
          Sign Up
        </Btn>
      </form>
    </div>
  );
};

export default SignUp;
