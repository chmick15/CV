import React, { useState } from "react";
import Notes from "../components/projects/todo/notes/Notes";

const TodoList = () => {
    const [notes, setNotes] = useState([{ id: 1, author: 'Nicolas', comment: 'This is a message' }, { id: 2, author: 'Pierre', comment: 'It is another message' }]);
    const [newMess, setNewMess] = useState('')

    const handleChange = (e) => {
        setNewMess(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const comment = newMess
        const author = 'À faire'
        notes.push({ id, comment, author })
        setNewMess('')
    }

    const handleDelete = (id) => {
        const updatedNote = [...notes]
        const index = updatedNote.findIndex((note) => note.id === id)
        updatedNote.splice(index, 1)
        setNotes(updatedNote)
    }

    return (
        <div className="h-screen w-screen">
            <h1>{notes.length}</h1>
            {notes.length > 0 ? notes.map((note, id) => <Notes note={note} key={id} handleDelete={handleDelete} />) : <p>There's no note</p>}
            <form>
                <input type='text' placeholder="Note" onChange={handleChange} value={newMess}></input>
                <button onClick={handleSubmit}>Add note</button>
            </form>
        </div>
    )
};

export default TodoList;