import {NavLink} from "react-router-dom"
const Mainheader = () => {
    return (
        <nav>
            <ul>
                <li>
                <NavLink to="./auth">Login</NavLink>
                </li>
                <li>
                    <NavLink to="./home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Mainheader