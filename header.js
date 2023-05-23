import React from "react";
import classes from "./header.module.css";
import Button from "./headerButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Medical Shop</h1>
        <Button onchange={props.onchange}>Cart item</Button>
      </header>
    </div>
  );
};

export default Header;
