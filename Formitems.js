import React, { useContext, useRef } from "react";
import Cartcontext from "../store/Cartcontext";
import classes from "./Form.module.css"
const Formitems = () => {
  const contextapi = useContext(Cartcontext);
  const nameval = useRef();
  const descriptionval = useRef();
  const priceval = useRef();
  const datahandler = (e) => {
    e.preventDefault();
    let obj = {
      name: nameval.current.value,
      description: descriptionval.current.value,
      price: priceval.current.value,
      id: Math.random().toString(),
    };
    contextapi.additem(obj);
    nameval.current.value=("")
    descriptionval.current.value=("")
    priceval.current.value=("")
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
          <button>Additem</button>
        </form>

    </div>
  );
};

export default Formitems;
