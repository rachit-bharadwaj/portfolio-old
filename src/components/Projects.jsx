import React from 'react'
import Image from 'next/image'

import project1 from '../Resources/project1.png'
import project2 from '../Resources/project2.png'

export default function Projects() {
  return (
    <div id="projects" className="mt-16">
      <div className="flex justify-center">
        <h1 className="rounded-full bg-gray-100 p-1 px-6 text-3xl md:text-4xl font-extrabold text-indigo-600">
          Projects
        </h1>
      </div>
     <div className='md:inline-flex'>
      {/* Project 1 */}
      <div className="mt-14 md:w-1/2">
        <p className="text-xl md:text-3xl text-white">Portfolio</p>

        <div className="hidden border-4 rounded-lg p-4 mx-2 justify-center md:flex">
          <Image width={720} height={360} src={project1} />
        </div>

        <div className="flex justify-center rounded-lg border-4 md:hidden">
          <Image width={300} height={200} src={project1} />
        </div>
      </div>

      {/* Project 2 */}
      <div className="mt-14 md:w-1/2">
        <p className="text-xl md:text-3xl text-white">Spotify 2.O</p>

        <div className="hidden border-4 rounded-lg justify-center p-4 mx-2 md:flex">
          <Image width={720} height={360} src={project2} />
        </div>

        <div className="flex justify-center rounded-lg border-4 md:hidden">
          <Image width={300} height={200} src={project2} />
        </div>
      </div>
      
      </div>
      <div className='mt-6 mb-16'>
        <p className='text-white md:text-2xl'> and many more coming up...</p>
      </div>
      <hr />
    </div>
  )
}
