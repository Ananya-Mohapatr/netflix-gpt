import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './userSlice';

const AppStore = configureStore({
    reducer : userReducer,
});
export default AppStore