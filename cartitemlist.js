import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import Cartcontaxt from "../store/context";

const Cartitemlist = () => {
  const autctx = useContext(Cartcontaxt);
  return (
    <div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {autctx.item.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <div>
                  $
                  <span style={{ border: "1px solid blue" }}>
                    {" "}
                    {item.quantity}{" "}
                  </span>
                  <span>
                    <button> Remove </button>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cartitemlist;
