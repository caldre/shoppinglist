import React from "react"
import { connect } from "react-redux";

import SideContainer from "../layout/SideContainer"
import Catalog from "./Catalog"



const View = (props) => {
    
    if (props.UIState.isAdmin) {
        
        return (
        <div>    
        <Catalog/>
        <SideContainer content="additem"/>
        </div>
        )
    }
    else if (!props.UIState.isAdmin) {
        return (
            <div>
             <Catalog/>
             <SideContainer content="shoppingcart" />   
             </div>
        )    
    
        }

   
}

const mapStateToProps = (state) => {
    return {
      UIState: state.UIReducer,
    };
  };

export default connect(mapStateToProps)(View)