import React,{Fragment} from "react";

import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
