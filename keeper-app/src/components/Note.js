import classes from './Note.module.css';

const Note = (props) =>{
    const deleteClickHandler = ()=>{
        props.onDelete(props.id);
    }
   return(
       <>
       <div className={classes.note}>
           <h1>{props.title}</h1>
           <p>{props.content}</p>
            <button onClick={deleteClickHandler}>
                Delete
            </button>
       </div>
       </>
   )
}
export default Note;