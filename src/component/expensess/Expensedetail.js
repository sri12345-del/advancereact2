import React from "react";
const Expensedetail=(props)=>{
  return (
    <div>
      <div>{props.title} {props.amount}$ {props.location}</div>
    </div>
    
  );
}

export default Expensedetail;
