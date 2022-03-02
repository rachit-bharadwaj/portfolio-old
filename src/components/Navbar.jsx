import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// icons imports
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { MdDarkMode } from 'react-icons/md'
import { BsFillBrightnessLowFill } from 'react-icons/bs'

// local imports
import navLogo from '../Resources/navLogo.jpg'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false)

  const [dark, setDark] = useState(false)


  return (
    <nav id={styles.Nav} className="relative z-10 flex-col bg-[#100f24] rounded-lg border-none bg-opacity-95 p-1">
      <div className="hidden md:flex"> 
        <div className="inline-flex w-full items-center">
          <div className="w-1/3">
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={navLogo}
              alt="Rachit's image"
            />
          </div>
          <div className="flex w-1/3 justify-center rounded-full text-indigo-900 bg-gray-200 p-2">
            <ul className="inline-flex text-xl">
              <li className="px-4 hover:font-bold hover:text-indigo-600">
                <a href="/"> Home </a>
              </li>
              <li className="px-4 hover:font-bold hover:text-indigo-600">
                <a href="#projects" onClick={() => setMobNav(false)}>
                  {' '}
                  Projects{' '}
                </a>
              </li>
              <li className="px-4 hover:font-bold hover:text-indigo-600">
                <a href="#technologies" onClick={() => setMobNav(false)}>
                  {' '}
                  Technologies{' '}
                </a>
              </li>
              <li className="px-4 hover:font-bold hover:text-indigo-600">
                <a href="#about" onClick={() => setMobNav(false)}>
                  {' '}
                  About{' '}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    <div className="mobileNav md:hidden">
        <div className="inline-flex w-full items-center">
          <div className="w-1/2 -pb-2 pt-1">
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={navLogo}
              alt="Rachit's image"
            />
          </div>
          <div className="flex w-1/2 justify-end text-white">
            
            <HiMenu
              className={mobNav ? 'hidden' : 'cursor-pointer text-4xl'}
              onClick={() => setMobNav(!mobNav)}
            />
            <AiFillCloseCircle
              className={!mobNav ? 'hidden' : 'cursor-pointer text-4xl'}
              onClick={() => setMobNav(!mobNav)}
            />
          </div>
        </div>

        <div className={mobNav ? 'absolute z-10 w-full flex-col' : 'hidden'}>
          <ul className="my-2 rounded-md border bg-[#100f24] bg-opacity-95 px-4 py-2 text-xl font-semibold text-white">
            <li className="py-2 hover:text-2xl">
              <a href="/"> Home </a>
            </li>
            <hr className="w-20 bg-indigo-100" />
            <li className="py-2 hover:text-2xl">
              <a href="#projects" onClick={() => setMobNav(false)}>
                {' '}
                Projects{' '}
              </a>
            </li>
            <hr className="w-32 bg-indigo-100" />
            <li className="py-2 hover:text-2xl">
              <a href="#technologies" onClick={() => setMobNav(false)}>
                {' '}
                Technologies{' '}
              </a>
            </li>
            <hr className="w-44 bg-indigo-100" />
            <li className="py-2 hover:text-2xl">
              <a href="#about" onClick={() => setMobNav(false)}>
                {' '}
                About{' '}
              </a>
            </li>
            <hr className="w-64 bg-indigo-100" />
          </ul>
        </div>
      </div>
    </nav>
  )
}
