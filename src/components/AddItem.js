import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const Inputti = props => {
  const [state, setState] = useState("");

  const add = e => {
    e.preventDefault();
    props.addItem(state);
    setState("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Lisää uusi itemi"
        onChange={e => setState(e.target.value)}
        value={state}
      ></input>
      <button type="submit" onClick={e => add(e)}>
        Lisää
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return { todoList: state.todoReducer };
};
export default connect(mapStateToProps, { addItem })(Inputti);
