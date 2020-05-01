import React from "react";
import {toggleAdmin} from "../actions"
import {connect} from "react-redux"





const Navbar = (props) => {
  return (
    <nav className="navbar">
      <button onClick= {() => props.toggleAdmin(false)} >ASIAKASNÄKYMÄ</button>
      <button onClick= {() => props.toggleAdmin(true)} >ADMINNÄKYMÄ</button>
    </nav>
  );
};

export default connect (null, {toggleAdmin}) (Navbar);
