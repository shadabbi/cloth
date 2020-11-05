import React from "react";

import classes from "./CollectionPreview.module.scss";
import CollectionItem from "../../components/collectionItem/CollectionItem";

function CollectionPreview({ title, items }) {


  return (
    <div className={classes["collection-preview"]}>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <div className={classes.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
                  click
                  title={title}
              name={item.name}
              item={item}
              price={item.price}
              imageUrl={item.imageUrl}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
