import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { connect } from "react-redux";

const ShoppingCart = (props) => {
  const cartRows = props.shoppingCartList.map((cartItem) => (
    <ShoppingCartItem cartItem={cartItem} key={cartItem.id} />
  ));
  const endSum = () => {
    let sum = 0;
    props.shoppingCartList.forEach(
      (cartItem) => (sum += cartItem.quantity * cartItem.price)
    );
    return <p className="total-sum">Total Sum: {sum}€</p>;
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartRows}
      {endSum()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps)(ShoppingCart);
