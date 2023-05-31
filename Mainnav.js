import React, { useContext} from "react";
import classes from "./Mainnav.module.css";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cartcontaxt from "../store/context";

const MainNav = (props) => {
  const autctx=useContext(Cartcontaxt)
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <Button onClick={props.onClick} variant="danger">
            {autctx.totalquantity}cart
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
