import { createSlice } from "@reduxjs/toolkit";

const friends = createSlice({
    name:"friends",
    initialState:null,
    reducers:{
        addFriends:(state,action)=>{
            return action.payload;
        },
        removeFriends:(state,action)=>{
            return null;
        }
    }
});

export const {addFriends,removeFriends} = friends.actions;

export default friends.reducer;