import React, { useState, useEffect } from 'react';
import CardMovie from '../components/cardMovie/CardMovie';
import MenuMovie from '../components/menuMovie/MenuMovie';

function Movies() {

    const [moviesList, setMoviesList] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');

    useEffect(() => {
        async function loadDatas() {
            var rawResponse = await fetch(`/movies`);
            var response = await rawResponse.json()
            setMoviesList(response.dataAPI.results);
        }
        loadDatas()
    }, [])

    useEffect(() => {
        async function searchMoviz() {
            var rawResp = await fetch(`movies/search-movies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `searchMovie=${searchMovie}`
            })
            var resp = await rawResp.json()
            setSearchMovie(resp.dataAPI.results);
        }
        searchMoviz()
    }, [])
    console.log(searchMovie);

    var movies = moviesList.map((movie, i) => {

        var result = movie.overview
        if (result.length > 80) {
            result = result.slice(0, 80) + '...'
        }
        var image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '../profil.jpeg';

        return (<CardMovie key={i} movieName={movie.title} movieDesc={result} movieImg={image} globalRating={movie.vote_average} />)
    })


    return (
        <div className='bg-violet-400'>
            <MenuMovie />
            <br />
            <div className='max-w-2xl mx-auto px-4 py-4 lg-max-w-7xl grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 '>
                {movies}
            </div>
        </div >
    );
}

export default Movies;