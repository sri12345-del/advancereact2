import React, { useState } from "react";
import Login from "./Login/Loginform";
import Fooditem from "./Additem/Fooditem";
import ElectronicItem from "./Additem/Electronicitem";
import SkincareItem from "./Additem/Skincareitem";

const App = () => {
  const [iselctronic, setiselctronic] = useState([]);
  const [isfood, setisfood] = useState([]);
  const [isskincare, setisskincare] = useState([]);
  const datahandler = (data) => {
    localStorage.setItem(data.ProductId, JSON.stringify(data));
    if (data.ProductType == "Table 1") {
      setiselctronic((item) => {
        return [...item, data];
      });
    } else if (data.ProductType == "Table 2") {
      setisfood((item) => {
        return [...item, data];
      });
    } else {
      setisskincare((item) => {
        return [...item, data];
      });
    }
  };

  const removefooditem = (id) => {
    localStorage.removeItem(id)
    setisfood((items) => items.filter((data) => data.ProductId != id));
  };
  const removeelctronicitem = (id) => {
    localStorage.removeItem(id)
    setiselctronic((items) => items.filter((data) => data.ProductId != id));
  };
  const removeskincareitem = (id) => {
    localStorage.removeItem(id)
    setisskincare((items) => items.filter((data) => data.ProductId != id));
  };
  return (
    <div style={{margin:"30px", padding:"10px"} }>
      <Login onSubmit={datahandler}></Login>
      <header>
        <h2>Orders</h2>
      </header>
      <ElectronicItem items={iselctronic} remove={removeelctronicitem}></ElectronicItem>
      <Fooditem items={isfood} remove={removefooditem}></Fooditem>
      <SkincareItem items={isskincare} remove={removeskincareitem}></SkincareItem>
    </div>
  );
};

export default App;
