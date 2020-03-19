import uuid from "uuid";

const addItem = item => {
  const { name, description, price } = item;
  console.log("ACTION: addItem");
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuid(),
      name,
      description,
      price
    }
  };
};

const removeItem = id => {
  console.log("ACTION: removeItem");
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};

const shoppingCartAdd = item => {
  console.log("ACTION: shoppingCartAdd");
  item.quantity = 1;
  return {
    type: "SHOPPING_CART_ADD",
    payload: item
  };
};

const shoppingCartRemove = id => {
  console.log("ACTION: shoppingCartRemove");
  return {
    type: "SHOPPING_CART_REMOVE",
    payload: id
  };
};

const shoppingCartIncrease = id => {
  console.log("ACTION: shoppingCartIncrease");
  return {
    type: "SHOPPING_CART_INCREASE",
    payload: id
  };
};

const shoppingCartDecrease = id => {
  console.log("ACTION: shoppingCartDecrease");
  return {
    type: "SHOPPING_CART_DECREASE",
    payload: id
  };
};
const shoppingCartChange  = (id, quantity) => {
  console.log("ACTION: shoppingChangeQuantity")
  return {
    type: "SHOPPING_CART_CHANGE_QUANTITY",
    payload: { id, quantity }
  }
}

const toggleAdmin = isAdmin => {
  console.log(`Toggling admin-status to:`);
  return {
    type: "TOGGLE_ADMIN_STATUS",
    payload: isAdmin
  };
};


export {
  addItem,
  removeItem,
  shoppingCartAdd,
  shoppingCartRemove,
  shoppingCartIncrease,
  shoppingCartDecrease,
  shoppingCartChange,
  toggleAdmin
};
