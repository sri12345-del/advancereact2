import clasess from "./MealItem.module.css";
import Mealitemform from "./MealitemForm";

const Mealitem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={clasess.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={clasess.description}>{props.description}</div>
        <div className={clasess.amount}>{price}</div>
      </div>
      <div>
        <Mealitemform item={props}></Mealitemform>
      </div>
    </li>
  );
};

export default Mealitem;
