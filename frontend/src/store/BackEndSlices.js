import { createSlice } from "@reduxjs/toolkit";

const BackendSlice=createSlice({
    name:"backend",
    initialState:[
    {id:1, title: "Middleware", desc: "Use middleware for auth, parsing, logging.",completed:false, },
    { id:2,title: "Global Error Handler", desc: "Return consistent error responses from server.",completed:false, }
  ],
  reducers:{
    toggleComplete(state, action) {
      const index = action.payload;
      if (state[index]) {
        state[index].completed = !state[index].completed;
      }
    }
  }
})
export const {toggleComplete}=BackendSlice.actions;
export default BackendSlice.reducer;