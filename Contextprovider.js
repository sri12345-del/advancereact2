import React, { useState } from "react";
import Cartcontext from "./Cartcontext";

const Contextprovider = (props) => {
  const [updateitem, setupdateitem] = useState([]);
  const [cartitem, setcartitem] = useState([]);
  const [quantity, setquantity] = useState(0);
  const [totalamount, settotalamount] = useState(0);

  const additemhandler = (item) => {
    setupdateitem((items) => [...items, item]);
  };
  const addcarthandler = (item) => {
    setquantity((num) => num + 1);
    settotalamount((amount) => Number(amount) + Number(item.price));
    setcartitem((items) => [...items, item]);
  };
    const removeitemhandler = () => {
        setquantity(0)
        settotalamount(0)
        setcartitem([])
  };

  const obj = {
    item: updateitem,
    cartitem: cartitem,
    quantity: quantity,
    totalamount: totalamount,
    additem: additemhandler,
    addtocart: addcarthandler,
    removeitem: removeitemhandler,
  };

  return (
    <Cartcontext.Provider value={obj}>{props.children}</Cartcontext.Provider>
  );
};

export default Contextprovider;
