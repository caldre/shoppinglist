import { combineReducers } from "redux";

const shoppingCartReducer = (shoppingCartList = [], action) => {
  if (action.type === "SHOPPING_CART_ADD") {
    return [...shoppingCartList, action.payload];
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
