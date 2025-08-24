import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./poejectSlices";
import frontendReducer from "./FrontEndSlices";
import backendReducer from "./BackEndSlices";
const store=configureStore({
    reducer:{
        projects:projectReducer,
        backend:backendReducer,
        frontend:frontendReducer,
    }
})
export default store;