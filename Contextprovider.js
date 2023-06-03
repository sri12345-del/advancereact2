import React, { useState ,useEffect} from "react";
import Cartcontext from "./Cartcontext";

const Contextprovider = (props) => {
  const [updateitem, setupdateitem] = useState([]);
  const [cartitem, setcartitem] = useState([]);
  const [quantity, setquantity] = useState(0);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    fetch("https://crudcrud.com/api/61939fea401445b1b12066e42f23cebc/listitem", {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => {
      if (!res.ok) {
      throw new Error("can't get the item")
      } else {
        return res.json()
    }
    }).then(data => {
    data.map(item=>additemhandler(item))
    }).catch(err=>console.log(err.message))
    
    fetch("https://crudcrud.com/api/61939fea401445b1b12066e42f23cebc/cartitem", {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error("can't get cart item")
      } else {
        return res.json()
      }
    }).then(data => {
      setquantity(0)
      data.map(item=>addcarthandler(item))
    }).catch(err=>console.log(err.message))
},[])

  const additemhandler = (item) => {
    setupdateitem((items) => [...items, item]);
  };
  const addcarthandler = (item) => {
    setupdateitem(data => {
      const index = data.findIndex(list => list.id === item.id)
      const arritem = data[index]
      if (arritem) {
        let updateitem = {
          ...arritem,quantity:arritem.quantity-1
        }
        let oldarr = [...data]
        oldarr[index] = updateitem
        return oldarr
      }
    })
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
