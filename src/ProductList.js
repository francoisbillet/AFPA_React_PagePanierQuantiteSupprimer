import React from "react";
import Product from "./Product";

const ProductList = props => {
  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          <Product
            product={product}
            removeFromCart={props.removeFromCart}
            hasRemoveAction={props.hasRemoveAction}
          />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
