import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => { };
  
  const incrementhandler = () => {
  }

  const decrementhandler = () => {
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>counter</div>
      <div>
      <button onClick={incrementhandler}>IncrementBy2</button>
        <button onClick={decrementhandler}>DecrementBy2</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
