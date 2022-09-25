import React from "react";
import classes from './counter.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/CounterSlice";
const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);
    //used to get different pieces of data from state



    const toggleCounterHandler = () => {
        // dispatch({type:"toggle"})
        dispatch(counterActions.toggle());
    }

    const incrementHandler = () => {
        // dispatch({ type: 'Increment' })
        //dispatching action "type" only we learn more on dispatching type.
        //action is an object with type property

        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        // dispatch({ type: 'Decrement' })
        dispatch(counterActions.decrement());
    }
    const increaseByHandler = () => {
        // dispatch({ type: "IncreseBy5", amount: 5 })
        //here amount is hard coded value
        dispatch(counterActions.increase(5));
        //pass payload value inside curly braces or normal we can put value
    }

    return (
        <>
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                {/* <div className={classes.value}>----Counter Value----</div> */}
                {show && <div className={classes.value}>{counter}</div>}
                <div>
                    <button className={classes.btn} onClick={incrementHandler}>Increment</button>
                    <button className={classes.btn} onClick={increaseByHandler}>Increased By 5</button>
                    <button className={classes.btn} onClick={decrementHandler}>Decrement</button>
                </div>
                <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>

            </main>
        </>
    )
}
export default Counter