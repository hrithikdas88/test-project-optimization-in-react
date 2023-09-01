import React, { useState, useCallback } from "react";
import Item from "./Item";

const InputValues = () => {
  const [values, setValues] = useState([
    { value: "", id: "1" },
    { value: "", id: "2" },
    { value: "", id: "3" },
  ]);

  const changeValue = useCallback(
    (id, value) => {
      setValues((prevItems) =>
        prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, value };
          }
          return item;
        })
      );
    },
    [setValues]
  );
  return (
    <div>
      <p>{JSON.stringify(values)}</p>
      <div>
        {values.map((value) => {
          return (
            <Item
              key={value.id}
              id={value.id}
              value={value.value}
              onChange={changeValue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputValues;
