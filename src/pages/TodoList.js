import React, { useState } from "react";
import Notes from "../components/projects/todo/notes/Notes";

const TodoList = () => {
    const [notes, setNotes] = useState([{ id: 1, author: 'Todo', comment: 'This is a note' }, { id: 2, author: 'Todo', comment: 'Just fill the input, click the "Add note" button to add your note' }, { id: 3, author: 'Todo', comment: 'Click the Red Cross to delete a note' }]);
    const [newMess, setNewMess] = useState('')

    const handleChange = (e) => {
        setNewMess(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const comment = newMess
        const author = 'Todo'
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
            <h1 className=" text-center text-3xl">I have {notes.length} notes</h1>
            <div className="grid grid-cols-1">
                <form>
                    <input type='text' placeholder="Note" onChange={handleChange} value={newMess}></input>
                    <button onClick={handleSubmit}>Add note</button>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-10">
                {notes.length > 0 ? notes.map((note, id) => <Notes note={note} key={id} handleDelete={handleDelete} />) : <p>There's no note</p>}
            </div>
        </div >
    )
};

export default TodoList;