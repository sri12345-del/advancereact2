import clasess from "./MealItem.module.css";

const Mealitem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={clasess.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clasess.description}>{props.description}</div>
        <div className={clasess.price}>{price}</div>
          </div>
          <div></div>
    </li>
  );
};

export default Mealitem;
