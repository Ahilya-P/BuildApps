import { createSlice } from "@reduxjs/toolkit";

const initialAuthentication = {
    isAuthenticate: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthentication,
    reducers: {
        login(state) {
            state.isAuthenticate = true;
        },
        logout(state) {
            state.isAuthenticate = false;
        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;