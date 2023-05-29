import React, { useRef, useContext } from "react";
import {useHistory} from "react-router-dom"
import classes from "./ProfileForm.module.css";
import Autcontext from "../../store/Autcontext";

const ProfileForm = () => {
  const history=useHistory()
  const autctx = useContext(Autcontext);

  const enterednewpassword = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    const enterval = enterednewpassword.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCenENgt4LrLH79u1_uh-2mToo1R_OEeRM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: autctx.token,
          password: enterval,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/")
    });
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={enterednewpassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
