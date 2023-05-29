import React, { useContext } from "react";

import { Link ,useHistory} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Autcontext from "../../store/Autcontext";

const MainNavigation = () => {
  const context = useContext(Autcontext);

  const history = useHistory()
  const clickhandler = () => {
    history.replace("/auth")
    context.logout()

  }


  const islooged = context.isloogedin;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!islooged && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {islooged && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {islooged && (
            <li>
              <button onClick={clickhandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
