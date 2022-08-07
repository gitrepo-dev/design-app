
import { createSlice } from '@reduxjs/toolkit';
import { defaultStates } from 'interfaces';
import { cartStateType, cartActionType } from 'interfaces/cart';

const initialState: cartStateType = {
  defaultStates: {
    isLoading: false,
    message: '',
    success: false
  },
  data: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartData: (state, action: cartActionType) => {
      state.data = action.payload;
    },
    setCartStates: (state, action: defaultStates) => {
      state.defaultStates = action.payload
    },
    setCartData: (state, action: cartActionType) => {
      state.data = action.payload;
    }
  },
});

export const { setCartData, setCartStates } = cartSlice.actions;
export const getCartData = (state: any) => state.cart;
export const getCartStates = (state: any) => state.cart.defaultStates;
export default cartSlice.reducer;