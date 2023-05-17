import CartIcon from "../Cart/CartIcorn";
import classes from "./HeaderButton.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Button;
