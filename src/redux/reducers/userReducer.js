import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const setUserData = createAsyncThunk("user/fetchUserData", async (phoneNumber) => {
    const user = await axios.get(`http://10.0.2.2:5000/user?phoneNumber=${phoneNumber}`);
    return user.data[0];
});

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            return null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(setUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;

            })
            .addCase(setUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;