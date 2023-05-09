import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../wrapper/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();
  const namevalue = useRef();
  const agevalue = useRef();
  const collegename=useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    let nameuservalue = namevalue.current.value;
    let ageuservalue = agevalue.current.value;
    let collegeusername=collegename.current.value;

    if (nameuservalue.trim().length === 0 || ageuservalue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+ageuservalue < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(nameuservalue, ageuservalue,collegeusername);
    namevalue.current.value = "";
    agevalue.current.value = "";
    collegename.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={namevalue} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={agevalue} />
          <label htmlFor="collegename">College Name</label>
          <input id="age" type="text" ref={collegename} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
