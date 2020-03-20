import React from "react";
import {toggleAdmin} from "../actions"
import {connect} from "react-redux"





const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a onClick= {() => props.toggleAdmin(false)} href="http://localhost:3000/">ASIAKASNÄKYMÄ</a>
      <a onClick= {() => props.toggleAdmin(true)} href="http://localhost:3000/admin">ADMINNÄKYMÄ</a>
    </nav>
  );
};

export default connect (null, {toggleAdmin}) (Navbar);
