import "./ExpenseItem.css";
import Expensedetail from "./Expensedetail";
import Expensedate from "./Expensedate";
const ExpenseItem=(props) => {
  return (
    <div className="expense-item">
      <Expensedate date={props.date} />
      <Expensedetail
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
}
export default ExpenseItem;
