import React from "react";
import classes from "./Headercomponent.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

const Headercomponent = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuthenticate)

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
    return (
        <>
            <header className={classes.header}>
                <h1>Redux Auth</h1>
                {isAuth &&
                    <nav>
                        <ul>
                            <li>
                                <a href="/">My Products</a>
                            </li>
                            <li>
                                <a href="/">My Sales</a>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </ul>
                    </nav>
                }
            </header>
        </>
    )
}
export default Headercomponent;