import React from 'react';

const Text = ({ children }) => {
    return (
        <p className='px-5 font-mono font-bold text-5xl'>{children}</p>
    )
}

function Error404() {
    return (
        <div className='pt-12 mx-auto bg-transparent h-screen'>
            <div className='flex items-center justify-center flex-col space-y-5'>
                <Text>Sorry,</Text>
                <Text>this page does NOT exist, click</Text>
                <a href='mailto:nikola.debray@hotmail.fr' className='px-5 font-mono font-bold text-5xl hover:text-red-700 hover:uppercase'>here</a>
                <Text>to send me an email</Text>
            </div>
        </div>

    );
}

export default Error404;