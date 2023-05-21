import React from "react";
import classes from "./Available.module.css";
import Mealitem from "./Mealitems/Mealitemslist";
import Card from "../UI/Card";
const arr = [
  { id: "n1", name: "Sushi", item: "Fuinest fish and veggies", amount: 22.9,quantity:1 },
  { id: "n2", name: "Schnitzel", item: "a german specality!", amount: 16.5,quantity:1 },
  {
    id: "n3",
    name: "Barbecue Burger",
    item: "American, raw, meaty",
    amount: 12.29,
    quantity:1
  },
  {
    id: "n4",
    name: "Green Bowl",
    item: "Healthy... and green...",
    amount: 28.9,
    quantity:1
  },
];

const Dummylist = () => {
  const listitem = arr.map((item) => (
    <Mealitem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.item}
      price={item.amount}
      quantity={item.quantity}
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
