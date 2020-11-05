import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./Menu-item.module.scss";
const menuItem = ({ title, imgUrl, size, history, match, linkUrl }) => {
  const manuClasses = [classes.menuItem, classes[size]].join(" ");
  return (
    <div
      className={manuClasses}
      onClick={() => {
        history.push(linkUrl);
        console.log(match);
      }}
    >
      <div
        className={classes.backgroundImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <span className={classes.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(menuItem);
