function Expensedate(props) {
  const month = props.date.getMonth()
  const day = props.date.getDay()
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{month}-{day}-{year}</div>
    </div>
  );
}

export default Expensedate;
