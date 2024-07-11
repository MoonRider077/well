import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  titleKey: string; 
  price: string; 
  curKey: string; 
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    removeAllFromCart: (state) => {
      state.cart = [];
    },
    increase: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    decrease: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
