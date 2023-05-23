import { Card, Col, Container, Row } from "react-bootstrap";

const Containers = () => {
  return (
    <Row>
      <Col>
        <Card className="text-center" bg="secondary">
          <Card.Body>
            <h1>The Generics</h1>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Containers;
