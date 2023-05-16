import React, { Fragment } from "react";
import classes from "./Available.module.css";
import Mealitem from "./Mealitems/Mealitemslist";
import Card from "../UI/Card";
const arr = [
  { id: "n1", name: "Sushi", item: "Fuinest fish and veggies", amount: "22.9" },
  { id: "n2", name: "Schnitzel", item: "a german specality!", amount: "16.5" },
  {
    id: "n3",
    name: "Barbecue Burger",
    item: "American, raw, meaty",
    amount: "12.29",
  },
  {
    id: "n4",
    name: "Green Bowl",
    item: "Healthy... and green...",
    amount: "28.9",
  },
];

const Dummylist = () => {
  const listitem = arr.map((item) => (
    <Mealitem
      key={item.id}
      name={item.name}
      description={item.item}
      price={item.amount}
    ></Mealitem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{listitem}</ul>
      </Card>
    </section>
  );
};

export default Dummylist;
