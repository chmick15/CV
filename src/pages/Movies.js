import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/projects/movie/movieCard';
import SearchBar from '../components/projects/movie/searchBar';

const Movies = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&region=US&include_image_language=en,null`
        ).then((res) => setMoviesData(res.data.results))
    }, [searchMovie, page])

    // useEffect(() => {
    //     axios.get(
    //         `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_MOVIE_DB}&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&region=EN&include_image_language=en,null&query=${searchMovie}`
    //     ).then((res) => setMoviesData(res.data.results))
    // }, [searchMovie, page])

    const nextPage = () => {
        setPage(page + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const previousPage = () => {
        setPage(page - 1)
        if (page <= 1) {
            setPage(1);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} setMoviesData={setMoviesData} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {moviesData.length > 0 ? moviesData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                )) : <p className='text-center text-5xl'>No results</p>}
            </div>
            <div className='flex flex-row justify-center items-center'>
                <button onClick={() => previousPage()}
                    className='bg-green-800 text-white p-1 rounded-md active:opacity-50 active:scale-90 sm:bg-slate-800 md:bg-red-800 lg:bg-purple-800'>&lt; Previous</button>
                <p className='text-2xl mx-3'>{page}</p>
                <button onClick={() => nextPage()}
                    className='bg-green-800 text-white p-1 rounded-md active:opacity-50 active:scale-90 sm:bg-slate-800 md:bg-red-800 lg:bg-purple-800'>Next &gt;</button>
            </div>
        </div>
    )
}

export default Movies;