import { CardCart } from "../../components/common";

import { useHome } from "../../_context/Home";

import "./styles/list.css";

const List = () => {
  const {
    shoppingCart,
    handleSetAmount,
    handleDelProductShoppingCart,
    allPrices,
  } = useHome();

  return (
    <div className="container-list-shopping-cart">
      <div className="content-list-shopping-cart">
        {shoppingCart.length ? (
          <>
            {shoppingCart.map((item) => (
              <CardCart
                key={item.id}
                title={item.title}
                url={item.picture}
                available={item.quantity}
                price={Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.priceAmount)}
                valueText={item.amount}
                maxAmount={item.quantity}
                onChangeText={(amount) =>
                  handleSetAmount({ id: item.id, amount: amount })
                }
                onClick={() => handleDelProductShoppingCart(item.id)}
              />
            ))}

            <div className="allPrices-list-shopping-cart">
              <h1>
                Total{" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(allPrices)}
              </h1>
            </div>
          </>
        ) : (
          <div className="content-list-empty-shopping-cart">
            <h1>O seu carrinho está vazio</h1>
            <p>Não sabe o que comprar? Milhões de produtos esperam por você!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { List };
