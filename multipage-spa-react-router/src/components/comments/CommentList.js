import CommentItem from "./CommentItem";
import classes from "./CommentList.module.css";

const CommentList =() =>{
    return(
        <>
        <ul className={classes.comments}>
            {props.comments.map((comment)=>(
                <CommentItem 
                key={comment.id}
                text={comment.text}
                ></CommentItem>
            ))}
        </ul>
        </>
    )
}
export default CommentList;