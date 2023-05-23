import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Listitems = () => {
  return (
    <Container>
      <Card className="justify-content-md-center">
        <header>
          <h2>Music</h2>
        </header>
        <Row>
          <Col>
            <div>
              <h2>{productsArr[0].title}</h2>
              <div>
                <img
                  src={productsArr[0].imageUrl}
                  alt="there is a flower"
                ></img>
              </div>
              <div>
                <span>
                  &<span>{productsArr[0].price}</span>
                </span>
                <button variant="primary">Add to Cart</button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h2>{productsArr[1].title}</h2>
              <div>
                <img
                  src={productsArr[1].imageUrl}
                  alt="there is a flower"
                ></img>
              </div>
              <div>
                <span>
                  &<span>{productsArr[1].price}</span>
                </span>
                <button>Add to Cart</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h2>{productsArr[2].title}</h2>
              <div>
                <img
                  src={productsArr[2].imageUrl}
                  alt="there is a flower"
                ></img>
              </div>
              <div>
                <span>
                  &<span>{productsArr[2].price}</span>
                </span>
                <button>Add to Cart</button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h2>{productsArr[3].title}</h2>
              <div>
                <img
                  src={productsArr[3].imageUrl}
                  alt="there is a flower"
                ></img>
              </div>
              <div>
                <span>
                  &<span>{productsArr[3].price}</span>
                </span>
                <button>Add to Cart</button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Listitems;
