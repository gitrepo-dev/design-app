// @ product reducer
import { createSlice } from '@reduxjs/toolkit';
import { productActionType, productStateType } from 'interfaces';

const initialState: productStateType = {
  defaultStates: {
    isLoading: false,
    message: '',
    success: false
  },
  data: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductCustomizeProps: (state, action: productActionType) => {
      state.data = action.payload;
    },
    setProductCustomizeProps: (state, action: productActionType) => {
      state.data = action.payload;
    },
    setProductStates: (state, action: any) => {
      state.defaultStates = action.payload
    },
    setProductData: (state, action: productActionType) => {
      state.data = action.payload;
    }
  },
});

export const { setProductCustomizeProps, setProductStates, setProductData } = productSlice.actions;
export const getProductCustomizeProps = (state: any) => state.product.data;
export const getProductData = (state: any) => state.product;
export default productSlice.reducer;