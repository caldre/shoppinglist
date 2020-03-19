import React from "react";
import Navbar from "./Navbar";

import { connect } from "react-redux";

const Header = props => {
  return (
    <div className="header">
      <h1>verkkis</h1>
      <Navbar />
    </div>
  );
};

const mapStateToProps = state => {
  return { UIState: state.UIReducer };
};

export default connect(mapStateToProps)(Header);
