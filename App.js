import React, { Fragment, useState } from "react";
import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";

function App() {
  const [istrue, setistrue] = useState(false);

  const cartitemhandler = () => {
    setistrue(true);
    console.log("hi")
  };
  const cancelhandler = () => {
    setistrue(false);
  };
  return (
    <Fragment>
      {istrue && <Cart oncancel={cancelhandler}></Cart>}
      <Header onClick={cartitemhandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
