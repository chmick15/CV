import React from "react";

const Hero = () => {

    return (
        <div className="grid grid-cols-2">
            <div className="grid col-span-2 p-2 text-center bg-blue-500 rounded-t-lg font-semibold">
                <p className="text-center text-xl">🇫🇷&thinsp; Junior Web Developer</p>
            </div>
            <div className="grid col-span-1 text-center">
                <img
                    className='rounded-full hover:animate-spin hover:sepia duration-1000 ease-in-out p-2'
                    src='../profil.jpeg'
                    alt='avatar'
                />
            </div>
            <div className="text-justify pr-2 place-self-center">
                <p>This is my personnal website, I am currently searching my first job opportunity.</p>
            </div>
            <div className="grid col-span-2">
                <div className="pl-5 underline">
                    <p>I speak:</p>
                </div>
                <div className="pl-2">
                    <p>French 🇫🇷 (mother tongue)</p>
                    <p>Spanish 🇪🇸 (bilingual)</p>
                    <p>English 🇬🇧 (fluent)</p>
                </div>
                <p className='italic text-center'>'Aliquando et insanire jucundum est'</p>
            </div>
            <div className='bg-slate-200 text-center col-span-2 rounded-lg m-2'>
                <a href="cvNicolas.pdf" target={'_blank'}>Download my CV here!</a>
            </div>
        </div>
    )
};

export default Hero;