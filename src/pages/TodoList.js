import React, { useState } from "react";
import Notes from "../components/projects/todo/notes/Notes";

const TodoList = () => {
    const [notes, setNotes] = useState([{ id: 1, author: 'Todo', comment: 'This is a note' }, { id: 2, author: 'Todo', comment: 'Just fill the input, click the "Add note" button to add your note' }, { id: 3, author: 'Todo', comment: 'Click the Red Cross to delete a note' }, { id: 4, author: 'Todo', comment: 'Check how many notes you have ⬆️' }]);
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
        setNotes(notes.filter((note) => note.id !== id))
    }

    return (
        <div className="h-screen w-screen">
            <div className="w-full text-center py-5">
                <span className="text-3xl">You have </span>
                <span className="text-3xl text-red-600 font-bold">{notes.length} </span>
                <span className="text-3xl">notes</span>
            </div>
            <div>
                <form className="w-full grid grid-cols-4 mx-2">
                    <input type='text' placeholder="Note" onChange={handleChange} value={newMess} className='rounded-l-md pl-2 col-span-3 py-2'></input>
                    <button onClick={handleSubmit} className=' text-white bg-green-700 hover:bg-green-600 sm:bg-slate-700 hover:sm:bg-slate-600 md:bg-red-700 hover:md:bg-red-600 lg:bg-purple-700 hover:lg:bg-purple-600 px-5 rounded-r-md mr-3 '>Add note</button>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
                {notes.length > 0 ? notes.map((note, i) => <Notes note={note} key={i} handleDelete={handleDelete} />) : <p>There's no note</p>}
            </div>
        </div >
    )
};

export default TodoList;