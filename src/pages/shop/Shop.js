import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import Category from "../category/category";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { match } = this.props;
    const collections = this.state.collections;
    console.log(this.props);
    return (
      <div>
        <Switch>
          <Route exact path={`${match.path}`}>
            {collections.map((collection) => {
              return (
                <CollectionPreview
                  key={collection.id}
                  items={collection.items}
                  title={collection.title}
                />
              );
            })}
          </Route>

          <Route path={`${match.path}/:category`} component={Category}></Route>
        </Switch>
      </div>
    );
  }
}

export default Shop;
