import { combineReducers } from "redux";

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
        newList = [...newList, item];
      } else if (item.id === action.payload) {
        item.completed = !item.completed;
        newList = [...newList, item];
      }
    });
    return newList;
  } else return todoList;
};

export default combineReducers({
  todoReducer
});
