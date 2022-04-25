import React from "react";

const Hero = () => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div className="grid col-span-2 p-2 text-center bg-blue-500 rounded-t-lg font-semibold sm:col-span-3 md:col-span-4">
                <p className="text-center text-xl">🇫🇷&thinsp; Junior Web Developer</p>
            </div>
            <div className="grid col-span-1 text-center">
                <img
                    className='rounded-full hover:animate-spin hover:sepia duration-1000 ease-in-out p-2'
                    src='../profil.jpeg'
                    alt='avatar'
                />
            </div>
            <div className="text-justify pr-2 place-self-center sm:col-span-1 sm:items-center md:col-span-2 md:text-center md:font-semibold lg:text-4xl lg:font-normal lg:col-span-1">
                <p>This is my personnal website, I am currently searching my first job opportunity.</p>
            </div>
            <div className="grid col-span-2 sm:col-span-1 sm:justify-center md:col-span-1 lg:text-2xl">
                <div className="pl-5 underline sm:self-end md:self-end" >
                    <p>I speak:</p>
                </div>
                <div className="pl-2">
                    <p>French 🇫🇷 (mother tongue)</p>
                    <p>Spanish 🇪🇸 (bilingual)</p>
                    <p>English 🇬🇧 (fluent)</p>
                </div>
            </div>
            <div className="col-span-2 sm:col-span-2 sm:pl-2 lg:col-span-1 lg:self-center">
                <p className='italic text-center sm:text-left md:text-center'>'Aliquando et insanire jucundum est'</p>
            </div>
            <div className='bg-slate-200 text-center col-span-2 rounded-lg m-2 sm:col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-4 hover:scale-95 hover:opacity-80'>
                <a href="cvNicolas.pdf" target={'_blank'}>Download my CV here!</a>
            </div>
        </div>
    )
};

export default Hero;