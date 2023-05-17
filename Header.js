import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealimg from "../../source/meals.jpg";
import Button from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button onClick={props.onClick}></Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} alt="dish in the table" />
      </div>
    </Fragment>
  );
};

export default Header;
