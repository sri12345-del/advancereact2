import Mainform from "./Components/Inputform/Mainform";
import MainInputlist from "./Components/Inputlist/MainInputlist";
import React, { useState } from "react";

const App = () => {
  const [datalist,setdatalist]=useState([])
  const datahandler = (obj) => {
    setdatalist(exp=>{
      return [obj, ...exp]
    })
    
  };

  return (
    <div>
      <Mainform items={datahandler}></Mainform>
      <MainInputlist listitem={datalist}></MainInputlist>
    </div>
  );
};
export default App;
