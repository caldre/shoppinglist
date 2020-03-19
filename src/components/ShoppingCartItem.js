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
      <h3>{name}</h3>
      <button
        onClick={() => {
          props.shoppingCartDecrease(id);
        }}
      >
        -
      </button>
      <input
        value={quantity}
        onChange={() => changeQuantityInInput()}
        className="shopping-cart-item-quantity"
      ></input>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => props.shoppingCartIncrease(id)}
      >
        +
      </button>
      <p>{price * quantity}</p>
      <button
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
