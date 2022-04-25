import React from "react";

const Contact = () => {

    return (
        <div>
            <div className="text-center p-2 bg-orange-500 rounded-t-lg text-xl font-semibold">
                <p>Contact</p>
            </div>
            <div className='p-2 lg:text-center lg:text-xl'>
                <p>Do not hesitate to <a href='mailto:nikola.debray@hotmail.fr' className="text-white"> contact me here</a> by mail!</p>
            </div>
        </div>
    )
};

export default Contact;