import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addItem, saveCatalogChange, toggleEditing } from "../actions";

const Inputti = (props) => {
  const [name, setName] = useState(props.inputFields.name);
  const [description, setDescription] = useState(props.inputFields.description);
  const [price, setPrice] = useState(props.inputFields.price);
  

  let newItem = {
    name,
    description,
    price,
  };


 useEffect(() => {
   setName(props.inputFields.name)
   setDescription(props.inputFields.description)
   setPrice(props.inputFields.price)
   
 }, [props.inputFields])

  const SaveButton = (props) => { 
    
   
    
  if (props.editingStatus)  { 
 
    
     return (
  <button
    onClick={() => {
      props.toggleEdit(false)
      props.saveChange({
        name,
        description,
        price,
        id: props.id
      });
 
    } }
  >
    SAVE
  </button>) }
   return null
  }
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
        placeholder="Lisää tuotteen nimi"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Lisää tuotteen kuvaus"
        value={description}
      ></textarea>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Lisää tuotteen arvo"
        value={price}
      ></input>
      
      <button type="submit" onClick={e => handleSubmit(e)}>
        Add

      </button>
      <SaveButton id = {props.inputFields.id} editingStatus = {props.editing.isEditing} saveChange = {props.saveCatalogChange} toggleEdit= {props.toggleEditing}/>
    </form>
    
  );
  
};

const mapStateToProps = (state) => {
  return {
    storeList: state.storeReducer,
    inputFields: state.inputReducer,
    editing: state.UIReducer
 };
 

};

export default connect(mapStateToProps, { addItem, saveCatalogChange, toggleEditing })(Inputti);
