const redux = require("redux");

const createReducer = (state = { counter: 0 }, action) => {
    if (action.type == "decrement") {
        return {
            counter: state.counter - 1,
        };
    } else {
        return {
            counter: state.counter + 1,
        };
    }
};

const store = redux.createStore(createReducer);
const countersubcreption = () => {
  let lateststate = store.getState();
  console.log(lateststate);
};

store.subscribe(countersubcreption);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
