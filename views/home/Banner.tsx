import React from 'react'
import { Button } from '../components/shared/Button'
import Link from 'next/link'
import { technologies } from '@/public/data'
import Image from 'next/image'

export default function Banner() {
	return (
		<>
			<div className="flex flex-col gap-10 justify-center items-center min-h-[90vh] relative sm:border-r sm:border-l border-b bg-[url('/images/Hero-bg.png')] bg-cover bg-no-repeat">
				<img src={"/images/hero.svg"} alt="" className='w-full h-1/2 bottom-0 absolute -z-20' />
				<div className='text-center text-[34px] md:text-[48px] 2xl:text-[68px] leading-tight font-semibold text-balance animate-slide-in-up delay-500 text-white'>
					<h1>Powering <span className='text-primary'>Innovation</span></h1>
					<h1><span className='text-primary'>Sparking</span> Solutions</h1>
				</div>
				<div>
					<Link href={"/contact"}>
						<Button>Contact Us</Button>
					</Link>
				</div>
			</div>
			<div className='relative sm:pt-10 sm:border-r sm:border-l'>
				<div className='hidden sm:block sm:absolute -top-[26px] sm:-top-[31px] left-[200px] sm:left-[35%] md:left-[35%] lg:left-[39%] xl:-top-[38px] xl:left-[42%] bg-background rounded-full border 2xl:px-[34px] px-[24px] py-[14px] 2xl:py-[20px] font-medium text-sm md:text-lg max-w-max'><p>Technologies  we work on</p></div>
				<div className='overflow-auto '>
					<div className={`flex gap-5  w-full justify-between`}>
						{technologies.map((technology, index) => <Image key={index} src={technology.path} height={60} width={75} alt='' className='py-[30px]'></Image>)}
					</div>
				</div>
			</div>
		</>
	)
}
