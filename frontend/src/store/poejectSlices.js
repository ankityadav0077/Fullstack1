import { createSlice } from "@reduxjs/toolkit";

const projectSlice=createSlice({
    name:"projects",
    initialState: [
    {
      title: "1. User Authentication",
      desc: "Implement user registration and login using JWT for secure authentication.",
      completed:false,
    },
    {
      title: "2. User Validation",
      desc: "Use Zod to validate input data and return clear errors.",
      completed:false,
    },
    {
      title: "3. Databases",
      desc: "Connect and model data using Mongoose with clear schemas.",
      completed:false,
    },
    {
      title: "4. Frontend ↔ Backend",
      desc: "Fix CORS, understand proxy, and create reliable API calls.",
      completed:false,
    }],
    reducers:{
        toggleComplete(state, action) {
      const index = action.payload;
      if (state[index]) {
        state[index].completed = !state[index].completed;
      }
    }
    },
})
export const {toggleComplete}=projectSlice.actions;
export default projectSlice.reducer;