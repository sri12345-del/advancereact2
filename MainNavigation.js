import { NavLink } from "react-router-dom";

import classes from "./MainNavi.module.css";

const Mainnvanigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Mainnvanigation;
