import { memo } from "react";

import { InputIncrement } from "../../../../components/common";

import "./styles.css";

const CardCart = memo(function CardCart(props) {
  return (
    <div className="container-card-cart">
      <div className="content-card-cart">
        <img src={props.url} className="image-card-cart" />

        <h2 className="title-card-cart">{props.title}</h2>

        <div className="content-amount-card-cart">
          <InputIncrement
            valueText={props.valueText}
            onChangeText={props.onChangeText}
            maxAmount={props.maxAmount}
          />
          <p>{props.available} disponíveis</p>
        </div>

        <h1>{props.price}</h1>
      </div>

      <p className="del-card-cart" onClick={props.onClick}>
        EXCLUIR
      </p>

      <div className="content-divider-card-cart"></div>
    </div>
  );
});

export { CardCart };
