import Model from "../UI/Model";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartitem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "h1", name: "Sushi", amount: 2, price: 33.33 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
