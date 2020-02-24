import React from "react";
import { removeItem, setComplete } from "../actions";
import { connect } from "react-redux";

const List = props => {
  const listaus = props.todoList.map(itemi => (
    <li
      onClick={() => {
        props.setComplete(itemi.id);
      }}
      key={itemi.id}
      style={
        itemi.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      {itemi.name}
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.removeItem(itemi);
        }}
      >
        X
      </span>
    </li>
  ));
  return <div>{listaus}</div>;
};

const mapStateToProps = state => {
  return { todoList: state.todoReducer };
};

export default connect(mapStateToProps, { removeItem, setComplete })(List);
