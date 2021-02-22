import React from "react";

import { Route } from "react-router-dom";

import Store from "../containers/Store";
import ShoppingCart from "../containers/ShoppingCart";
import ProductDetail from "../containers/ProductDetail";

const ChildrenRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={Store} />
      <Route exact path="/shopping-cart" component={ShoppingCart} />
      <Route exact path="/product-detail" component={ProductDetail} />
    </div>
  );
};

export default ChildrenRoutes;
