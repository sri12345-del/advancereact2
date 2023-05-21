import React, { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import Corecontext from "../../Stroe/CoreContext";
import CartItem from "./Cartitem";

const Cart = (props) => {
  const autctx = useContext(Corecontext);
  const cartitemhas = autctx.items.length > 0;
  
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {autctx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          item={item}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Model oncancel={props.oncancel}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{autctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.oncancel}>
          Close
        </button>
        {cartitemhas && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
