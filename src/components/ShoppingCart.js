import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { connect } from "react-redux";

const ShoppingCart = (props) => {
  const cartRows = props.shoppingCartList.map((cartItem) => (
    <ShoppingCartItem cartItem={cartItem} key={cartItem.id} />
  ));

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartRows}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps)(ShoppingCart);
