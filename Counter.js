import classes from './Counter.module.css';
import { useSelector,useDispatch} from "react-redux"

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const toggleCounterHandler = () => { };
  
  const incrementhandler = () => {
    dispatch({type:"increment"})
  }

  const decrementhandler = () => {
    dispatch({type:"decrement"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementhandler}>IncrementBy5</button>
        <button onClick={decrementhandler}>DecrementBy5</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
