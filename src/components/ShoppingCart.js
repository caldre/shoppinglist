import React from "react";
import { shoppingCartRemove } from "../actions";
import { connect } from "react-redux";

const ShoppingCart = props => {
  const listaus = props.shoppingCartList.map(itemi => (
    <li key = {itemi.id}>
      {itemi.name}
      <span
        style={{ cursor: "pointer" }}
        
        
      >
        +
      </span>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.shoppingCartRemove(itemi.id);
        }}
      >
        -
      </span>
    <span>{itemi.price}}</span>
    </li>
  )
  );
  return <div>{listaus}</div>;
};

const mapStateToProps = state => {
  return { shoppingCartList: state.shoppingCartReducer };
};

export default connect(mapStateToProps, { shoppingCartRemove })(ShoppingCart);
