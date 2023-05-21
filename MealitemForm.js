import React,{useContext} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import Corecontext from "../../../Stroe/CoreContext";

const Mealitemform = (props) => { 
  const addcontext = useContext(Corecontext)
  const additemhandler = (event) => {
    event.preventDefault()
    addcontext.additem(props.item)
  }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{ id: "x1", type: "number", min: "1", max: "5",step:"1", defaultValue: "1" }}
      ></Input>
      <button onClick={additemhandler}>+ Add</button>
    </form>
  );
};

export default Mealitemform;
