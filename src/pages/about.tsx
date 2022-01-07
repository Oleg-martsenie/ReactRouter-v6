import React from 'react'

export const About = () => {
    return <>

    <div className='flex justify-center my-4'>
      <h1 className='text-2xl text-blue-500'>About <span className='bg-gray-200 p-1 text-black'>Us</span></h1>
    </div>

    <div className="flex justify-between items-start p-4">
      <ul>
        <li className='hover:underline hover:text-blue-500'><a href='/sobre/gabriel'>Gabriel</a></li>
        <li className='hover:underline hover:text-blue-500'><a href='/sobre/pedro'>Pedro</a></li>
      </ul>
    </div>
    </>
}

export default About
