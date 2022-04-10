import React, { useState } from 'react';

const SignIn = () => {
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');

    const [listErrorsSignin, setErrorsSignin] = useState([])

    var handleSubmitSignIn = async () => {
        const data = await fetch(`connection/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signUpEmail}&password=${signUpPassword}`
        })
        const body = await data.json()
        if (body.result === true) {
        } else {
            setErrorsSignin(body.error)
        }
    }

    var tabErrorsSignin = listErrorsSignin.map((error, i) => {
        return (<p key={i}>{error}</p>)
    })

    return (
        <div className='w-1/3 mb-20 p-5 bg-slate-600 rounded-xl'>
            <form>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-white hover:text-gray-300">Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-700 focus:border-red-700 block w-full p-2.5 focus:outline-none" placeholder="test@email.com" onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-white hover:text-gray-300">Password</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:red-700 focus:border-red-700 block w-full p-2.5 focus:outline-none" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                </div>
                <button onClick={() => handleSubmitSignIn()} type="submit" className="text-white bg-red-700 hover:bg-red-800 ring-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center active:scale-95">Connect now !</button>
            </form>
            {tabErrorsSignin}
        </div>
    )
}

export default SignIn;