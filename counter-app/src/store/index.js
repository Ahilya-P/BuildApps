

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import counterReducer from './CounterSlice';

// const redux = require('redux')


// const counterReducer = (state = initialState, action) => {
//     if (action.type === "Increment")
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     if (action.type === "IncreseBy5")
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     if (action.type === "Decrement")
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     if (action.type === "toggle")
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//             // we want to toggle thats why we put ! mark.
//         }
//     return state;
// }


//store has only one reducer , take an object as an argument----- key value pair
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});




export default store;