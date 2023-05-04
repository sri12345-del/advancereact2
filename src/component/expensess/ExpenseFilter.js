<<<<<<< HEAD

=======
>>>>>>> 7f549ed1c0046f2a86dedd3ba027584506c42792
const ExpenseFilter=(props)=>{
    const dropdownchangehandler=(event)=>{
      props.onchangefilter(event.target.value)
    }
    return (
        <div>
            <label>Filter by year</label>
            <select value={props.selected} onChange={dropdownchangehandler}>
             <option value="2020">2020</option>
             <option value="2021">2021</option>
             <option value="2022">2022</option>
             <option value="2023">2023</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;