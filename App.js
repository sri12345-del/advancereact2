import React, { useState } from "react";
import Formitems from "./Formitem/Formitems";
import Listitem from "./Listitem/listitems";
import Header from "./header/header";
import Contextprovider from "./store/Contextprovider";
import Cart from "./Cart/cart";

function App() {
  const [istrue, setistrue] = useState(false);

  const changestatehandler = () => {
    setistrue(true);
  };
  const changestate = () => {
    setistrue(false);
  };
  return (
    <Contextprovider>
      {istrue && <Cart onchange={changestate}></Cart>}
      <Header onchange={changestatehandler}></Header> 
        <Formitems></Formitems>
        <Listitem></Listitem>
    </Contextprovider>
  );
}

export default App;
