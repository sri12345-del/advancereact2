import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authaction } from "../store/index";

const Header = () => {
  const isauth = useSelector((state) => state.isauth);
  const dispatch=useDispatch()
  const logouthandler = () => {
    dispatch(authaction.loogedout())
  }
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isauth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
