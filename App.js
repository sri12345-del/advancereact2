import React, { useState, useCallback, useMemo } from "react";
import Demolist from "./Demolist";
import Button from "./button";
import "./App.css";

function App() {
  const [listtitle, setlistitle] = useState("mylist");

  const [buttontitle, setbuttontitle] = useState(true);

  const [reverseitem, setreverseitem]=useState(false)

  const changetitlehandler = useCallback(() => {
    setlistitle("new title");
  }, []);
  const listitem = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortitemhandler = () => {
    setbuttontitle(!buttontitle);
    setreverseitem(!reverseitem)
  };

  return (
    <div className="card">
      <Demolist title={listtitle} items={listitem} reverse={reverseitem}></Demolist>
      <Button onClick={changetitlehandler}>Change list item</Button>
      <Button onClick={sortitemhandler}>
        {buttontitle?"Change to ascending order":"Change to descending order"}
      </Button>
    </div>
  );
}

export default App;
