import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsVisible: false
}

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: initialState,
    reducers: {
        togggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;