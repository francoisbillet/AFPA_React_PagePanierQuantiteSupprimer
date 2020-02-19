import React from "react";

const Cart = props => {
  return (
    <ul>
      {props.cart.map(item => {
        return (
          <p id={item.product.id} key={item.product.id}>
            {`id: ${item.product.id}, quantité: ${item.quantity}`}
            <button onClick={e => props.removeFromCart(e.target.parentNode)}>
              Supprimer
            </button>
          </p>
        );
      })}
    </ul>
  );
};

export default Cart;
