import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; // Make sure this import is correct

export interface RootState {
    cart: ReturnType<typeof cartSlice>;
}

const store = configureStore({
    reducer: {
        cart: cartSlice, 
    },
});

export default store;
