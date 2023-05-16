import CartIcon from "../Cart/CartIcorn";
import classes from "./HeaderButton.module.css";

const Button = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Button;
