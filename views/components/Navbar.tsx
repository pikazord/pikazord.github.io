'use client'

import React, { useEffect, useState } from 'react'
import menuItems from '../../config/menuItems'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './shared/Button'
import { usePathname } from 'next/navigation'
import { MobileNavbar } from './MobileNavbar'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    // Check if window is available before adding the scroll event listener
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        // Set the state based on scroll position
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={`fixed top-0 w-full z-[99] py-3 2xl:py-5 border-b px-2 sm:px-0 ${isScrolled ? 'bg-background/30 backdrop-blur-md' : 'bg-background'
      } transition-all duration-300`}>
      <div className='container flex justify-between items-center'>
        <Link href={'/'}>
          <Image src={'/images/pikazord.png'} alt='logo' width={100} height={21} className='w-[118px] 2xl:w-[177px]' />
        </Link>
        <div className='hidden lg:flex gap-1 justify-center items-center'>
          {
            menuItems.filter(menuItem => !menuItem.label.includes('Contact')).map(menuItem => {
              return (
                <Link key={menuItem.href} href={menuItem.href} className='text-sm 2xl:text-lg font-semibold'>
                  <Button variant={'ghost'} className={`px-6 py-4 ${pathname === menuItem.href ? 'bg-accent' : ''}`}>
                    {menuItem.label}
                  </Button>
                </Link>
              )
            })
          }
        </div>
        <Link href={'/contact'} className='hidden lg:block'>
          <Button>Contact Us</Button>
        </Link>
        <MobileNavbar pathname={pathname} />
      </div>
    </div>
  )
}
