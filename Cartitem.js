import Corecontext from "../../Stroe/CoreContext";
import classes from "./Cartitem.module.css";
import React,{useContext} from "react";

const CartItem = (props) => {
  const autctx=useContext(Corecontext)
  const onRemovehandler = (e) =>{
  autctx.removeitem(e.target.id)
  }

  const onaddhandler = (item) => {
    autctx.additem(item)
  }
  
  const price = `$${Number(props.price).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]} key={props.id}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div>
        <div className={classes.actions}>
          <button onClick={onRemovehandler} id={props.id}>−</button>
          <button onClick={onaddhandler.bind(null,props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
