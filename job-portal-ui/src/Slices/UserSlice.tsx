import { createSlice } from '@reduxjs/toolkit';
import { getItem, removeItem, setItem } from '../services/LocalStorageService';

const UserSlice = createSlice({
    name: "user",
    initialState: getItem("user"),
    reducers: {
        setUser: (state, action) => {
            setItem("user", action.payload)
            state = action.payload;
            return state;
        },

        removeUser: (state) => {
            removeItem("user");
            state = null;
            return state;
        }

    }
})

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;

