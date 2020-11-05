import React from "react";
import { connect } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import classes from "./CollectionItem.module.scss";
import Btn from "../customBtn/CustomBtn";
import { addItemToCartAction } from "../../redux/cartDropdown/cartDropdownAction";

const CollectionItem = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { id, name, price, imageUrl, addItemToCart, title } = props;
  const addItemToCartHandler = (e) => {
    e.stopPropagation()
    const item = {
      ...props.item,
      quantity: 1,
    };
    addItemToCart(item);
  };
  return (
    <div
      onClick={() =>
        props.click
          ? history.push(`${match.path}/${title.toLowerCase()}`)
          : null
      }
      style={{ marginBottom: props.margin ? "5rem" : "" }}
      className={classes["collection-item"]}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes["collection-footer"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <Btn inverted onClick={addItemToCartHandler}>
        Add to cart
      </Btn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCartAction(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
