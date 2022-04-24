import React from "react";

const Accomplishments = () => {

    return (
        <div className="grid grid-cols-5">
            <div className="grid col-span-5 p-2 text-center bg-green-500 rounded-t-lg">
                <p>Personal Acomplishments</p>
            </div>
            <div className="grid col-span-5 py-1">
                <p>2014</p>
                <p>Degree of Social Worker</p>
            </div>
            <div className="grid col-span-5 py-1">
                <p>2017</p>
                <p>Degree in modern languages (Spanish & English) International exchange in Bogotà (Colombia) for one year</p>
            </div>
            <div className="grid col-span-5 py-1">
                <p>2019</p>
                <p>Master Degree in international management International exchanges in Glasgow (Scotland) for one semester International exchanges in Oaxaca (Mexico) for one semester</p>
            </div>
            <div className="grid col-span-5 py-1">
                <p>2020</p>
                <p>Working Holidays Visa in Colombia</p>
            </div>
            <div className="grid col-span-5 py-1">
                <p>2022</p>
                <p>Professionnal Degree in web and mobile development application (RNCP 6 - Niveau Bac +3/ Bac +4)</p>
            </div>
        </div>
    )
};

export default Accomplishments;