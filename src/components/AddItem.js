import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const Inputti = props => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  let newItem = {
    name,
    description,
    price
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addItem(newItem);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form className="add-display">
      <input
        type="text"
        placeholder="Lisää uuden tuotteen nimi"
        onChange={e => setName(e.target.value)}
        value={name}
      ></input>
      <textarea
        placeholder="Lisää uuden tuotteen kuvaus"
        onChange={e => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <input
        type="number"
        placeholder="Lisää uuden tuotteen hinta"
        onChange={e => setPrice(e.target.value)}
        value={price}
      ></input>
      <button type="submit" onClick={e => handleSubmit(e)}>
        Lisää
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return { storeList: state.storeReducer };
};

export default connect(mapStateToProps, { addItem })(Inputti);
