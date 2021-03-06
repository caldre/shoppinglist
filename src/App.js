import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import View from "./components/View"


import Catalog from "./components/Catalog";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        
        
        <View/>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
