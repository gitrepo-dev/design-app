
import { createSlice } from '@reduxjs/toolkit';
import { productCustomizeType, productCustomizePropsActionType } from 'interfaces/productCustomizeProps';

const initialState: productCustomizeType = {
  data: {
    color: '',
    caption: '',
    size: 0
  }
};

export const productCustomizePropsSlice = createSlice({
  name: 'productCustomizeProps',
  initialState,
  reducers: {
    getProductCustomizeProps: (state, action: productCustomizePropsActionType) => {
      debugger
      state.data = action.payload;
    },
    setProductCustomizeProps: (state, action: productCustomizePropsActionType) => {
      state.data = action.payload;
    }
  },
});

export const { setProductCustomizeProps } = productCustomizePropsSlice.actions;
export const getProductCustomizeProps = (state: any) => state.customizeProps.data;
export default productCustomizePropsSlice.reducer;