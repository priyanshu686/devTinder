import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user1",
    initialState:null,
    reducers:{
        setUser:(state,action)=>{
            return action.payload;
        },
        removeUser:()=>{
            return null;
        }
    }
})

export const {setUser,removeUser} = UserSlice.actions;
export default UserSlice.reducer; 