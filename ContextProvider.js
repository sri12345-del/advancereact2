import React,{useState} from "react";
import Corecontext from "./CoreContext";

const Contextprovider = (props) => {
  const [updateitem,setitem]=useState([])
  const additemhandler = (item) => {
    setitem([...updateitem,item])
  };
  const removeItemhandler = (id) => {};

  const obj = {
    items: updateitem,
    totalAmount: 0,
    additem: additemhandler,
    removeItem: removeItemhandler,
  };
  return (
    <Corecontext.Provider value={obj}>
      {console.log(obj)}
      {props.children}</Corecontext.Provider>
  );
};

export default Contextprovider;
