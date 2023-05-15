import React, { useRef } from "react";
import "./loginform.css"
const Login = (props) => {
  const ProductId = useRef();
  const SellingPrice = useRef();
  const ProductName = useRef();
  const ProductType = useRef();

  const datahandler = (e) => {
    e.preventDefault();
    const obj = {
      ProductId: ProductId.current.value,
      SellingPrice: SellingPrice.current.value,
      ProductName: ProductName.current.value,
      ProductType: ProductType.current.value,
      id: Math.random().toString(),
    };
    props.onSubmit(obj);
    ProductId.current.value = ("")
    SellingPrice.current.value = ("")
    ProductName.current.value = ("")
    ProductType.current.value=("")
  };
  return (
    <div className="card">
      <form onSubmit={datahandler}>
        <label>Unique Id</label>
        <input type="number" id="Product id" ref={ProductId}></input>
        <label>Choose Price</label>
        <input type="number" id="Product id" ref={SellingPrice}></input>
        <label>Choose Dish</label>
        <input type="text" id="ProductName" ref={ProductName}></input>
        <label>Choose a Table</label>
        <select ref={ProductType}>
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <button type="onSubmit">Add Items</button>
      </form>
    </div>
  );
};

export default Login;
