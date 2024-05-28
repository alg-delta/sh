import "./App.css";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data1 from "./data1";
import data2 from "./data2";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert("Ваше замовлення прийнято");
  };

  return (
    <div className="App">
      <BrowserRouter basename="sh">
        <Header count={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Main products={data} add={add} />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
          <Route
            path="/auto"
            element={
              <div>
                <Main products={data1} add={add} />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
          <Route
            path="/moto"
            element={
              <div>
                <Main products={data2} add={add} />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
