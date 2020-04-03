import React from "react";
import { connect } from "react-redux";
import AddItem from "../components/AddItem";
import ShoppinCartList from "../components/ShoppingCart";

const SideContainer = (props) => {
  return props.UIState.isAdmin ? <AddItem /> : <ShoppinCartList />;
};

const mapStateToProps = (state) => {
  return {
    UIState: state.UIReducer,
    ShoppinCartList: state.shoppingCartReducer,
  };
};

export default connect(mapStateToProps)(SideContainer);
