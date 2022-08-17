import React from 'react'

function Login() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center'>
        <div className='w-[25%] bg-gray-200  h-40 flex flex-col mt-60 p-10 justify-around'>
        <input type="text" className='p-2'/>
        <input type="text" className='p-2'/>
        <button className='bg-blue-400'>Login</button>
        </div>
        
    </div>
  )
}

export default Login