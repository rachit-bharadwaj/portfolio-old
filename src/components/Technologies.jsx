import React from 'react'
import Image from 'next/image'

// icons import
import { TiHtml5 } from 'react-icons/ti'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiSass } from 'react-icons/di'
import { RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io5'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'

// local imports
import cLogo from '../Resources/cLogo.png'
import cppLogo from '../Resources/cppLogo.png'
import pythonLogo from '../Resources/pythonLogo.png'

export default function Technologies() {
  return (
    <div id="technologies" className="mt-16">
      <div className="flex justify-center">
        <h1 className="rounded-full bg-gray-100 p-1 px-6 text-3xl font-extrabold text-indigo-600 md:text-4xl">
          Technologies
        </h1>
      </div>

      <div className="hidden flex-col md:flex">
        <div className="mt-14 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-orange-600">
              {' '}
              <TiHtml5 />
            </li>
            <li className="mx-4 text-7xl text-blue-500">
              {' '}
              <DiCss3 />
            </li>
            <li className="mx-4 text-7xl text-yellow-400">
              {' '}
              <IoLogoJavascript />
            </li>
            <li className="mx-4 text-7xl text-pink-400">
              {' '}
              <DiSass />
            </li>
            <li className="mx-4 text-7xl text-purple-500">
              {' '}
              <SiBootstrap />
            </li>
            <li className="mx-4 text-7xl text-cyan-600">
              {' '}
              <SiTailwindcss />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-cyan-500">
              {' '}
              <RiReactjsFill />
            </li>
            <li className="mx-4 text-7xl ">
              {' '}
              <SiNextdotjs />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-green-600">
              {' '}
              <IoLogoNodejs />
            </li>
            <li className="mx-4 text-7xl text-gray-600">
              {' '}
              <SiExpress />
            </li>
            <li className="mx-4 text-7xl text-green-700">
              {' '}
              <SiMongodb />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4">
              {' '}
              <Image src={cLogo} width={70} height={70} />
            </li>
            <li className="mx-4">
              {' '}
              <Image src={cppLogo} width={70} height={70} />
            </li>
            <li className="mx-4">
              {' '}
              <Image src={pythonLogo} width={70} height={70} />
            </li>
          </ul>
        </div>
      </div>




      <div className="md:hidden">
        <div className="mt-14 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-orange-600">
              {' '}
              <TiHtml5 />
            </li>
            <li className="mx-4 text-7xl text-blue-500">
              {' '}
              <DiCss3 />
            </li>
            <li className="mx-4 text-7xl text-yellow-400">
              {' '}
              <IoLogoJavascript />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-pink-400">
              {' '}
              <DiSass />
            </li>
            <li className="mx-4 text-7xl text-purple-500">
              {' '}
              <SiBootstrap />
            </li>
            <li className="mx-4 text-7xl text-cyan-600">
              {' '}
              <SiTailwindcss />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-cyan-500">
              {' '}
              <RiReactjsFill />
            </li>
            <li className="mx-4 text-7xl">
              {' '}
              <SiNextdotjs />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4 text-7xl text-green-600">
              {' '}
              <IoLogoNodejs />
            </li>
            <li className="mx-4 text-7xl text-gray-600">
              {' '}
              <SiExpress />
            </li>
            <li className="mx-4 text-7xl text-green-700">
              {' '}
              <SiMongodb />
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ul className="inline-flex">
            <li className="mx-4">
              {' '}
              <Image src={cLogo} width={70} height={70} />
            </li>
            <li className="mx-4">
              {' '}
              <Image src={cppLogo} width={70} height={70} />
            </li>
            <li className="mx-4">
              {' '}
              <Image src={pythonLogo} width={70} height={70} />
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-16'>
      <hr />
      </div>
    </div>
  )
}
