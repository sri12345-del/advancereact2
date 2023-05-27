import React,{useRef} from "react"


const About = (props) => {

    const nameval=useRef()
    const emailval=useRef()
    const phoneval = useRef()
    
    const datahandler = (e) => {
        e.preventDefault()
        const obj = {
            name: nameval.current.value,
            email: emailval.current.value,
            phone:phoneval.current.value,
        }
        props.additem(obj)

    }
    return(
        <div>
            <form onSubmit={datahandler}>
                <label>Name</label><br></br>
                <input type="text" ref={nameval}></input><br></br>
                <label>email-id </label><br/>
                <input type="text" ref={emailval}></input><br/>
                <label> phone number </label><br/>
                <input type="number" ref={phoneval}></input><br/>
                <button type="onSubmit">Add item</button>
            </form>
       </div> 
    )
}

export default About