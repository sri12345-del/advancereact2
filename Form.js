import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import Errormobule from "./Errormodule";
const Form = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [error, seterror] = useState();

  const namehandler = (e) => {
    setname(e.target.value);
  };
  const agehandler = (e) => {
    setage(e.target.value);
  };

  const inputhandler = (e) => {
    e.preventDefault();
    if (name.trim().length == 0 || age.trim().length == 0) {
      seterror({
        title: "invalid input",
        message: "please enter a valid input",
      });
      return;
    }
    if (+age < 0) {
      seterror({
        title: "invalid age",
        message: "please enter a valid age(age>0)",
      });
      return;
    }
    const obj = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    props.items(obj);
    setname("");
    setage("");
  };
  const errorhandler=()=>{
    seterror(null)
  }

  return (
    <div>
      {error && (
        <Errormobule
          title={error.title}
          message={error.message}
          onConform={errorhandler}
        ></Errormobule>
      )}
      <Card className={classes.input}>
        <form onSubmit={inputhandler}>
          <label>User name</label>
          <input type="text" onChange={namehandler} value={name}></input>
          <label>Age(years)</label>
          <input type="number" onChange={agehandler} value={age}></input>
          <Button type="onsubmit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
