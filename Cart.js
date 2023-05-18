import React, { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import Corecontext from "../../Stroe/CoreContext";

const Cart = (props) => {
  const autctx = useContext(Corecontext);
  let amount = 0;
  autctx.items.map((item) => (amount = amount + Number(item.price)));
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {autctx.items.map((item) => (
        <li key={item.id} className={classes.li}>
          <span>{item.name}</span>
          <span>{Number(item.price).toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <Model oncancel={props.oncancel}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{amount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.oncancel}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
