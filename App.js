import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import Contextprovider from "./Stroe/ContextProvider";

function App() {
  const [istrue, setistrue] = useState(false);

  const cartitemhandler = () => {
    setistrue(true);
  };
  const cancelhandler = () => {
    setistrue(false);
  };
  return (
    <Contextprovider>
      {istrue && <Cart oncancel={cancelhandler}></Cart>}
      <Header onClick={cartitemhandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Contextprovider>
  );
}

export default App;
