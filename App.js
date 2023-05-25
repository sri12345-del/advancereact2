import React, { useState, useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Containers from "./Component/contanier";
import Listitems from "./Component/items/listitem";
import Cartitem from "./cart/cartitem";
import Cartcontaxtprovider from "./store/caontextprovider";
import Cartcontaxt from "./store/context";

const App = () => {
  const [istrue, setistrue] = useState(false);
  const autoctx = useContext(Cartcontaxt);

  const cartvisible = () => {
    console.log("visible");
    setistrue(true);
  };

  const cartclosehandler = () => {
    setistrue(false);
  };
  return (
    <Cartcontaxtprovider>
      {istrue && <Cartitem close={cartclosehandler} show={istrue}></Cartitem>}
      <Navbar bg="primary">
        <Container>
          <Nav className="justify-content-center">
            <Nav.Item>home</Nav.Item>
          </Nav>
          <div>
            <Button onClick={cartvisible} varient="sucess">
              Cart
            </Button>
            <span>{ autoctx.totalquantity}</span>
          </div>
        </Container>
      </Navbar>
      <Containers></Containers>
      <Listitems></Listitems>
    </Cartcontaxtprovider>
  );
};

export default App;
