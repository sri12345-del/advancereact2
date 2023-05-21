import React from "react";

const Corecontext = React.createContext({
  items: [],
  totalAmount: 0,
  additem: (item) => {},
  removeitem: (id) => {},
 
});

export default Corecontext;
