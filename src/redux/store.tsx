import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './cartSlice';

export interface RootState {
    cart: ReturnType<typeof cartSlice>;
}

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
    reducer: {
        cart: persistedReducer, 
    },
});

export const persistor = persistStore(store);
export default store;
