import React from "react";
import { connect } from "react-redux";
import AddItem from "../components/AddItem";
import ShoppinCartList from "../components/ShoppingCart";

const SideContainer = props => {
  const renderContent = () => {
    return props.UIState.isAdmin ? <AddItem /> : <ShoppinCartList />;
  };

  return renderContent;
};

const mapStateToProps = state => {
  return { UIState: state.UIReducer };
};

export default connect(mapStateToProps)(SideContainer);
