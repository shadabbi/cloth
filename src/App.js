import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Sign from "./pages/sign/Sign";
import Header from "./components/header/Header";
import Checkout from "./pages/checkout/Checkout";
import Category from "./pages/category/category";

import { auth, createUserProfile } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/User/userAction";

const App = (props) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        props.setCurrentUser(userAuth);
      }
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route
          path="/sign"
          render={() => (props.currentUser ? <Redirect to="/" /> : <Sign />)}
        ></Route>
        <Route path="/:category" component={Category}></Route>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
