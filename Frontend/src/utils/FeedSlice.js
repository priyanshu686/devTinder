import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        setfeed:(state,action)=>{
            return action.payload;
        },
        removefeed:(state,action)=>{
            return null;
        }
    }
})

export const {setfeed,removefeed} = feed.actions;
export default feed.reducer;