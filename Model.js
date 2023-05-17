import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.oncancel}></div>;
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
      {ReactDOM.createPortal(
        <Backdrop oncancel={props.oncancel}></Backdrop>,
        portalid
      )}
      {ReactDOM.createPortal(<Context>{props.children}</Context>, portalid)}
    </Fragment>
  );
};

export default Model;
