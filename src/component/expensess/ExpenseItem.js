//import "./ExpenseItem.css";
import Expensedetail from "./Expensedetail";
import Expensedate from "./Expensedate";
const ExpenseItem=(props) => {
  const value=()=>{
    const expense=document.getElementById('root')
    const div=expense.firstElementChild
    console.log(expense.remove(div))
    
  }
  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <Expensedetail
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={value}>delete expense</button>
    </div>
  );
}
export default ExpenseItem;
