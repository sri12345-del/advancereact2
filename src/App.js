//import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  let expenvearr = [
    {
      title: "car insurance",
      amount: 10000,
      date: new Date(2022, 2, 3),
      expadituer:'bangalore'
    },
    {
      title: "bike insurance",
      amount: 5000,
      date: new Date(2022, 3, 2),
      expadituer:'karnataka'
    },
  ];
  

  return (
   
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expenvearr[0].title}
          amount={expenvearr[0].amount}
          date={expenvearr[0].date}
          locationofexpadituer={expenvearr[0].expadituer}
        ></ExpenseItem>
         <ExpenseItem
          title={expenvearr[1].title}
          amount={expenvearr[1].amount}
          date={expenvearr[1].date}
          locationofexpadituer={expenvearr[1].expadituer}
        ></ExpenseItem>
      </header>
    </div>
    
  );
}

export default App;
