import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titlevalue = (e) => {
    setTitle(e.target.value);
  };
  const amountvalue = (e) => {
    setAmount(e.target.value);
  };
  const datevalue = (e) => {
    setDate(e.target.value);
  };
  const storevalue = (e) => {
    e.preventDefault();
    const obj = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onsavedata(obj);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={storevalue}>
        <label>Expense title: </label>
        <input
          type="text"
          value={title}
          onChange={titlevalue}
        ></input>
        <label>Expense amount: $ </label>
        <input
          type="amount"
          value={amount}
          onChange={amountvalue}
        ></input>
        <label>Expense date: </label>
        <input type="date" value={date} onChange={datevalue}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
