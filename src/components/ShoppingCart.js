import React from "react";
import { shoppingCartRemove } from "../actions";
import { connect } from "react-redux";

const ShoppingCart = props => {
  console.log(props);
  const listaus = props.shoppingCartList.map(itemi => (
    <li key={itemi.id}>
      <span> {itemi.quantity}</span> {itemi.name}
      <span style={{ cursor: "pointer" }}></span>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.shoppingCartRemove(itemi);
        }}
      >
        POISTA
      </button>
      <span>{itemi.price}</span>
    </li>
  ));
  return <div>{listaus}</div>;
};

const mapStateToProps = state => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps, { shoppingCartRemove })(ShoppingCart);
