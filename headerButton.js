import Cartcontext from "../store/Cartcontext";
import classes from "./headerbutton.module.css"
import React,{useContext} from "react";
const Button = (props) => {
    const cntx=useContext(Cartcontext)
    return (
        <button className={classes.button} onClick={props.onchange}>
            <span>yourcart</span>
            <span className={classes.badge}>{cntx.quantity }</span>
        </button>
    )
}

export default Button;