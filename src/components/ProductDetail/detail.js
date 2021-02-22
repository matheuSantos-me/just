import { Button } from "../../components/common";

import "./styles/detail.css";

const Detail = (props) => {
  return (
    <div className="container-detail">
      <div className="content-detail">
        <div className="content-image-detail">
          <img src={props.url} />
        </div>

        <div className="content-detail-product">
          <h2 className="title-detail-product">{props.title}</h2>
          <h1 className="price-detail-product">{props.price}</h1>
          <div className="amount-detail-product">
            <h3>Estoque disponível:</h3> <p>{props.amount}</p>
          </div>
          <Button text="COMPRAR AGORA" onClick={props.onClick} />
        </div>
      </div>

      <p className="description-detail-product">{props.description}</p>
    </div>
  );
};

export { Detail };
