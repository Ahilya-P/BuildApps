import classes from "./NewCommentForm.module.css";
import { useRef } from "react";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <form className={classes.form} onSubmit={submitFormHandler}>
                <div className={classes.control} onSubmit={submitFormHandler}>
                    <label htmlFor="comment">Your Comment</label>
                    <textarea id="comment" rows="4" ref={commentTextRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className="btn">Add Comment</button>
                </div>
            </form>
        </>
    )
}
export default NewCommentForm;