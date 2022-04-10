import React, { useState } from 'react';

const SignUp = () => {
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');

    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignUp = async () => {
        const data = await fetch(`connection/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
        })
        const body = await data.json()
        if (body.result) {

        } else {
            setErrorsSignup(body.error)
        }
    }

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p key={i}>{error}</p>)
    })
    return (
        <div className='w-1/3 mb-20 p-5 bg-slate-400 rounded-xl'>
            <form>
                <div className="mb-6">
                    <label for="username" className="block mb-2 text-sm font-medium text-white hover:text-gray-300">Username</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-700 focus:border-red-700 block w-full p-2.5 focus:outline-none" placeholder="Ch'Mick ..." onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-white hover:text-gray-300">Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-700 focus:border-red-700 block w-full p-2.5 focus:outline-none" placeholder="test@email.com" onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-white hover:text-gray-300">Password</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-700 focus:border-red-700 block w-full p-2.5 focus:outline-none" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                </div>
                <button onClick={() => handleSubmitSignUp()} type="submit" className="text-white bg-red-700 hover:bg-red-800 ring-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center active:scale-95">Register now !</button>
            </form>
            {tabErrorsSignup}
        </div>
    )
}

export default SignUp;