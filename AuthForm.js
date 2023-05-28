import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setisloading] = useState(false);

  const enteredemail = useRef();
  const enteredpassword = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onsubmithandler = (e) => {
    setisloading(true);
    e.preventDefault();
    const email = enteredemail.current.value;
    const password = enteredpassword.current.value;

    if (isLogin) {
    } else {
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
      ).then((res) => {
        setisloading(false);
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            let errormsg = "something is wrong";
            if (data && data.error && data.error.message) {
              errormsg = data.error.message;
            }
            alert(errormsg);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
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
        {!isLogin && isloading && <p>...Fetchimg</p>}
        {!isLogin && <button type="onSubmit">Create Account</button>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
