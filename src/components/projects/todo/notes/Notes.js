import React from "react";

const Notes = ({ note, handleDelete }) => {

    return (
        <div className="bg-gradient-to-t from-yellow-300 to-yellow-500 m-2">
            <div className="flex justify-between">
                <p className="text-2xl font-bold text-center py-2 px-2">{note.author}</p>
                <span className="cursor-pointer text-red-600 text-2xl font-bold mr-2 items-center" onClick={() => handleDelete(note.id)}>x</span>
            </div>
            <div className='pb-3 px-5'>
                <p className="text-xl">{note.comment}</p>
            </div>
        </div>
    )
}

export default Notes;