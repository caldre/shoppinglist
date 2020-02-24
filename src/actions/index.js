import uuid from "uuid";

export const addItem = input => {
  return {
    type: "ADD_INPUT",
    payload: {
      name: input,
      id: uuid(),
      completed: false
    }
  };
};

export const setComplete = id => {
  return {
    type: "SET_COMPLETE",
    payload: id
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};
