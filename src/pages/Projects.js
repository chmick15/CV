import React from "react";

const Projects = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-self-center p-5'>
            <div className="w-2/3 justify-self-center bg-slate-400 rounded-xl cursor-pointer hover:opacity-70 mb-5 p-5">
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
            <div className="w-2/3 justify-self-center bg-slate-400 rounded-xl cursor-pointer hover:opacity-70 mb-5 p-5">
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
            <div className="w-2/3 justify-self-center bg-slate-400 rounded-xl cursor-pointer hover:opacity-70 p-5">
                <a href="/project/todo">
                    <img
                        src="coverTodo.png"
                        alt="Todo App"
                        className="rounded-t-xl"
                    />
                    <div className="bg-white">
                        <div className="text-center font-bold">
                            <p>Todo App</p>
                        </div>
                        <div className="text-justify px-2">
                            <p>Write what you have to do on a note and erase it once you dit it !</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Projects