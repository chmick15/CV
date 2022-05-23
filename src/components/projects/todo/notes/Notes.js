import React from "react";

const Notes = ({ note, handleDelete }) => {

    return (
        <div className="w-1/4 h-1/4 bg-gradient-to-t from-yellow-300 to-yellow-500 m-2">
            <div className="flex justify-between">
                <p className="text-2xl font-bold text-center">{note.author}</p>
                <span className="cursor-pointer" onClick={handleDelete}>X</span>
            </div>
            <p className="text-xl">{note.comment}</p>
        </div>
    )
}

export default Notes;