import React, { useState } from 'react';

const MenuMovie = () => {

    const [searchMovie, setSearchMovie] = useState('');

    const search = async () => {
        var data = await fetch(`movies/search-movies`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `searchMovie=${searchMovie}`
        })
        const body = await data.json()
        console.log(body);
        console.log(searchMovie);
        setSearchMovie('')
    }

    return (
        <div className='flex bg-green-400 h-10 w-screen justify-center'>
            <div className='flex flex-row bg-grey w-1/3 justify-center'>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
                    placeholder="Search a title moovie..."
                    type="text"
                    onChange={(e) => setSearchMovie(e.target.value)}
                    value={searchMovie}
                />
                <button type='button'
                    className='w-1/3 rounded-r-lg border-2 bg-gray-400 border-blue-700 active:scale-95 active:bg-gray-300'
                    onClick={() => search()}
                >Search</button>
            </div>
        </div >
    )
}

export default MenuMovie;