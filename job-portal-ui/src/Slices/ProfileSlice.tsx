import { createSlice } from '@reduxjs/toolkit';
import { updateProfile } from '../services/ProfileService';

const profileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        changeProfile: (state, action) => {
            state = updateProfile(action.payload);
            return action.payload;
        },

        setProfile: (state, action) => {
            // state = action.payload;
            // return state;
            return { ...state, ...action.payload };
        }
        

    }
})

export const { changeProfile, setProfile } = profileSlice.actions;
export default profileSlice.reducer;

