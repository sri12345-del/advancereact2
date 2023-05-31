import React, { useContext } from "react";
import Cartcontaxt from "../store/context";
import { Button, Card } from "react-bootstrap";

const Music = (props) => {
  const autoctx = useContext(Cartcontaxt);

  const datahandler = (item) => {
    let email = localStorage.getItem("email");
    fetch(
      `https://crudcrud.com/api/5c1b5d38422a4d39845139db1ba1c712/${email}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          autoctx.additem(data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Card style={{ width: "50%", textAlign: "center", margin: "2rem 8rem" }}>
        <Card.Body>
          <Card.Title>{props.items.title}</Card.Title>
          <Card.Img
            src={props.items.imageUrl}
            alt="there is a flower"
          ></Card.Img>
          <Card.Footer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>${props.items.price}</span>
            <span>
              <Button
                variant="primary"
                onClick={datahandler.bind(null, props.items)}
              >
                Add to Cart
              </Button>
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Music;
