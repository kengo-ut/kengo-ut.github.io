'use client'

import React from 'react'
import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
// import { TbBinaryTree } from "react-icons/tb";
import { SiThealgorithms } from 'react-icons/si'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
})

const navItems = [
  { id: 1, icon: FaXTwitter, href: 'https://x.com/keng1001uni' },
  { id: 2, icon: SiThealgorithms, href: 'https://atcoder.jp/users/signal110' },
  { id: 3, icon: FaGithub, href: 'https://github.com/kengo-ut' },
]

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center'>
      <video
        autoPlay
        loop
        muted
        preload='true'
        playsInline
        style={{
          height: '600px',
          width: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='/hero.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='w-fit absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 space-y-10'>
        <h1
          className={`${sourceCodePro.className} text-7xl text-white font-semibold text-center typing`}
          style={{
            height: '80px',
          }}
        >
          I&apos;m Ken, a ML engineer!
        </h1>
        <nav className='flex justify-center space-x-10 text-6xl text-white'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {<item.icon className='hover:text-gray-500 transition-colors' />}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Hero
