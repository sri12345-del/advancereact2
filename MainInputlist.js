import React from "react";
import Card from "../Inputform/Card";
import classes from "./Userlist.module.css";

const MainInputlist = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.listitem.map((item) => (
          <li key={item.id}>{`${item.name}(${item.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default MainInputlist;
