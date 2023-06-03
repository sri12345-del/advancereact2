import React, { useContext } from "react";
import Cartcontext from "../store/Cartcontext";
import Card from "../Ul/card";
import classes from "./listitem.module.css";

const Listitem = () => {
  const ctxapi = useContext(Cartcontext);

  const addtocart = (item) => {
    fetch("https://crudcrud.com/api/61939fea401445b1b12066e42f23cebc/cartitem", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error("somthing is Wrong")
      } else {
        return res.json()
      }
    }).then(data => {
      console.log(data)
      ctxapi.addtocart(data);
    }).catch(err=>console.log(err.message))
  };
  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th> MedicineName </th>
            <th> Description </th>
            <th> Price (in Rs)</th>
            <th>Quantity</th>
            <th> Addtocart </th>
          </tr>
        </thead>
        <tbody>
          {ctxapi.item.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={addtocart.bind(null, item)}>Addtocart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Listitem;
