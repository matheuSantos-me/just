import { useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IconButton } from "@material-ui/core";

import "./styles.css";

const InputIncrement = (props) => {
  console.log(props, "todas as props");
  const [amount, setAmount] = useState(props.valueText);

  const select = (value) => props.onChangeText(value);

  useEffect(() => {
    select(amount);
  }, [amount]);

  return (
    <div className="container-input-increment">
      <IconButton
        onClick={() => setAmount(amount === 1 ? 1 : amount - 1)}
        disabled={amount === 1 ? true : false}
      >
        <RemoveIcon />
      </IconButton>
      <p>{amount}</p>
      <IconButton
        onClick={() => setAmount(amount + 1)}
        disabled={amount === props.maxAmount ? true : false}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export { InputIncrement };
