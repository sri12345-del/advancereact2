import React, { useEffect, useRef , useState} from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Expenselist from "../Component/Expenselist";

const AddExpense = () => {

  const money=useRef()
  const description=useRef()
  const catagory = useRef()
  
  const [expenseitem, setexpenseitem] = useState([])
  
  useEffect(() => {
    fetch("https://react-http-735b2-default-rtdb.firebaseio.com/expense.json", {
      method: "GET",
    }).then(res => {
      if (!res.ok) {
        throw new Error("smething is wrong")
      } else {
        return res.json()
      }
    }).then(data => {
      for (let key in data) {
        setexpenseitem(item=>[...item,data[key]])
       }
    }).catch(err=>console.log(err.message))
  },[])

  const additemhandler = (e) => {
    e.preventDefault();
    let obj = {
      money: money.current.value,
      description: description.current.value,
      catagory: catagory.current.value,
      id:Math.random().toString()
    }
    console.log(obj)
    fetch("https://react-http-735b2-default-rtdb.firebaseio.com/expense.json", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type":"application/json"
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error("something is wrong")
      } else {
        return res.json()
      }
    }).then(data => {
      console.log(data.name)
    })
    setexpenseitem(item=>[...item,obj])
    
  }
  return (
    <Container style={{alignItems:"center"}}>
      <Card style={{width:"50%", padding:"2rem 3rem", margin:"5% 25%"}}>
        <Form>
          <Form.Group>
            <Form.Label>Money</Form.Label>
            <Form.Control type="amount" ref={money}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" ref={description}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose catagory</Form.Label>
            <Form.Select ref={catagory}>
              <option>food</option>
              <option>petrol</option>
              <option>salary</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" onClick={additemhandler}>Additem</Button>
        </Form>
      </Card>
      <Expenselist items={expenseitem}></Expenselist>
    </Container>
  );
};

export default AddExpense;
