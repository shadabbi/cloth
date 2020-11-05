import React, { Component } from "react";
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

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/Shop" component={Shop}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          ></Route>
          <Route path="/:category" component={Category}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
