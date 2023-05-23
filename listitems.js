import React, { useContext } from "react";
import Cartcontext from "../store/Cartcontext";
import Card from "../Ul/card";
import classes from "./listitem.module.css"

const Listitem = () => {
  const ctxapi = useContext(Cartcontext);

  const addtocart = (item) => {
    ctxapi.addtocart(item);
  };
  return (
    <Card>
      <table className={classes.table}>
        <tr>
          <th> MedicineName </th>
          <th> Description </th>
          <th> Price (in Rs)</th>
          <th> Addtocart </th>
        </tr>
        {ctxapi.item.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={addtocart.bind(null, item)}>Addtocart</button>
            </td>
          </tr>
        ))}
      </table>
    </Card>
  );
};

export default Listitem;
