import React from 'react'
import Image from 'next/image'
import nextConfig from '../../../next.config.mjs'
const BASE_PATH = nextConfig.basePath || '';

const About = () => {
  return (
    // About me section
    <section className='relative'>
      <div className="absolute h-20 -top-20 invisible" id='aboutme'></div>
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center">About Me</h2>
        <hr className="w-1/12 mt-4 mx-auto border-2 border-black" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src={`${BASE_PATH}/about_me.jpg`} width={10000} height={10000} alt="Kengo" className="w-full rounded-3xl" />
          </div>
          <div className='space-y-3'>
            <h3 className="text-3xl font-bold">Greeting</h3>
            <p className="text-xl leading-8">
              Hi! I&apos;m Kengo Ikeuchi, a machine learning engineer. I&apos;m a graduate student at the University of Tokyo. I&apos;m interested in machine learning, deep learning, and computer vision. I&apos;m currently working on a research project on egocentric vision and diffusion models.
            </p>
            <h3 className="text-3xl font-bold">Hobbies</h3>
            <ul className="text-xl leading-8 list-disc list-inside">
              <li>Watching animes</li>
              <li>Playing PC games</li>
              <li>Disney Resort!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
