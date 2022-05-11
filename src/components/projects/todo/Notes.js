import React from "react";

const Notes = ({ note }) => {

    return (
        <div className="w-1/4 h-1/4 bg-orange-400 m-2">
            <p>{note.author}</p>
            <p>{note.comment}</p>
        </div>
    )
}

export default Notes;