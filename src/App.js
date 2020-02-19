import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const [cart, setCart] = React.useState([]);
  const addToCart = product => {
    if (cart.find(element => element.product.id === product.id)) {
      setCart(
        cart.map(item => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };
  const removeFromCart = product => {
    setCart(
      cart.filter(item => {
        return item.product.id !== product.id;
      })
    );
  };

  const [notes, setNotes] = React.useState([]);
  const addNote = note => {
    setNotes([...notes, note]);
  };

  return [products, cart, addToCart, removeFromCart, notes, addNote];
};

function App() {
  const [
    products,
    cart,
    addToCart,
    removeFromCart,
    notes,
    addNote
  ] = useProducts();
  console.log(cart);
  return (
    <BrowserRouter>
      <Header cart={cart} notes={notes} />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main className="content">
              <ProductList products={products} />
            </main>
          </div>
        </Route>
        <Route exact path="/product/:id">
          <ProductPage products={products} cart={cart} addToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
      <Footer addNote={addNote} />
    </BrowserRouter>
  );
}

export default App;
