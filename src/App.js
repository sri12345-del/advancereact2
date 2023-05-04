import React, { useState } from "react";
//import './App.css'
import Newexpense from "./component/Expenseform/Newexpense";
import Expenses from "./component/Expensess/Expenses";
const expensearr = [
  {
    id: "f1",
    title: "car insurance",
    amount: 500,
    date: new Date(2022, 3, 4),
  },
  {
    id: "f2",
    title: "bike insurance",
    amount: 5000,
    date: new Date(2023, 3, 4),
  },
];
const App = () => {
  const [expense, setexpense] = useState(expensearr);
  const AddeventHandler = (newobj) => {
    console.log(newobj);
    setexpense((expenses) => {
      return [newobj, ...expenses];
    });
  };
  return (
    <div>
      <Newexpense onaddexpense={AddeventHandler} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
