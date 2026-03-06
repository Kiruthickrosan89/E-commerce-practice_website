import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import { UserSlice } from './slice/userSlice'


export const store = configureStore({
    reducer: {
        [UserSlice.name]: userReducer
    }
})