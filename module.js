import classes from "./model.module.css";

const Model = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onchange}></div>
      <div className={classes.modal}>
        <div className={classes.context}>{props.children}</div>
      </div>
    </div>
  );
};

export default Model;
