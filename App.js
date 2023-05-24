import React,{useState} from "react";
import { Container, Navbar } from "react-bootstrap";
import Containers from "./Component/contanier";
import Listitems from "./Component/items/listitem";
import Cartitem from "./cart/cartitem";

const App = () => {
  const [istrue, setistrue] = useState(false)

  const cartvisible = () => {
    console.log('visible')
    setistrue(true)
  }
  
  const cartclosehandler = () => {
    setistrue(false)
  }
  return (
    <div>
      {istrue && <Cartitem close={cartclosehandler} show={istrue}></Cartitem>}
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Brand>
            <span> Home </span>
            <span> Store </span>
            <span> About </span>
          </Navbar.Brand>
          <Navbar.Brand>
            <button onClick={cartvisible}>Cart</button>
          </Navbar.Brand >
        </Container>
      </Navbar>
      <Containers></Containers>
      <Listitems></Listitems>
    </div>
  );
};

export default App;
