import React from 'react'
import menuItems from '../../config/menuItems'
import Link from 'next/link'
import Logo from './shared/Logo'

export default function Navbar() {
  return (
    <div className='fixed top-0 w-full z-[99] py-4 bg-slate-900 shadow shadow-teal-400'>
      <div className='container flex justify-between'>
        <Link href={'/'}>
          <Logo className='nav-logo hidden sm:block' />
        </Link>
        <div className='flex gap-7 justify-center items-center'>
          {
            menuItems.map(menuItem => {
              return (
                <Link key={menuItem.href} href={menuItem.href} className='text-xs sm:text-base uppercase'>{menuItem.label}</Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
