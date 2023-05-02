import React from "react";
import ExpenseForm from "./ExpenseForm";

const Newexpense = (props) => {
  const savedata = (obj) => {
    const newobj = {
      ...obj,
      id: Math.random().toString(),
    };
    props.onaddexpense(newobj)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsavedata={savedata}/>
    </div>
  );
};

export default Newexpense;
