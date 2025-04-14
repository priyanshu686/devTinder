import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        setfeed:(state,action)=>{
            return action.payload;
        },
        removeonedata:(state,action)=>{
            return state.filter((item)=> item._id !== action.payload)
        },
        removefeed:(state,action)=>{
            return null;
        }
    }
})

export const {setfeed,removeonedata,removefeed} = feed.actions;
export default feed.reducer;