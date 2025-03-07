import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice"
import profileReducer from './Slices/ProfileSlice'
import filterReducer from './Slices/FilterSlice'
import sortReducer from './Slices/SortSlice'
export default configureStore({
    reducer:{
        user: userReducer,
        profile: profileReducer,
        filter: filterReducer,
        sort: sortReducer
    }
})