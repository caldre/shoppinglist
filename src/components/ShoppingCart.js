import React from "react";
import { shoppingCartRemove } from "../actions";
import { connect } from "react-redux";

const ShoppingCart = props => {
  const changeQuantityInInput = () => {};

  const cartRows = props.shoppingCartList.map(itemi => (
    <div
      key={itemi.id}
      className="shopping-cart-line"
      style={{ display: "flex" }}
    >
      <div className="shopping-cart-item-name">{itemi.name}</div>
      <input
        type="number"
        value={itemi.quantity}
        onChange={() => changeQuantityInInput()}
        className="shopping-cart-item-quantity"
      ></input>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.shoppingCartRemove(itemi);
        }}
      >
        POISTA
      </button>
      <span>{itemi.price * itemi.quantity}</span>
    </div>
  ));

  return <div>{cartRows}</div>;
};

const mapStateToProps = state => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps, { shoppingCartRemove })(ShoppingCart);
