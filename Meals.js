import { Fragment } from "react";
import Dummylist from "./Availablemeals";
import Summary from "./Summary";

const Meals = () => {
  return (
    <Fragment>
      <Summary></Summary>
      <Dummylist></Dummylist>
    </Fragment>
  );
};

export default Meals;
