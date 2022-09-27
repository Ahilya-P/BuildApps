import { useRef } from "react";
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from "./QuoteForm.module.css";
import { Prompt } from "react-router";//show warning
//store information when foprm focuse useState
import { useState } from "react";
const QuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState()
    const authorInputRef = useRef();
    const textInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        props.onAddQuote({ author: enteredAuthor, text: enteredText })
    }
    const formFocusHandler = () => {
        //  console.log("Focus!")
        setIsEntering(true)
    }
    const finishingHandler = () => {
        setIsEntering(false)
    }
    return (
        <>
            <Prompt when={isEntering}
                message={(location) => 'Are You sure you want to leave, your data will lost..'} />
            <Card>
                <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}
                    <div className={classes.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="text">Text</label>
                        <textarea id="text" rows="5" ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishingHandler} className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </>
    )
}
export default QuoteForm;