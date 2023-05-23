import React from "react";

const Cartcontext = React.createContext({
  item: [],
    cartitem: [],
    quantity: 0,
    totalamount:0,
    additem: (item) => { },
  addtocart:(item)=>{},
  removeitem: () => {},
});

export default Cartcontext;
