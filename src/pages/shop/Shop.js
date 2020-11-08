import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import Category from "../category/category";
import WithSpinner from "../../components/spinner/spinnerHoc";
import { fetchCollectionsStartAsync } from "../../redux/shop/action";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CategoryWithSpinner = WithSpinner(Category);

const Shop = (props) => {
  useEffect(() => {
    props.dispatch(fetchCollectionsStartAsync());
  }, []);

  const { match } = props;
  const collections = props.collections ? props.collections.collections : [];

  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`}>
          {collections.map((collection) => {
            return (
              <CollectionPreviewWithSpinner
                isLoading={props.isLoading}
                key={collection.id}
                items={collection.items}
                title={collection.title}
              />
            );
          })}
        </Route>

        <Route
          path={`${match.path}/:category`}
          render={() => <CategoryWithSpinner isLoading={props.isLoading} />}
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.collections,
  isLoading: state.collections.isFetching,
});

export default connect(mapStateToProps)(Shop);
