//import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./component/expensess/ExpenseItem";
const App=()=> {
  let expensearr = [
    {
      title: "car insurance",
      amount: 500,
      date: new Date(2022, 3, 4),
      location:'bangalore'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expensearr[0].title}
          amount={expensearr[0].amount}
          date={expensearr[0].date}
          location={expensearr[0].location}
        />
      </header>
    </div>
  );
}

export default App;
