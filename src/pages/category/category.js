import React from "react";

import SHOP_DATA from "../shop/shop.data";
import classes from "./category.module.scss";
import CollectionItem from "../../components/collectionItem/CollectionItem";

function category(props) {
  const data = SHOP_DATA.filter((item) => {
   

    return item.routeName === props.match.params.category;
  });

  return (
    <div className={classes["collection-preview"]}>
      <h1 className={classes.title}>
        {props.match.params.category.toUpperCase()}
      </h1>

      <div className={classes.preview}>
        {data.map((item) =>
          item.items.map((item) => (
              <CollectionItem 
                  margin
              name={item.name}
              item={item}
              price={item.price}
              imageUrl={item.imageUrl}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default category;
