import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Expenselist from "../Component/Expenselist";
import { useDispatch } from "react-redux";
import { expenseaction } from "../store/Expenststore";
import { useSelector } from "react-redux";
const AddExpense = () => {
  const [money, setmoney] = useState("");
  const [description, setdescription] = useState("");
  const [catagory, setcatagory] = useState();

  const dispatch = useDispatch();

  const arritem = useSelector((state) => state.expense.item);

  const moneyhandler = (e) => {
    setmoney(e.target.value);
  };
  const descriptionhandler = (e) => {
    setdescription(e.target.value);
  };

  const catagoryhandler = (e) => {
    setcatagory(e.target.value);
  };

  const [expenseitem, setexpenseitem] = useState([]);

  useEffect(() => {
    fetch("https://react-http-735b2-default-rtdb.firebaseio.com/expense.json", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("smething is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        //setexpenseitem([]);
        for (let key in data) {
          let newobj = { ...data[key], key: key };
          // setexpenseitem((item) => [...item, newobj]);
          dispatch(expenseaction.addfromapi(newobj));
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  const additemhandler = (e) => {
    e.preventDefault();
    let obj = {
      money: money,
      description: description,
      catagory: catagory,
      id: Math.random().toString(),
    };

    fetch("https://react-http-735b2-default-rtdb.firebaseio.com/expense.json", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("something is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        let newobj = {
          ...obj,
          key: data.name,
        };
        dispatch(expenseaction.Addfromform(newobj));
        // setexpenseitem((item) => [...item, newobj]);
      });
  };

  const deletehandler = (item) => {
    console.log(item)
    console.log(arritem)
    arritem.filter(data=>data==item)
    fetch(
      `https://react-http-735b2-default-rtdb.firebaseio.com/expense/${item}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("something is wrong");
        } else {
          return res.json();
        }
      })
      .then(() => {
        dispatch(expenseaction.deleteexpense(item));
        console.log(arritem)
        console.log("expense sucessfully deleted");
      })
      .catch((err) => console.log(err));
  };

  const edithandler = (item) => {
    const editfilter = arritem.filter((val) => val.key != item);
    editfilter.map((item) => dispatch(expenseaction.Addfromform(item)));
    console.log(arritem);
    fetch(
      `https://react-http-735b2-default-rtdb.firebaseio.com/expense/${item}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          money: money,
          description: description,
          catagory: catagory,
        }),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("somthing is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Container style={{ alignItems: "center" }}>
      <Card style={{ width: "50%", padding: "2rem 3rem", margin: "5% 25%" }}>
        <Form>
          <Form.Group>
            <Form.Label>Money</Form.Label>
            <Form.Control
              type="amount"
              onChange={moneyhandler}
              value={money}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={descriptionhandler}
              value={description}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose catagory</Form.Label>
            <Form.Select onChange={catagoryhandler} value={catagory}>
              <option value="food">food</option>
              <option value="petrol">petrol</option>
              <option value="salary">salary</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" onClick={additemhandler}>
            Additem
          </Button>
        </Form>
      </Card>
      <Expenselist
        items={arritem}
        delete={deletehandler}
        edit={edithandler}
      ></Expenselist>
    </Container>
  );
};

export default AddExpense;
