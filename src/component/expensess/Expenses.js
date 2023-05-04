//import logo from './logo.svg';
//import "./App.css";
<<<<<<< HEAD
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
    <div className="App">
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
=======
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
//import { useState } from "react";
const Expenses = (props) => {
 const [filtedyear, setfilteryear]=useState('2020')
  const filterhandler=(selectedyear)=>{
   setfilteryear(selectedyear)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseFilter selected={filtedyear} onchangefilter={filterhandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
      </header>
>>>>>>> 7f549ed1c0046f2a86dedd3ba027584506c42792
    </div>
  );
};

export default Expenses;
