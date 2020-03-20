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
  let focus = false
  const changeQuantityInInput = (e, id) => {
    e.preventDefault()
    props.shoppingCartChange(id, e.target.value)
    console.log(id, e.target.value)
    focus = false
  };
  const [inputValue, setInputValue] = useState(quantity)
  const [inputFocus, setInputFocus] = useState(false)

  
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
        value={ (inputFocus) ? inputValue : quantity}
        onFocus={() => { 
          setInputValue(quantity)
          setInputFocus(true)}}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => { 
          changeQuantityInInput(e,id)
          setInputFocus(false)} }
        className="cart-item-quantity"
      ></input>
      <button
        className="cart-item-button"
        style={{ cursor: "pointer" }}
        onClick={() => { 
          
          props.shoppingCartIncrease(id)
          }
        }
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
  shoppingCartRemove,
  shoppingCartChange
})(ShoppingCartItem);
