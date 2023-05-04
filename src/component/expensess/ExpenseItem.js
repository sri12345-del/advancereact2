//import "./ExpenseItem.css";
import React from "react";
import Expensedetail from "./Expensedetail";
import Expensedate from "./Expensedate";
const ExpenseItem = (props) => {
<<<<<<< HEAD
  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <Expensedetail title={props.title} amount={props.amount} />
=======
  const [amount, setTitle] = useState(props.amount);
  const value = () => {
    setTitle(100);
    console.log(amount);
    console.log(1)
  };

  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <Expensedetail
        title={props.title}
        amount={amount}
      />
      <button onClick={value}>delete expense</button>
>>>>>>> 7f549ed1c0046f2a86dedd3ba027584506c42792
    </div>
  );
};
export default ExpenseItem;
