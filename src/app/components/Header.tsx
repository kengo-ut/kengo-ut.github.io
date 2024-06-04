import React from 'react'
import Link from 'next/link'

const navItems = [
  { id: 1, name: 'About', href: '/#aboutme' },
  { id: 2, name: 'Skills', href: '/#skills' },
  { id: 3, name: 'Projects', href: '/#projects' },
]

const Header = () => {
  return (
    <header className='w-full flex justify-between px-4 py-3 bg-blue-900 text-white shadow-md md:px-6 sticky top-0 z-10'>
      <Link
        href='/'
        className='flex items-center gap-2 text-lg font-bold'
        prefetch={false}
      >
        {/* <MyIcon className="w-14 h-14" /> */}
        <span className='text-5xl hover:text-gray-300 transition-colors'>KENGO</span>
      </Link>
      <nav className='hidden md:flex items-center gap-6 font-medium text-3xl'>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className='hover:text-gray-300 transition-colors'
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function MyIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 7l10 5 10-5' />
    </svg>
  )
}

export default Header
