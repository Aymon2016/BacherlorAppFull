import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add other reducers as needed
    },
});

export default store;