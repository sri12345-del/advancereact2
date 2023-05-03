//import logo from './logo.svg';
//import "./App.css";
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
    </div>
  );
};

export default Expenses;
