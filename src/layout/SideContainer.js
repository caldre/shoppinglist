import React from "react"

import ShoppingCart from "../components/ShoppingCart"
import AddItem from "../components/AddItem"

const SideContainer = (props) => {
  if (props.content === "additem") {
    return <AddItem/>
  }
  else if (props.content === "shoppingcart") {
    return <ShoppingCart/>
  } else return null
};

export default SideContainer
