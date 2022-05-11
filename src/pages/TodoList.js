import React, { useState } from "react";
import Notes from "../components/projects/todo/Notes";

const TodoList = () => {
    const [notes, setNotes] = useState([{ id: 1, author: 'Nicolas', comment: 'This is a message' }, { id: 2, author: 'Pierre', comment: 'It is another message' }]);

    return (
        <div className="h-screen w-screen">
            {notes.length > 0 ? notes.map((note) => <Notes note={note} />) : <p>There's no note</p>}
        </div>
    )
};

export default TodoList;