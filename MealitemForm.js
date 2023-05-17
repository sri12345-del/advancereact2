import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const Mealitemform = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{ id: "amount", type: "number", min: "1", max: "5", value: "1" }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default Mealitemform;
