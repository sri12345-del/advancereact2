//import "./ExpenseItem.css";
import React, { useState } from "react";
import Expensedetail from "./Expensedetail";
import Expensedate from "./Expensedate";
const ExpenseItem = (props) => {
  let [amount, setTitle] = useState(props.amount);
  const value = () => {
    setTitle(100);
    console.log(amount);
  };

  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <Expensedetail
        title={props.title}
        amount={amount}
        location={props.location}
      />
      <button onClick={value}>delete expense</button>
    </div>
  );
};
export default ExpenseItem;
