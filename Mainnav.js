import React from "react";
import classes from "./Mainnav.module.css";

import { Link ,useHistory} from "react-router-dom";

const MainNav = () => {
const history=useHistory()
    const clickhandler = () => {
    history.replace("/auth")
}
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
            <Link to="/auth" onClick={clickhandler}>Login</Link>
          </li>
          <button>Cart</button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
