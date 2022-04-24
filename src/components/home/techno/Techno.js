import React from "react";

const Techno = () => {

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-3 text-center p-2 bg-yellow-500 rounded-t-lg">
                    <p>Technologies</p>
                </div>
                <div className="col-span-1 px-2">
                    <div className='text-center'>
                        <p>Front-End</p>
                    </div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Tailwind CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>React Native</p>
                    <p>Redux</p>
                </div>
                <div className="col-span-1 px-2 justify-center">
                    <div className='text-center'>
                        <p>Back-End</p>
                    </div>
                    <p>Node.JS</p>
                    <p>Express</p>
                    <p>API</p>
                </div>
                <div className="col-span-1 px-2">
                    <div className='text-center'>
                        <p>Database</p>
                    </div>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    )
};

export default Techno;