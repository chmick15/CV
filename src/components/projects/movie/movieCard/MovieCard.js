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
            <div className="flex flex-col items-center group text-white text-m font-bold sm:text-l text-center relative hover-opacity-50 hover:grayscale hover::opacity-95 transition-all duration-1000">
                <div className="md:text-xl">
                    {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /> : <img src='../Dessin.png' alt={movie.title} />}
                    <h2>{movie.title}</h2>
                </div>
                <div className="bg-slate-500 opacity-0 group-hover:opacity-100 text-justify rounded-b-xl px-2 absolute transition-opacity duration-1000 h-full overflow-auto">
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="flex flex-row px-2 justify-around">
                <div className="flex flex-row pr-5 items-end font-bold md:text-xl">
                    <p>Note:&thinsp;</p>
                    <p className={note}>{movie.vote_average}/10</p>
                </div>
                {/* <div className="flex bg-white">
                    <button>Add</button>
                </div> */}
            </div>
        </div>
    )
};

export default MovieCard;