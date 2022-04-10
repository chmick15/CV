import React, { useState } from 'react';

const Cross = () => {

    const [favorite, setFavorite] = useState(false);

    var addFavorite = () => {
        setFavorite(!favorite)
    }

    var color = 'blue'
    if (favorite) {
        color = 'yellow'
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={color} cursor="pointer" onClick={() => addFavorite()}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg >
    )
}

var CardMovie = (props) => {
    return (
        <div className='w-full bg-pink-500 m-5'>
            <Cross />
            <h2>{props.movieName}</h2>
            <img
                src={props.movieImg}
                alt={props.movieName}
                className='p-5' />
            <p>{props.movieDesc}</p>
            <p>{props.globalRating}</p>
        </div>
    )
}

export default CardMovie;