import { useState, useRef ,useContext} from "react";
import { useHistory} from "react-router-dom"
import classes from "./AuthForm.module.css";
import Autcontext from "../../store/Autcontext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setisloading] = useState(false);

  const  history=useHistory()

  const context=useContext(Autcontext)

  const enteredemail = useRef();
  const enteredpassword = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onsubmithandler = (e) => {
    setisloading(true);
    e.preventDefault();
    const enteremail = enteredemail.current.value;
    const enterpassword = enteredpassword.current.value;

    var url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteremail,
        password: enterpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => {
        setisloading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            let errorMessage = "something is wrong";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        
        const tokenstring=JSON.stringify(data.idToken)
        context.login(data.idToken)
        history.replace("/")
        localStorage.setItem("key",tokenstring)

      })
      .catch((err) => {
        alert(err.message);
      });
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
          {!isloading && (
            <button>{!isLogin ? "create account" : "log in"}</button>
          )}
          {isloading && <p>...Fetchimg</p>}
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
