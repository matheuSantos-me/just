import { CardStore } from "../../components/common";

import { useHome } from "../../_context/Home";

import "./styles/list.css";

const List = () => {
  const { products, setDatailProduct } = useHome();

  return (
    <div className="container-list">
      <div className="content-list">
        {products.map((item) => (
          <CardStore
            key={item.id}
            url={item.picture}
            title={item.title}
            price={Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.price)}
            onClick={() => setDatailProduct(item)}
          />
        ))}
      </div>
    </div>
  );
};

export { List };
