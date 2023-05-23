import classes from "./cartitem.module.css";
const Cartitems = (props) => {
  return (
      <li className={classes["cart-item"]}>
          <div>
              <h2>{props.name}</h2>
          </div>
          <div>
              {Number(props.price).toFixed(2)}
          </div>
      </li>
  );
};

export default Cartitems;
