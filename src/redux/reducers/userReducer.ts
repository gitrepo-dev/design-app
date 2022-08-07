import { createSlice } from '@reduxjs/toolkit';
import { userInterface } from 'interfaces';
import { userAction } from 'interfaces/user';

const initialState: userInterface = {
    data: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: userAction) => {
            state.data = action.payload;
        },
        gotAllusers: (state, action: userAction) => {
            state.data = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export const gotAllusers = (state: any) => state.user.data;
export default userSlice.reducer;
