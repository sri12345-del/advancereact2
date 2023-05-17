import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Context = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  const portalid = document.getElementById("overroot");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalid)}
      {ReactDOM.createPortal(<Context>{props.children}</Context>, portalid)}
    </Fragment>
  );
};

export default Model;
