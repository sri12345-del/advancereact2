import React from "react";

const Cartcontaxt = React.createContext({
  item: [],
  totalquantity: 1,
  additem: () => {},
});

export default Cartcontaxt;
