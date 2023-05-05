import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const Newexpense = (props) => {
  const [istrue, setistrue] = useState(false);
  const savedata = (obj) => {
    const newobj = {
      ...obj,
      id: Math.random().toString(),
    };
    props.onaddexpense(newobj);
  };
  const addexpensehandler = () => {
    setistrue(true);
  };
  const cancelformhandler = () => {
    setistrue(false);
  };
  return (
    <div className="new-expense">
      {!istrue && <button onClick={addexpensehandler}>Add new expense</button>}
      {istrue && (
        <ExpenseForm onsavedata={savedata} onClick={cancelformhandler} />
      )}
    </div>
  );
};

export default Newexpense;
