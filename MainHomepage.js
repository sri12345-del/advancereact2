import { NavLink } from "react-router-dom"

import classes from "./Mainhomepage.module.css"

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active}   to="/welcome">welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={ classes.active} to="/product">product</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/About">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;