import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"


import vectorImg from '../Resources/vectorImg.png'

export default function Welcome() {
  return (
    <div className="mt-10 flex-col px-1">
      <h1 className="text-3xl font-bold text-white">
      &lt; &gt; <br /> <br />
        <p className="text-5xl font-bold md:text-6xl"> Hello!</p>{' '}
        <p className="mt-2 font-extrabold text-indigo-600 md:text-5xl">
          I'm Rachit, a programmer.
        </p> <br />
        &lt;/&gt;
      </h1>
      <div className="flex justify-center pt-5 pb-10 md:-mt-72 md:justify-end">
        <Image width={500} height={500} src={vectorImg} />
      </div>
      <hr />
    </div>
  )
}
