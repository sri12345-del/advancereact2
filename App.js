import React, { useState, useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Containers from "./Component/contanier";
import Cartitem from "./cart/cartitem";
import Cartcontaxtprovider from "./store/caontextprovider";
import Cartcontaxt from "./store/context";
import { Route ,Switch} from "react-router-dom";
import Store from "./Component/Store";
import Home from "./Component/Home";
import About from "./Component/About";
import Layout from "./Layout/Layout";
import Login from "./Component/Login";

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
    <Layout>
    <Switch>
      <Route path="/store" exact>
        <Store></Store>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
        </Route>
        <Route path="/auth">
          <Login>
          </Login>
        </Route>
      </Switch>
      </Layout>
  );
};

export default App;
