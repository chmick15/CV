import React from "react";


const SearchBar = ({ searchMovie, setSearchMovie }) => {
    const resetSearch = () => {
        setSearchMovie('')
    }

    const search = () => {
        console.log('This button is useless but it is beautiful ');
    }

    return (
        <div className="flex flex-col items-center pt-3 px-2 focus:outline-none sm:flex-row">
            <input type="text"
                placeholder="Search a movie here..."
                //onChange={(e) => { }}
                onChange={(e) => setSearchMovie(e.target.value)}
                value={searchMovie}
                className='w-full px-5 py-2 rounded-lg sm:mr-2 sm:bg-slate-800 sm:text-white md:bg-white md:text-red-800 lg:text-purple-800 '></input>
            <div className="flex flew-row w-full justify-end">
                <div className="bg-red-500 align-center">
                </div>
                <button
                    onClick={() => search()}
                    className="rounded-lg p-2 my-2 bg-green-600 w-full sm:w-1/5 text-white active:scale-95 sm:bg-white sm:text-slate-600 md:text-white md:bg-red-600 lg:bg-purple-600 active:opacity-50 mx-5 hover:opacity-80">Search</button>
                <button
                    onClick={() => resetSearch()}
                    className="rounded-lg p-2 my-2 bg-green-800 w-full sm:w-1/6 text-white active:scale-95 sm:bg-white sm:text-slate-800 md:text-white md:bg-red-800 lg:bg-purple-800 active:opacity-50 hover:opacity-80">Reset</button>
            </div>
        </div >
    )
};

export default SearchBar;