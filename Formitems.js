import React, { useContext, useRef } from "react";
import Cartcontext from "../store/Cartcontext";
import classes from "./Form.module.css"
const Formitems = () => {
  const contextapi = useContext(Cartcontext);
  const nameval = useRef();
  const descriptionval = useRef();
  const priceval = useRef();
  const quantity=useRef()
  const datahandler = (e) => {
    e.preventDefault();
    let obj = {
      name: nameval.current.value,
      description: descriptionval.current.value,
      price: priceval.current.value,
      quantity:quantity.current.value,
      id: Math.random().toString(),
    };
    fetch("https://crudcrud.com/api/61939fea401445b1b12066e42f23cebc/listitem", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type":"Application/json"
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error("somthing is wrong")
      } else {
        return res.json()
      }
    }).then(data => {
      localStorage.setItem("listitem",data.id)
      console.log(data)
      contextapi.additem(obj)
    })
    nameval.current.value=("")
    descriptionval.current.value=("")
    priceval.current.value = ("")
    quantity.current.value=("")
  };
  return (
    <div className={classes.cardform}>
        <form onSubmit={datahandler}>
          <label htmlFor="name">Medicine Name</label>
          <input type="text" id="name" ref={nameval}></input>
          <label htmlFor="Description">Description</label>
          <input type="text" id="Description" ref={descriptionval}></input>
          <label htmlFor="Price">Price</label>
        <input type="number" id="Price" ref={priceval}></input>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" ref={quantity}></input>
          <button>Additem</button>
        </form>

    </div>
  );
};

export default Formitems;
