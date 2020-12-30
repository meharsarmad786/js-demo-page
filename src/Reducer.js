export const initialState = {
  basket: [],
  user: null
}

export  const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,
        user: action.user
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing the basket.

      // we cloned the basket means we check the new state after deleting the product.
      let newBasket = [...state.basket];

      // we check to see whether there exits any product in cart
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        // if item exits in basket then remove it.
        newBasket.splice(index, 1);
      }
      else {
        console.warn(`Can't remove product (id: ${action.id})`);
      }
      return {...state, basket: newBasket};
      break;
    default:
      return state;

  }
}

export default reducer;
