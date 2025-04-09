import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log('email is', email);
    console.log('password is', password);
    setEmail('');
    setPassword('');
  }

return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
        <div className='border-2 border-blue-700 bg-gray-800 rounded-lg p-10 shadow-lg'>
            <form  
            onSubmit={
                (e) => {
                    submitHandler(e);
                }
            } 
            className='flex flex-col p-4 items-center 
            justify-center'>
                    <input
                    value={email} 
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required className='border-2 border-blue-900 rounded-full text-xl text-white bg-gray-700 mt-10 mb-5 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' placeholder='Enter your email'/>
                    <input
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required className='border-2 border-blue-900 rounded-full text-xl text-white bg-gray-700 mb-10 px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' type='password' placeholder='Enter password' autoComplete='current-password'/>
                    <button className='bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-2 text-white text-lg font-semibold transition duration-300' type='submit'>Log in</button>
            </form>
        </div>
    </div>
)
}

export default Login
