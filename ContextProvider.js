import React, { useState } from "react";
import Corecontext from "./CoreContext";

const Contextprovider = (props) => {
  const [updateitem, setitem] = useState([]);
  const [totalAmount, settotalAmount] = useState(0);

  console.log(updateitem);

  const additemhandler = (item) => {
    setitem((olditem) => {
      const cartitemindex = olditem.findIndex((data) => data.id === item.id);
      const cartitem = olditem[cartitemindex];
      let updatitems;
      if (cartitem) {
        let updateitem = {
          ...cartitem,
          quantity: cartitem.quantity + 1,
        };
        updatitems = [...olditem];
        updatitems[cartitemindex] = updateitem;
      } else {
        updatitems = olditem.concat(item);
      }
      return updatitems;
    });
    settotalAmount((oldamount) => oldamount + item.price);
  };

  const removeItemhandler = (id) => {
    setitem((olditem) => {
      const findIndex = olditem.findIndex((item) => item.id === id);
      const cartitem = olditem[findIndex];

      let updatitems;
      if (cartitem.quantity > 1) {
        let updateitem = {
          ...cartitem,
          quantity: cartitem.quantity - 1,
        };
        updatitems = [...olditem];
        updatitems[findIndex] = updateitem;
      } else {
        updatitems = olditem.filter((item) => item.id != id);
      }
      settotalAmount((oldamount) => oldamount - cartitem.price);
      return updatitems;
    });
  };

  const obj = {
    items: updateitem,
    totalAmount: totalAmount,
    additem: additemhandler,
    removeitem: removeItemhandler,
  };
  return (
    <Corecontext.Provider value={obj}>{props.children}</Corecontext.Provider>
  );
};

export default Contextprovider;
