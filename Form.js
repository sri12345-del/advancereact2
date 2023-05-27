import React,{useRef} from "react";

const Form = () => {
    const  titleval=useRef()
    const  openingText=useRef()
    const dateval = useRef()
    
    const datahandler = (e) => {
        e.preventDefault();
        const obj = {
            id: Math.random().toString(),
            title: titleval.current.value,
            openingText: openingText.current.value,
            Release:dateval.current.value,
        }
        console.log(obj)
    }

    
    return (
        <form onSubmit={datahandler}>
            <label>Title</label><br/>
            <input type="text" ref={titleval}></input><br/>
            <label>Opening Text</label><br/>
            <input type="textarea"  ref={openingText}></input><br/>
            <label>Release Date</label><br/>
            <input type="Date" ref={dateval}></input><br />
            <button type="onSubmit">Add Movies</button>
      </form>
  )  
}

export default Form;