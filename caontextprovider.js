import React, { useState } from "react";
import Cartcontaxt from "./context";

const Cartcontaxtprovider = (props) => {
  const [listitem, setlistitem] = useState([]);
  const [totalquantity, settotalquantity] = useState(0);

  const Additemhandler = (item) => {
    settotalquantity(totalquantity + 1);
    console.log(totalquantity)

    setlistitem((items) => {
      const index = items.findIndex((itemss) => itemss.id === item.id);
      const iditem = items[index];
      if (iditem) {
        console.log(iditem);
        let updateitem = {
          ...iditem,
          quantity: iditem.quantity + 1,
        };
        let olditem = [...items];
        olditem[index] = updateitem;
        console.log(olditem);

        return olditem;
      } else {
        return [...items, item];
      }
    });
  };

  const obj = {
    item: listitem,
    totalquantity: totalquantity,
    additem: Additemhandler,
  };
  return (
    <Cartcontaxt.Provider value={obj}>{props.children}</Cartcontaxt.Provider>
  );
};

export default Cartcontaxtprovider;
