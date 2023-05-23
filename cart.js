import Model from "../Ul/module";
import Cartcontext from "../store/Cartcontext";
import Cartitems from "./cartitems";
import React, { useContext } from "react";
import classes from "./cart.module.css";

const Cart = (props) => {
  const autocntx = useContext(Cartcontext);
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {autocntx.cartitem.map((item) => (
        <Cartitems
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        ></Cartitems>
      ))}
    </ul>
  );
  return (
    <Model onchange={props.onchange}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{autocntx.totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onchange}>Close</button>
        <button className={classes.button} onClick={autocntx.removeitem}>
          Order
        </button>
      </div>
    </Model>
  );
};

export default Cart;
