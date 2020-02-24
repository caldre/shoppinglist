import React from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AddItem />
      <List />
    </React.Fragment>
  );
}

export default App;
