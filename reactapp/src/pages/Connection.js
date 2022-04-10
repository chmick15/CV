import React from 'react';
import SignUp from '../components/signUp/SignUp';
import SignIn from '../components/signIn/SignIn';

function Connection() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                <SignUp />
            </div>

            <div className='flex justify-center'>
                <SignIn />
            </div>
        </div>
    );
}


export default Connection;