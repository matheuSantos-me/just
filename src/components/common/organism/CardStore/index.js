import { memo } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const CardStore = memo(function Card(props) {
  const { push } = useHistory();

  return (
    <div
      className="container-card"
      onClick={() => {
        push("/product-detail");
        props.onClick();
      }}
    >
      <div className="content-image">
        <img src={props.url} />
      </div>

      <div className="content-card">
        <h1 className="title-card">{props.title}</h1>
        <p className="price-card">{props.price}</p>
      </div>
    </div>
  );
});

export { CardStore };
