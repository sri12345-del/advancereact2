import React from "react";
const Expensedetail=(props)=>{
  return (
    <div>
      <div>{props.title} {props.amount}$ </div>
    </div>
    
  );
}

export default Expensedetail;
