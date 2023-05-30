import React from "react";

const Cartcontaxt = React.createContext({
  token:"",
  item: [],
  totalquantity: 1,
  additem: () => {},
});

export default Cartcontaxt;
