import React from "react";
//import './App.css'
import Newexpense from "./component/Expenseform/Newexpense";
import Expenses from "./component/Expensess/Expenses";

const App = () => {
  const AddeventHandler = (newobj) => {
   console.log(newobj)
  }
  const expensearr = [
    {
      title: "car insurance",
      amount: 500,
      date: new Date(2022, 3, 4),
    },
    {
      title: "bike insurance",
      amount: 5000,
      date: new Date(2023, 3, 4),
    },
  ];
  return (
    <div>
      <Newexpense onaddexpense={AddeventHandler} />
      <Expenses items={expensearr} />
      
    </div>
  );
};

export default App;
