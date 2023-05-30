import React from "react";

const Cartcontaxt = React.createContext({
  token: "",
  loggedin:null,
  item: [],
  totalquantity: 1,
  additem: () => { },
  logedin:(token)=>{},
});

export default Cartcontaxt;
