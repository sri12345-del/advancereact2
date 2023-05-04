import React from "react";
const Expensedate=(props)=> {
  const month = props.date.getMonth()
  const day = props.date.getDay()
  const year = props.date.getFullYear();
  return (
    <div>
      {month}-{day}-{year}
    </div>
  );
}

export default Expensedate;
