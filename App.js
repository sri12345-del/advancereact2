import React, { Fragment } from "react";

import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
