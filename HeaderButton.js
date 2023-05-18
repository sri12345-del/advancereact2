import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcorn";
import classes from "./HeaderButton.module.css";
import Corecontext from "../../Stroe/CoreContext";

const Button = (props) => {
  const autctx=useContext(Corecontext)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ autctx.items.length}</span>
    </button>
  );
};

export default Button;
