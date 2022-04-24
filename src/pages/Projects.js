import React from "react";

const Projects = () => {

    return (
        <div className="bg-slate-400 h-full w-full flex pt-10 px-5 justify-center items-center flex-col md:flex-row">
            <a href="/project/mvp" className="bg-red-400 h-1/2 w-full mb-10 sm:h-1/2 sm:w-96 rounded-t-2xl cursor-pointer flex flex-col mx-5 items-center justify-center hover:opacity-50">
                <div className="bg-blue-400 w-2/3 h-2/3">
                </div>
                <div className="bg-orange-400 w-full h-1/3 flex flex-col justify-center items-center">
                    <div className="bg-orange-200 w-2/3 h-1/3 flex flex-row justify-center items-center">
                        <p>Veazit & Play</p>
                    </div>
                    <div className="bg-orange-100 w-2/3 h-2/3 text-justify">
                        <p>MVP of a Gamified Mobile Applicaton to visit Point Of Interest</p>
                    </div>
                </div>
            </a>
            <a href="/project/movies" className="bg-red-400 h-1/2 w-full mb-10 sm:h-1/2 sm:w-96 rounded-t-2xl cursor-pointer flex flex-col mx-5 items-center justify-center hover:opacity-50">
                <div className="bg-blue-400 w-2/3 h-2/3">
                </div>
                <div className="bg-orange-400 w-full h-1/3 flex flex-col justify-center items-center">
                    <div className="bg-orange-200 w-2/3 h-1/3 flex flex-row justify-center items-center">
                        <p>Movie App </p>
                    </div>
                    <div className="bg-orange-100 w-2/3 h-2/3 text-justify">
                        <p>Have a look and search to the movies you would like to see (or not...)</p>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Projects