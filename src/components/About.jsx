import React from 'react'

// icons import
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <div id="about" className="my-16 text-white">
      <div className="flex justify-center">
        <h1 className="rounded-full bg-gray-100 p-1 px-6 text-3xl font-extrabold text-indigo-600 md:text-4xl">
          About
        </h1>
      </div>
      <div>
        <p className="mt-14 md:text-2xl">
          Hey there! <br /> I'm{' '}
          <span className="text-indigo-600 font-bold"> Rachit Bharadwaj</span> , and I
          usually spend hours doing things I love, coding is one of them.{' '}
        </p>
        <p className="pt-8 text-lg font-bold md:text-2xl">Connect with me</p>

        <div className="pt-4">
          <ul className='inline-flex'>
            <li className='mx-2 text-4xl md:text-5xl'> <a href="https://github.com/rachit-bharadwaj"> <AiFillGithub /> </a> </li>
            <li className='mx-2 text-4xl md:text-5xl'> <a href="https://www.linkedin.com/in/rachitbharadwaj/"> <AiFillLinkedin /> </a> </li>
            <li className='mx-2 text-4xl md:text-5xl'> <a href="https://instagram.com/rrachiitt"> <AiFillInstagram /> </a> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
