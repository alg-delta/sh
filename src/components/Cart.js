import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, add, remove, buy } = props;
  return (
    <Alert variant="success">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p>}
      <table>
        <tr>
          <td width="25%">Назва</td>
          <td width="25%">Кількість</td>
          <td width="25%">Ціна</td>
          <td width="25%">Всього</td>
        </tr>
        {cartItems.map((product) => (
          <tr>
            <td width="25%">{product.name}</td>
            <td width="25%">
              <Button onClick={() => remove(product)} variant="danger">
                -
              </Button>
              {product.number}
              <Button onClick={() => add(product)} variant="success">
                +
              </Button>
            </td>
            <td width="25%">{product.price}</td>
            <td width="25%">{product.price * product.number}</td>
          </tr>
        ))}
      </table>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
      <Button onClick={buy} variant="success" disabled={cartItems.length === 0}>
        оформити замовлення
      </Button>
    </Alert>
  );
}
