import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Containers from "./Component/contanier";
import Listitems from "./Component/items/listitem";

const App = () => {
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Brand>
            <span> Home </span>
            <span> Store </span>
            <span> About </span>
          </Navbar.Brand>
          <Navbar.Brand>
            <button>Cart</button>
          </Navbar.Brand >
        </Container>
      </Navbar>
      <Containers></Containers>
      <Listitems></Listitems>
    </div>
  );
};

export default App;
