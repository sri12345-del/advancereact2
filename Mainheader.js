import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Mainheader.module.css";
import React from "react";
import { useSelector } from "react-redux";

const Mainheader = () => {

  const looged=useSelector(state=>state.auth.loogedin)
  return (
    <Navbar bg="dark">
      <Container className={classes.header}>
        <h1>Expense tracker</h1>
        <nav>
          <ul>
            <li>{!looged && <NavLink to="/auth">Login</NavLink>}</li>
            <li>{looged && <NavLink to="/home">Home</NavLink>}</li>
            <li>
              {looged && (
                <NavLink to="/addexpense">AddExpense</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Navbar>
  );
};

export default Mainheader;
