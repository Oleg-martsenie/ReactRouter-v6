import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return <>
    <div className='flex flex-col items-center p-10 bg-slate-50	'>
      <div className="mb-8  w-full ">
        <h1 className='text-center p-4 text-6xl font-bold text-yellow-400'>Oops!</h1>
      </div>
      <div className='mb-8'>
        <Link to="/" className='border-2 border-blue-400 px-8 py-2 rounded-2xl text-2xl'>Come back to home</Link>
      </div>
      <div className="img-area w-3/5">
        <img 
        src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/1c12918bf704832.png" 
        alt="skunks" 
        className='w-full'/>
      </div>
    </div>
    </>
}

export default NotFound
