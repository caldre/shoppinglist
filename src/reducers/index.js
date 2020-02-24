import { combineReducers } from "redux";

const shoppingCartReducer = (shoppingCartList = [], action) => {
  if (action.type === "SHOPPING_CART_ADD") {
    return [...shoppingCartList, action.payload];
  } else if (action.type === "SHOPPING_CART_REMOVE") {
    return shoppingCartList.filter(item => item.id !== action.payload.id);
  }
  
   else return shoppingCartList;
}

const todoReducer = (todoList = [], action) => {
  if (action.type === "ADD_INPUT") {
    return [...todoList, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return todoList.filter(item => item.id !== action.payload.id);
  }
  if (action.type === "SET_COMPLETE") {
    let newList = [];
    // id
    todoList.forEach(item => {
      if (item.id !== action.payload) {
        console.log("tämä ei muutu");
        newList = [...newList, item];
      } else if (item.id === action.payload) {
        console.log("tämä muuttui");
        item.completed = !item.completed;
        newList = [...newList, item];
      }
    });
    return newList;
  } else return todoList;

  /* switch (action.type) {
    case "ADD_INPUT":
      return [...todoList, action.payload];
    case "REMOVE_ITEM":
      return todoList.filter(item => item.id !== action.payload.id);
    case "SET_COMPLETE":
      return todoList.map((item) => {
      if (item.id === payload.id) {
        item.completed = !item.completed
      }
    }
  } */
};

export default combineReducers({
  todoReducer: todoReducer,
  shoppingCartReducer
});
