import React from "react";

const MovieCard = ({ movie }) => {
    var note = ''
    if (movie.vote_average < 4) {
        note = 'text-red-600'
    } else if (movie.vote_average < 7) {
        note = 'text-orange-600'
    } else {
        note = 'text-green-600'
    }

    return (
        <div className="flex flex-col bg-slate-600 m-2 p-4 rounded-lg">
            <div className="flex flex-col items-center text-white text-m font-bold sm:text-l text-center bg-green-200">
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /> : <img src='../Dessin.png' alt={movie.title} />}
                <h2>- {movie.title} -</h2>
                <div className="bg-pink-400 opacity-0 hover:opacity-100 text-justify px-2 relative bottom-0 ">
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="flex flex-row px-2 bg-yellow-200 justify-around">
                <div className="flex flex-row pr-5">
                    <p>Note:&thinsp;</p>
                    <p className={note}>{movie.vote_average}/10</p>
                </div>
                <div className="flex bg-white">
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;