import React from 'react'
import menuItems from '../config/menuItems'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='fixed top-0 w-full z-[99]'>
      <div className='flex justify-between container'>
        <div>logo</div>
        <div className='flex space-x-2 justify-center items-center'>
          {
            menuItems.map(menuItem => {
              return (
                <Link key={menuItem.href} href={menuItem.href} className='hover:text-quaternary transition-all duration-500'>{menuItem.label}</Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
