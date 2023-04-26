import "./ExpenseItem.css"
function ExpenseItem(props) {
  return (
    <div>
        <div>{props.title+"  "}  
        {props.amount +"  "}  
        {props.date.toISOString()+"  "}
        {props.locationofexpadituer}</div>
    </div>
  );
}
export default ExpenseItem;
