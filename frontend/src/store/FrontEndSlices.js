import { createSlice } from "@reduxjs/toolkit";

const  FrontendSlice=createSlice({
    name:"frontend",
    initialState:[
    {
      title: "Proper Layout",
      desc: "Design consistent layout: header, main, footer.",
      list: ["Header", "Main layout", "Footer"],
      completed:false,
    },
    {
      title: "Pages",
      desc: "Separate pages for each function.",
      list: ["Home – welcome", "Sign In / Login", "Todo Task", "Features – progress", "Learning & Implementations"],
      completed:false,
    }
  ],
  reducers:{
    toggleComplete(state, action) {
      const index = action.payload;
      if (state[index]) {
        state[index].completed = !state[index].completed;
      }
    }
  },
})
export const {toggleComplete}=FrontendSlice.actions;  
export default FrontendSlice.reducer;