import React from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AddItem />
      <List />
      <br></br>

      <ShoppingCart />
    </React.Fragment>
  );
}

export default App;
