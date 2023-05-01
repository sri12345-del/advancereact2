function ExpenseForm() {
  const value = (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    console.log(title.value, amount.value, date.value);
  };
  return (
    <div>
      <form>
        <label>Expense title: </label>
        <input type="text" id="title" onSelect={value} />
        <label>Expense amount: $ </label>
        <input type="amount" id="amount" onSelect={value} />
        <label>Expense date: </label>
        <input type="date" id="date" onSelect={value} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
