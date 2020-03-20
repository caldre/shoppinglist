import React from "react";
import { removeItem, shoppingCartAdd } from "../actions";
import { connect } from "react-redux";


const Catalog = props => {
  console.log(props.adminStatus)

  const ADMINdelete = (props) => { 
     console.log(props.status) 
     console.log(props.item)
  if (props.status)  { 
    
     return (
  <button
    onClick={() => {
      props.remove(props.item);
    } }
  >
    DELETE
  </button>) }
   return null
  }

  const listingStoreItems = props.storeList.map(storeItem => (
    <div className="shopping-item" key={storeItem.id}>
      <h3>{storeItem.name}</h3>
      <p>{storeItem.description}</p>
      <p>{storeItem.price}€</p>
      <ADMINdelete item={storeItem} status={props.adminStatus} remove={props.removeItem}/>
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
    shoppingCartList: state.shoppingCartReducer,
    adminStatus: state.UIReducer.isAdmin
  };
};

export default connect(mapStateToProps, { removeItem, shoppingCartAdd })(
  Catalog
);
