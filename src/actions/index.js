import uuid from "uuid";

export const addItem = input => {
  return {
    type: "ADD_INPUT",
    payload: {
      name: input,
      id: uuid(),
      price: 10
    }
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};

export const shoppingCartAdd = item => {
  return {
    type: "SHOPPING_CART_ADD",
    payload: item
  };
};

export const shoppingCartRemove = id => {
  console.log("poistetaan");
  return {
    type: "SHOPPING_CART_REMOVE",
    payload: id
  };
};
