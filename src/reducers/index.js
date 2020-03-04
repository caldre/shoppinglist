import { combineReducers } from "redux";

const shoppingCartReducer = (shoppingCartList = [], action) => {
  if (action.type === "SHOPPING_CART_ADD") {
    let arrayOfIds = [];
    shoppingCartList.forEach(cartItem => {
      arrayOfIds.push(cartItem.id);
    });
    console.log(arrayOfIds);

    // JOS ITEMI LÖYTYY KAUPASTA
    let indexOfItem = arrayOfIds.indexOf(action.payload.id);
    if (indexOfItem !== -1) {
      // MUUTETAAN SITÄ
      console.log("YRITETÄÄN MUUTTAA ITEMIÄ");
      console.log("ENNEN: " + shoppingCartList[indexOfItem].quantity);
      shoppingCartList[indexOfItem].quantity++;
      console.log("JÄLKEEN: " + shoppingCartList[indexOfItem].quantity);
      return [...shoppingCartList];
    }
    // JOS ITEMI EI LÖYDY KAUPASTA
    else if (indexOfItem === -1) {
      // LISÄTÄÄN SE
      return [...shoppingCartList, action.payload];
    } else return shoppingCartList;
  } else if (action.type === "SHOPPING_CART_REMOVE") {
    console.log("reducerin poisto");
    return shoppingCartList.filter(item => item.id !== action.payload.id);
  } else return shoppingCartList;
};

const todoReducer = (todoList = [], action) => {
  if (action.type === "ADD_INPUT") {
    return [...todoList, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return todoList.filter(item => item.id !== action.payload.id);
  } else return todoList;
};

export default combineReducers({
  shoppingCartReducer,
  todoReducer
});
