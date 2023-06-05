import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import Autcontext from "../store/autcontext";
import { Button, Card, Container, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Login = () => {
  const history = useHistory();
  const [islogin, setislogin] = useState(false);
  const [formvalid, setformvalid] = useState(false);
  const [conformpassword, setconformpassword] = useState("");
  const [resetpassword, setresetpassword] = useState(false);
  const emailval = useRef();
  const passwordval = useRef();

  const resetemail = useRef();

  const autctx = useContext(Autcontext);
  const changestate = (e) => {
    e.preventDefault();
    setislogin((preval) => !preval);
  };
  const conformhandler = (e) => {
    const value = e.target.value;
    const email = emailval.current.value;
    const password = passwordval.current.value;
    setformvalid(
      email.includes("@") && password.length > 7 && value === password
    );
    setconformpassword(value);
  };
  const fetchhandler = (e) => {
    e.preventDefault();
    const email = emailval.current.value;
    const password = passwordval.current.value;
    let url;
    if (islogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("something is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (islogin) {
          autctx.addtoken(data.idToken);
          history.replace("/home");
        } else {
          setislogin(true);
        }
      })
      .catch((err) => console.log(err.message));

    emailval.current.value = "";
    passwordval.current.value = "";
    setconformpassword("");
  };

  const passwordreset = () => {
    setresetpassword(true);
  };

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: resetemail.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("somthing is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setresetpassword(false);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Container>
      {!resetpassword && (
        <Form onSubmit={fetchhandler}>
          {!islogin && <h2>Sign up</h2>}
          {islogin && <h2>Login</h2>}
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" id="email" ref={emailval}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="number"
              id="password"
              ref={passwordval}
            ></Form.Control>
          </Form.Group>
          {!islogin && (
            <Form.Group>
              <Form.Label>Conform Password</Form.Label>
              <Form.Control
                type="number"
                id="name"
                onChange={conformhandler}
                value={conformpassword}
              ></Form.Control>
            </Form.Group>
          )}
          <Button
            style={{ backgroundColor: formvalid ? "green" : "lightblue" }}
          >
            {islogin ? "login" : "signup"}
          </Button>
          {islogin && <Button onClick={passwordreset}>Foget Password</Button>}
          <Button onClick={changestate}>Have an account?login</Button>
        </Form>
      )}
      {resetpassword && (
        <Card>
          <Card.Title style={{ textAlign: "center" }}>
            Reset password
          </Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Enter the email with which you regester</Form.Label>
              <Form.Control
                type="text"
                id="email"
                ref={resetemail}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={resetPasswordHandler}>
              Send link
            </Button>
          </Form>
        </Card>
      )}
    </Container>
  );
};

export default Login;
