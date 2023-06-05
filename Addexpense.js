import React, { useRef ,useContext} from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Autcontext from "../store/autcontext";
import Expenselist from "../Component/Expenselist";

const AddExpense = () => {

  const autctx=useContext(Autcontext)
  const money=useRef()
  const description=useRef()
  const catagory=useRef()

  const additemhandler = (e) => {
    e.preventDefault();
    let obj = {
      money: money.current.value,
      description: description.current.value,
      catagory: catagory.current.value,
      id:Math.random().toString()
    }
    autctx.addexpense(obj)
    
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
      <Expenselist></Expenselist>
    </Container>
  );
};

export default AddExpense;
