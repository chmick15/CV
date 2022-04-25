import React from "react";

const Projects = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-self-center p-5'>
            <div className="w-2/3 justify-self-center bg-slate-400 rounded-xl cursor-pointer hover:opacity-80 mb-5 md:mb-0 p-5">
                <a href="/project/mvp" >
                    <img
                    src="coverVeazit.jpg"
                    alt="Veazit & Play"
                    className="rounded-t-xl"
                    />
                    <div className="bg-white">
                        <div className="text-center font-bold">
                            <p>Veazit & Play</p>
                        </div>
                        <div className="text-justify px-2">
                            <p>MVP of a Gamified Mobile Applicaton to visit Point Of Interest</p>
                        </div>
                    </div>
                </a>
            </div>
                <div className="w-2/3 justify-self-center bg-slate-400 rounded-xl cursor-pointer hover:opacity-80 p-5">
                    <a href="/project/movies">
                    <img
                    src="coverMovie.png"
                    alt="Movie App"
                    className="rounded-t-xl"
                    />
                    <div className="bg-white">
                        <div className="text-center font-bold">
                            <p>Movie App</p>
                        </div>
                        <div className="text-justify px-2">
                            <p>Have a look and search to the movies you would like to see (or not...)</p>
                        </div>
                    </div>
                    </a>
                </div>
        </div>
        // <div className="bg-slate-400 h-full w-full flex pt-10 px-5 justify-center items-center flex-col md:flex-row">
        //     <a href="/project/mvp" className="h-1/2 w-full mb-10 sm:h-1/2 sm:w-96 rounded-t-2xl cursor-pointer flex flex-col mx-5 items-center justify-center hover:opacity-50">
        //         <div className="bg-blue-400 h-2/3">
        //             <img
        //             src="coverVeazit.jpg"
        //             alt="Veazit & Play"
        //             className="rounded-t-2xl"/>
        //         </div>
        //         <div className="bg-white w-full h-1/3 flex flex-col justify-center items-center">
        //             <div className="bg-white w-2/3 h-1/3 flex flex-row justify-center items-center">
        //                 <p>Veazit & Play</p>
        //             </div>
        //             <div className="bg-white w-2/3 h-2/3 text-justify">
        //                 <p>MVP of a Gamified Mobile Applicaton to visit Point Of Interest</p>
        //             </div>
        //         </div>
        //     </a>
        //     <a href="/project/movies" className="bg-red-400 h-1/2 w-full mb-10 sm:h-1/2 sm:w-96 rounded-t-2xl cursor-pointer flex flex-col mx-5 items-center justify-center hover:opacity-50">
        //         <div className="bg-blue-400 w-2/3 h-2/3">
        //         </div>
        //         <div className="bg-orange-400 w-full h-1/3 flex flex-col justify-center items-center">
        //             <div className="bg-orange-200 w-2/3 h-1/3 flex flex-row justify-center items-center">
        //                 <p>Movie App </p>
        //             </div>
        //             <div className="bg-orange-100 w-2/3 h-2/3 text-justify">
        //                 <p>Have a look and search to the movies you would like to see (or not...)</p>
        //             </div>
        //         </div>
        //     </a>
        // </div>
    )
};

export default Projects