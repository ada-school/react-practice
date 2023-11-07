import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };
  const sub = () => {
    setValue(value - 1);
  };
  return [value, add, sub];
};

export default useCounter;
