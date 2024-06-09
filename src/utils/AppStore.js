import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './userSlice';
import moviesReducer from './MovieSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'

const AppStore = configureStore({
    reducer : {
        user: userReducer,
        movies : moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
});
export default AppStore