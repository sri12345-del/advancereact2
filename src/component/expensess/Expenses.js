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
  return (
    <div>
      <div>
        <ExpenseFilter selected={filtedyear} onchangefilter={filterhandler} />
        {propsfilter.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
import React, {useState} from "react";
    </div>
  );
};

export default Expenses;
