import { Table } from "react-bootstrap";

const Cartitemlist = (props) => {
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
          {props.item.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                $<span style={{ border: "1px solid blue" }}> 34 </span>
                <span>
                  <button> Remove </button>
                </span>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>totalamount</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cartitemlist;
