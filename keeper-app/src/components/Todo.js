import { useState } from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    const [note, setNote] = useState({
        title: " ",
        content: " "
    })
    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
       

    }
    const submitNote = (event) => {
        props.onAdd(note)
        setNote({
            title: " ",
            content: " "
        })
        event.preventDefault()
    }
    return (
        <>
            <div className={classes.todo}>
                <form>
                    <label htmlFor="todo">Please enter your task</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        onChange={handleChange}
                        value={note.title}
                    ></input>
                    <textarea
                        name="content"
                        rows="5"
                        value={note.content}
                        onChange={handleChange}
                    > Add a Note....</textarea>
                    <div>
                        <button type="button" onClick={submitNote}>Add</button>

                    </div>
                </form>
            </div>
        </>
    )
}
export default Todo;