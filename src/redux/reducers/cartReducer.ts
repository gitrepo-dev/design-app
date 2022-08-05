
import { createSlice } from '@reduxjs/toolkit';
import { cartStateType, cartActionType } from 'interfaces/cart';

const initialState: cartStateType = {
  isLoading: false,
  data: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartData: (state, action: any) => {
      state.data = action.payload;
    },
    setCartDataLoader: (state, action: any) => {
      state.isLoading = action.payload
    },
    setCartData: (state, action: any) => {
      state.data = action.payload;
    }
  },
});

export const { setCartData, setCartDataLoader } = cartSlice.actions;
export const getCartData = (state: any) => state.cart;
export default cartSlice.reducer;