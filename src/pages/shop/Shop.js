import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { updateShop } from "../../redux/shop/action";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import Category from "../category/category";
import { firestore } from "../../firebase/firebase.util";
import WithSpinner from "../../components/spinner/spinnerHoc";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CategoryWithSpinner = WithSpinner(Category);

class Shop extends Component {
  state = { isLoading: true };
  componentDidMount() {
    const collectionRef = firestore.collection("collection");
    collectionRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      this.props.dispatch(updateShop(data));
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const collections = this.props.collections
      ? this.props.collections.collections
      : [];

    return (
      <div>
        <Switch>
          <Route exact path={`${match.path}`}>
            {collections.map((collection) => {
              return (
                <CollectionPreviewWithSpinner
                  isLoading={this.state.isLoading}
                  key={collection.id}
                  items={collection.items}
                  title={collection.title}
                />
              );
            })}
          </Route>

          <Route
            path={`${match.path}/:category`}
            render={() => (
              <CategoryWithSpinner isLoading={this.state.isLoading} />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  collections: state.collections,
});

export default connect(mapStateToProps)(Shop);
