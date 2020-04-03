import React from "react";
import CatalogItem from "./CatalogItem";
import {
  removeItem,
  shoppingCartAdd,
  toggleEditing,
  changeInputs,
} from "../actions";
import { connect } from "react-redux";

const Catalog = (props) => {
  console.log(props.adminStatus);

  const ADMINdelete = (props) => {
    console.log(props.status);
    console.log(props.item);
    if (props.status) {
      return (
        <button
          onClick={() => {
            props.remove(props.item);
          }}
        >
          DELETE
        </button>
      );
    }
    return null;
  };
  const ADMINedit = (props) => {
    if (props.adminStatus) {
      return (
        <button
          onClick={() => {
            props.editingStatus(true);
            props.inputChange(
              props.item.name,
              props.item.description,
              props.item.price,
              props.item.id

            );
          }}
        >
          EDIT
        </button>
      );
    }
    return null;
  };

  const listingStoreItems = props.storeList.map((storeItem) => (
    <div className="product-wrapper" key={storeItem.id}>
      <CatalogItem value={storeItem} />
      <div className="product-buttons">
        <ADMINdelete
          item={storeItem}
          status={props.adminStatus}
          remove={props.removeItem}
        />
        <button
          onClick={() => {
            props.shoppingCartAdd(storeItem);
          }}
        >
          ADD TO CART
        </button>
        <ADMINedit
          item={storeItem}
          editingStatus={props.toggleEditing}
          adminStatus={props.adminStatus}
          inputChange={props.changeInputs}
        />
      </div>
    </div>
  ));
  return <div className="store-container">{listingStoreItems}</div>;
};

const mapStateToProps = (state) => {
  return {
    storeList: state.storeReducer,
    shoppingCartList: state.shoppingCartReducer,
    adminStatus: state.UIReducer.isAdmin,
    editingStatus: state.UIReducer.isEditing,
  };
};

export default connect(mapStateToProps, {
  removeItem,
  shoppingCartAdd,
  toggleEditing,
  changeInputs,
})(Catalog);
