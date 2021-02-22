import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import HTTPClient from "../../server";

const Context = createContext();

const HomeProvider = ({ children }) => {
  const { push } = useHistory();

  const [products, setProducts] = useState([]);

  const [detailProduct, setDatailProduct] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);
  const [allPrices, setAllPrices] = useState(0);

  const listProducts = async () => {
    try {
      const { data } = await HTTPClient.get();
      setProducts(data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    listProducts();
  }, []);

  const sumAllPricesShoppingCart = () => {
    let newValues = 0;
    const allValueProducts = (obj) => (newValues += obj.priceAmount);
    shoppingCart.forEach(allValueProducts);

    return newValues;
  };

  useEffect(() => {
    setAllPrices(sumAllPricesShoppingCart());
  }, [shoppingCart]);

  const handleAddProductCart = () => {
    const existCart = shoppingCart.filter(
      (item) => item.id === detailProduct.id
    );
    const cartFindIndex = products.findIndex(
      (item) => item.id === detailProduct.id
    );

    if (existCart.length) {
      shoppingCart.splice(cartFindIndex, 1);
      const amount = existCart[0].amount + 1;
      const priceAmount = existCart[0].price * amount;

      setShoppingCart([
        ...shoppingCart,
        {
          ...existCart[0],
          amount: amount,
          priceAmount: priceAmount,
        },
      ]);
    } else {
      setShoppingCart([
        ...shoppingCart,
        { ...detailProduct, amount: 1, priceAmount: detailProduct.price },
      ]);
    }

    push("/shopping-cart");
  };

  const handleSetAmount = ({ id, amount }) => {
    const findProduct = shoppingCart.filter((item) => item.id === id);
    const findIndexProduct = shoppingCart.findIndex((item) => item.id === id);
    const priceAmount = findProduct[0].price * amount;
    shoppingCart.splice(findIndexProduct, 1);

    setShoppingCart([
      ...shoppingCart,
      { ...findProduct[0], amount: amount, priceAmount: priceAmount },
    ]);
  };

  const handleDelProductShoppingCart = (id) => {
    const findIndexProduct = shoppingCart.findIndex((item) => item.id === id);
    shoppingCart.splice(findIndexProduct, 1);
    const copyShoppingCart = shoppingCart.filter((item) => item.id != id);

    setShoppingCart(copyShoppingCart);
  };

  return (
    <Context.Provider
      value={{
        products,
        detailProduct,
        setDatailProduct,
        shoppingCart,
        handleAddProductCart,
        handleSetAmount,
        handleDelProductShoppingCart,
        allPrices,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useHome = () => {
  const context = useContext(Context);

  return context;
};

export { HomeProvider, useHome };
