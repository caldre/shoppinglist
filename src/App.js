import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import SideContainer from "./layout/SideContainer";

import AddItem from "./components/AddItem";
import Catalog from "./components/Catalog";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Navbar />
        <SideContainer></SideContainer>
        <Route exact path="/admin" component={AddItem} />
        <Route exact path="/" component={ShoppingCart} />
        <Catalog />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
