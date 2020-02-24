import React from "react";
import { removeItem, shoppingCartAdd } from "../actions";
import { connect } from "react-redux";

const List = props => {
  const listaus = props.todoList.map(itemi => (
    <li key={itemi.id}>
      {itemi.name}
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.removeItem(itemi);
        }}
      >
        DELETE
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.shoppingCartAdd(itemi);
        }}
      >
        ADD TO CART
      </button>
    </li>
  ));
  return <div>{listaus}</div>;
};

const mapStateToProps = state => {
  return { todoList: state.todoReducer };
};

export default connect(mapStateToProps, { removeItem, shoppingCartAdd })(List);
