import React from "react";
import {
  shoppingCartIncrease,
  shoppingCartDecrease,
  shoppingCartRemove
} from "../actions";
import { connect } from "react-redux";

const ShoppingCartItem = props => {
  const { id, name, quantity, price } = props.cartItem;
  const changeQuantityInInput = () => {};

  return (
    <div className="shopping-cart-row">
      <h3 className="cart-item-name">{name}</h3>
      <p className="cart-item-price">{price}€ / kpl</p>
      <button
        className="cart-item-button"
        onClick={() => {
          props.shoppingCartDecrease(id);
        }}
      >
        -
      </button>
      <input
        value={quantity}
        onChange={() => changeQuantityInInput()}
        className="cart-item-quantity"
      ></input>
      <button
        className="cart-item-button"
        style={{ cursor: "pointer" }}
        onClick={() => props.shoppingCartIncrease(id)}
      >
        +
      </button>
      <p className="cart-item-quantity">{price * quantity}€</p>
      <button
        className="cart-item-button"
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.shoppingCartRemove(id);
        }}
      >
        X
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps, {
  shoppingCartIncrease,
  shoppingCartDecrease,
  shoppingCartRemove
})(ShoppingCartItem);
