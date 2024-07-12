import { createSlice } from "@reduxjs/toolkit";

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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      console.log("action.payload", action.payload);

      let nextCart = JSON.parse(JSON.stringify(state.cart));
      console.log("nextCart", nextCart);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nextCart = nextCart.filter((item: any) => item.id !== action.payload.id);
      state.cart = nextCart;
    },
    removeAllFromCart: (state) => {
      state.cart = [];
    },
    increase: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    decrease: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >=0) {
        if(state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart = state.cart = state.cart.filter((item) => item.id !== action.payload.id )
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  increase,
  decrease,
} = cartSlice.actions;
export default cartSlice.reducer;
