import { combineReducers } from "redux";

const shoppingCartReducer = (shoppingCartList = [], action) => {
  let arrayOfIds = [];
  let indexOfItem;
  switch (action.type) {
    case "SHOPPING_CART_INCREASE":
      console.log("REDUCER: Increasing quantity");
      shoppingCartList.forEach((cartItem) => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload);
      shoppingCartList[indexOfItem].quantity++;
      return [...shoppingCartList];

    case "SHOPPING_CART_DECREASE":
      console.log("REDUCER: Decreasing quantity");
      shoppingCartList.forEach((cartItem) => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload);

      if (shoppingCartList[indexOfItem].quantity === 1) {
        const newState = shoppingCartList.filter(
          (item) => item.id !== action.payload
        );
        return [...newState];
      }

      shoppingCartList[indexOfItem].quantity--;
      return [...shoppingCartList];

    case "SHOPPING_CART_ADD":
      shoppingCartList.forEach((cartItem) => arrayOfIds.push(cartItem.id));
      indexOfItem = arrayOfIds.indexOf(action.payload.id);

      if (indexOfItem === -1) {
        console.log("REDUCER: Adding new item to cart");
        return [...shoppingCartList, action.payload];
      }

      const newAction = {
        type: "SHOPPING_CART_INCREASE",
        payload: action.payload.id,
      };

      return shoppingCartReducer(shoppingCartList, newAction);

    case "SHOPPING_CART_REMOVE":
      const newState = shoppingCartList.filter(
        (item) => item.id !== action.payload
      );
      console.log("REDUCER: Removing item from cart");
      return [...newState];
    case "SHOPPING_CART_CHANGE_QUANTITY":
      console.log("REducer: SHOPPING_CART_CHANGE_QUANTITY");
      console.log(action.payload);
      const newShoppingCartList = shoppingCartList.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
          return item;
        }
        return item;
      });
      return newShoppingCartList;
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
    case "SAVE_CATALOG_CHANGE":
      console.log("KATALOOGI"+action.payload.inputFields.id)
        const newStoreList = storeList.map(item => { if (item.id === action.payload.inputFields.id) {
        item.price = action.payload.inputFields.price
        item.description = action.payload.inputFields.description
        item.name = action.payload.inputFields.name
        return item
      }
      return item
        })
      return newStoreList
    
    default:
      return storeList;
  }
};

const UIReducer = (
  config = {
    isAdmin: false,
    isEditing: false,
  },
  action
) => {
  switch (action.type) {
    case "TOGGLE_ADMIN_STATUS":
      console.log(action);
      config.isAdmin = action.payload;
      return config;
    case "TOGGLE_EDITING":
      config.isEditing = action.payload;
      return config;
    default:
      return config;
  }
};

const inputReducer = (inputFields = {
  name: "",
  description: "", 
  price: "",
  id: ""}, 
  action) => {
  switch (action.type) {
    case "CHANGE_INPUTS":
      console.log(action);
      const newInput = {
      name: action.payload.name,
      description: action.payload.description,
      price: action.payload.price ,
      id: action.payload.id}
      return newInput
  default:
    return inputFields  
  }
};

export default combineReducers({
  shoppingCartReducer,
  storeReducer,
  UIReducer,
  inputReducer,
});
