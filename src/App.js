import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import AddItem from "./components/AddItem";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Route path="/admin" component={AddItem} />
      <List />
      <br></br>
      <ShoppingCart />

      <Footer />
    </Router>
  );
}

export default App;
