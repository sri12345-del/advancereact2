import React, { useMemo } from "react";

const Demolist = (props) => {
  const { items, reverse } = props;
  const sortedlist = useMemo(() => {
    if (reverse===true) {
      return items.sort((a, b) => a - b);
    } else {
      return items.sort((a, b) => b - a);
    }
  }, [items, reverse]);
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedlist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Demolist);
