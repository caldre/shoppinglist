import React, {useState} from "react";
import {
  shoppingCartIncrease,
  shoppingCartDecrease,
  shoppingCartRemove,
  shoppingCartChange
} from "../actions";
import { connect } from "react-redux";

const ShoppingCartItem = props => {
  const { id, name, quantity, price } = props.cartItem;
  
  const changeQuantityInInput = (e, id) => {
    e.preventDefault()
    props.shoppingCartChange(id, e.target.value)
    console.log(id, e.target.value)
  };
  const [inputValue, setInputValue] = useState(quantity)

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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={e => changeQuantityInInput(e, id)}
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
  shoppingCartRemove,
  shoppingCartChange
})(ShoppingCartItem);
