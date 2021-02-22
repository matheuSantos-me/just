import { Detail } from "../../components/ProductDetail";

import { useHome } from "../../_context/Home";

import "./styles.css";

const ProductDetail = () => {
  const { detailProduct, handleAddProductCart } = useHome();

  return (
    <div className="container-product-detail">
      <Detail
        url={detailProduct.picture}
        title={detailProduct.title}
        price={Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(detailProduct.price)}
        amount={detailProduct.quantity}
        description={detailProduct.description}
        onClick={handleAddProductCart}
      />
    </div>
  );
};

export default ProductDetail;
