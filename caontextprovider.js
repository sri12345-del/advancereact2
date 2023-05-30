import React, { useState ,useEffect} from "react";
import Cartcontaxt from "./context";

const Cartcontaxtprovider = (props) => {
  
  const [listitem, setlistitem] = useState([]);
  const [totalquantity, settotalquantity] = useState(0);
  const [islogged, setisloged] = useState(false)
  const [token, settoken]=useState(null)
  
  useEffect(() => {
    if (localStorage.getItem("key")){
    setisloged(true)
    } else {
      setisloged(false)
  }
},[token])

  const loginhandler = (token) => {
    settoken(token)
}

  const Additemhandler = (item) => {
    settotalquantity(totalquantity + 1);

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

        return olditem;
      } else {
        return [...items, item];
      }
    });
  };

  const obj = {
    token: token,
    loggedin:islogged,
    item: listitem,
    totalquantity: totalquantity,
    additem: Additemhandler,
    logedin:loginhandler,
  };
  return (
    <Cartcontaxt.Provider value={obj}>{props.children}</Cartcontaxt.Provider>
  );
};

export default Cartcontaxtprovider;
