import React from "react";

const Text = ({ children }) => {
    return (
        <p className='px-5 font-mono font-bold text-5xl text-center'>{children}</p>
    )
}

const Page404 = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Text>Sorry,😞</Text>
            <p className='px-5 font-mono font-bold text-5xl text-center'>this page does not exist,</p>
            <p className='px-5 font-mono font-bold text-5xl text-center'>but</p>
            <a href='mailto:nikola.debray@hotmail.fr' className='px-5 font-mono font-bold text-5xl hover:text-green-800 hover:sm:text-slate-800 hover:md:text-red-800 hover:lg:text-purple-800  hover:uppercase'>click here</a>
            <Text>to send me an email 😃</Text>
        </div>

    );
}

export default Page404;