import { createSlice } from "@reduxjs/toolkit"

export const UserSlice = createSlice({
    name:'userSlice',
    initialState:{
        user:"null"
    },
    reducers:{
        setUser(state, action){
            state.user = action.payload
        }
    }
})  

export const {setUser} = UserSlice.actions

export const UserSlicePath = (state) => state[UserSlice.name]

export default UserSlice.reducer