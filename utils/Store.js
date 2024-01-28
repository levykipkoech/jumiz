import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  cart: { cartItemS: [] },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
    }
  }
}
