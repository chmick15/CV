import React from "react";

const Summary = () => {

    return (
        <div className="grid grid-cols-4 grid-rows-2 text-center pt-2">
            <div className="grid col-span-2 bg-purple-400 opacity-80 rounded-lg m-1 items-center lg:col-span-1">
                About me
            </div>
            <div className="grid col-span-2 bg-yellow-400 opacity-80 rounded-lg m-1 items-center lg:col-span-1">
                Technologies
            </div>
            <div className="grid col-span-2 bg-green-400 opacity-80 rounded-lg m-1 items-center lg:col-span-1">
                Personal Acomplishments
            </div>
            <div className="grid col-span-2 bg-orange-400 opacity-80 rounded-lg m-1 items-center lg:col-span-1">
                Contact
            </div>
        </div>
    )
};

export default Summary;