import React, { useReducer, useState, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Autocontext from "../store/auto-context";
import Input from "../UI/input/Input";

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

const Login = () => {
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

  const autctx = useContext(Autocontext);

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
    autctx.onLogin(emailstate.value, passwordstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          label="E-mail"
          id="email"
          value={emailstate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isvalid={emailstate.isvalid}
        />
        <Input
          type="number"
          label="Password"
          id="password"
          value={passwordstate.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isvalid={passwordstate.isvalid}
        />
        <Input
          type="text"
          label="College Name"
          id="collegename"
          value={collegeName}
          onChange={collegeChangeHandler}
          onBlur={validateCollegeNameHandler}
          isvalid={collegeNameIsValid}
        />
        
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
