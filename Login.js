import React, { useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailreducer = (state, action) => {
  if (action.type == "inputvalid") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type == "inputblur") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};

const passwordreducer = (state, action) => {
  if (action.type == "inputvalid") {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  }
  if (action.type == "inputblur") {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
  return { value: "", isvalid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [collegeName, setcollegename] = useState("");
  const [collegeNameIsValid, setcollegeNameIsValid] = useState();

  const [emailstate, dispatchEmail] = useReducer(emailreducer, {
    value: "",
    isvalid: null,
  });

  const [passwordstate, dispatchpassword] = useReducer(passwordreducer, {
    value: "",
    isvalid: null,
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("hello");
  //     setFormIsValid(
  //       enteredEmail.includes("@") &&
  //         enteredPassword.trim().length > 6 &&
  //         collegeName.length > 10
  //     );
  //   }, 500);
  //   return () => {
  //     console.log("clean");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword, collegeName]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "inputvalid", val: event.target.value });
    setFormIsValid(
      emailstate.value.includes("@") &&
        passwordstate.value.trim().length > 6 &&
        collegeName.length > 10
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchpassword({ type: "inputvalid", val: event.target.value });
    setFormIsValid(
      emailstate.value.includes("@") &&
        passwordstate.value.trim().length > 6 &&
        collegeName.length > 10
    );
  };

  const collegeChangeHandler = (event) => {
    setcollegename(event.target.value);
    setFormIsValid(
      emailstate.value.includes("@") &&
        passwordstate.value.trim().length > 6 &&
        event.target.value.length > 10
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "inputblur" });
  };

  const validatePasswordHandler = () => {
    dispatchpassword({ type: "inputblur" });
  };

  const validateCollegeNameHandler = () => {
    setcollegeNameIsValid(collegeName.length > 10);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailstate.value, passwordstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailstate.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordstate.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            value={collegeName}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
