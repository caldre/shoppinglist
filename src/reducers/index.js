import { combineReducers } from "redux";

const shoppingCartReducer = (shoppingCartList = [], action) => {
  let arrayOfIds = [];
  let indexOfItem;
  switch (action.type) {
    case "SHOPPING_CART_INCREASE":
      console.log("REDUCER: Increasing quantity");
      shoppingCartList.forEach(cartItem => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload);
      shoppingCartList[indexOfItem].quantity++;
      return [...shoppingCartList];

    case "SHOPPING_CART_DECREASE":
      console.log("REDUCER: Decreasing quantity");
      shoppingCartList.forEach(cartItem => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload);

      if (shoppingCartList[indexOfItem].quantity === 1) {
        const newState = shoppingCartList.filter(
          item => item.id !== action.payload
        );
        return [...newState];
      }

      shoppingCartList[indexOfItem].quantity--;
      return [...shoppingCartList];

    case "SHOPPING_CART_ADD":
      shoppingCartList.forEach(cartItem => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload.id);

      if (indexOfItem === -1) {
        console.log("REDUCER: Adding new item to cart");
        return [...shoppingCartList, action.payload];
      }

      const newAction = {
        type: "SHOPPING_CART_INCREASE",
        payload: action.payload.id
      };

      return shoppingCartReducer(shoppingCartList, newAction);

    case "SHOPPING_CART_REMOVE":
      const newState = shoppingCartList.filter(
        item => item.id !== action.payload
      );
      console.log("REDUCER: Removing item from cart");
      return [...newState];
    default:
      return shoppingCartList;
  }
};

const storeReducer = (storeList = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("REDUCER: Adding item to store");
      return [...storeList, action.payload];
    case "REMOVE_ITEM":
      console.log("REDUCER: Removing item from store");
      return storeList.filter(item => item.id !== action.payload.id);
    default:
      return storeList;
  }
};

const UIReducer = (
  config = {
    isAdmin: false
  },
  action
) => {
  switch (action.type) {
    case "TOGGLE_ADMIN_STATUS":
      config.isAdmin = !config.isAdmin;
      return config;
    default:
      return config;
  }
};

export default combineReducers({
  shoppingCartReducer,
  storeReducer,
  UIReducer
});
