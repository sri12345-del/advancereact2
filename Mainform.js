import React from "react";
import Form from "./Form"

const Mainform=(props)=>{
    return (
        <div>
        <Form items={props.items}></Form>
        </div>
    )
}

export default Mainform;