
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
        },
    },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;