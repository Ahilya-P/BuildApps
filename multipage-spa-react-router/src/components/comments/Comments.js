import classes from "./Comments.module.css";
import NewCommentForm from './NewCommentForm';
import { useState } from "react";

const Comments = () => {
    const [isAddingComments, setIsAddingComments] = useState(false)
    const startAddCommentHandler = () => {
        setIsAddingComments(true)
    }
    return (
        <>
            <section className={classes.Comments}>
                <h2>User Comments</h2>
                {!isAddingComments && (
                    <button className="btn" onClick={startAddCommentHandler}>Add a comment</button>
                )}
                {isAddingComments &&
                    <NewCommentForm />}
                <p>Comments ...</p>
            </section>
        </>
    )
}
export default Comments;