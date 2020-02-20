import React from "react";
import ProductList from "./ProductList";

const Cart = props => {
  return (
    <section className="content">
      <ProductList
        products={props.cart}
        removeFromCart={props.removeFromCart}
        hasRemoveAction
      />
    </section>
  );
};

export default Cart;
