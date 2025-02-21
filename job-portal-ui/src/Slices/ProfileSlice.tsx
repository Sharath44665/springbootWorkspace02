import { createSlice } from '@reduxjs/toolkit';
import { updateProfile } from '../services/ProfileService';

const ProfileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        changeProfile: (state, action) => {
            state = updateProfile(action.payload);
            return action.payload;
        },

        setProfile: (state, action) => {
            state = action.payload;
            return state;
        }

    }
})

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;

