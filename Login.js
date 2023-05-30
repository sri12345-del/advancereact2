import classes from "./Login.module.css";
import React, { useRef ,useContext} from "react";
import {useHistory} from "react-router-dom"
import Cartcontaxt from "../store/context";

const Login = () => {
  const enteredemail = useRef();
  const enteredpassword = useRef();

  const autctx=useContext(Cartcontaxt)

  const history=useHistory()

  const onsubmithandler = (e) => {
    e.preventDefault();
    const email = enteredemail.current.value;
    const password = enteredpassword.current.value;
    fetch(
       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("key", data.idToken)
        autctx.token = data.idToken
        history.replace("/store")
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={onsubmithandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={enteredemail} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={enteredpassword} />
        </div>
        <div className={classes.actions}>
          <button> log in</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
