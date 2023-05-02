//import logo from './logo.svg';
//import "./App.css";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          location={props.items[0].location}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          location={props.items[1].location}
        />
      </header>
    </div>
  );
};

export default Expenses;
