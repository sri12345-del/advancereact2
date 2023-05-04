//import logo from './logo.svg';
//import "./App.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filtedyear, setfilteryear] = useState("2020");
  const filterhandler = (selectedyear) => {
    setfilteryear(selectedyear);
  };
  const propsfilter = props.items.filter((filteritem) => {
    return filteritem.date.getFullYear().toString() === filtedyear;
  });
  let expenseonscreen;
  if (propsfilter.length == 0) {
    expenseonscreen = <p>No expense are there</p>;
  } else if (propsfilter.length === 1) {
    expenseonscreen = 
      <div>
        <ExpenseItem
          key={propsfilter[0].id}
          title={propsfilter[0].title}
          amount={propsfilter[0].amount}
          date={propsfilter[0].date}
        />
        <p>Only single Expense here. Please add more...</p>
      </div>
  } else {
    expenseonscreen = propsfilter.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <div>
        <ExpenseFilter selected={filtedyear} onchangefilter={filterhandler} />
        {expenseonscreen}
      </div>
    </div>
  );
};

export default Expenses;
