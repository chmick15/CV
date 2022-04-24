import React from "react";

const Hero = () => {

    return (
        <div className="grid grid-cols-2 p-2">
            <div className="grid col-span-1 items-center">
                <img
                    className='rounded-full hover:animate-spin hover:sepia duration-1000 ease-in-out p-2'
                    src='../profil.jpeg'
                    alt='avatar'
                />
            </div>
            <div className="grid col-span-1 text-justify px-2">
                <p className="text-center">🇫🇷&thinsp; Junior Software Developer</p>
                <p>This is my personnal website</p>
                <p>Currently searching my first job opportunity</p>
            </div>
            <div className="grid col-span-2">
                <p>I speak:</p>
                <p>French 🇫🇷 (mother tongue)</p>
                <p>Spanish 🇪🇸 (bilingual)</p>
                <p>English 🇬🇧 (fluent)</p>
                <p className='italic text-center'>'Aliquando et insanire jucundum est'</p>
            </div>
            <div className='bg-white text-center col-span-2 rounded-lg m-2'>
                <button onClick={() => window.open('https://www.canva.com/design/DAE98uJRpGo/view', '_blank')}>Download my CV here!</button>
            </div>
        </div>
    )
};

export default Hero;