import React from "react";
import { removeItem, shoppingCartAdd } from "../actions";
import { connect } from "react-redux";

const Catalog = props => {
  const listingStoreItems = props.storeList.map(storeItem => (
    <div className="shopping-item" key={storeItem.id}>
      <h3>{storeItem.name}</h3>
      <p>{storeItem.description}</p>
      <p>{storeItem.price}€</p>
      <button
        onClick={() => {
          props.removeItem(storeItem);
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          props.shoppingCartAdd(storeItem);
        }}
      >
        ADD TO CART
      </button>
    </div>
  ));
  return <div className="store-container">{listingStoreItems}</div>;
};

const mapStateToProps = state => {
  return {
    storeList: state.storeReducer,
    shoppingCartList: state.shoppingCartReducer
  };
};

export default connect(mapStateToProps, { removeItem, shoppingCartAdd })(
  Catalog
);
