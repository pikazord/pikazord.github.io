import React from 'react'
import { Button } from './Button'
import Link from 'next/link'
import Image from 'next/image'

export default function ContainerWithBG({ heading, subHeading }: { heading: string, subHeading: string }) {
	return (
		<div className='relative flex flex-col justify-center items-center text-center w-full py-12 md:py-24 2xl:py-28'>
			<img src={'/images/Contact-Section.png'} alt="" className='w-full h-full absolute -z-20 opacity-20' />
			<div className='flex flex-col justify-center items-center gap-[28px] md:gap-[40px] 2xl:gap-[50px]'>
				<Image src={'/images/pikazord_p.svg'} alt='logo' width={100} height={21} className='w-[50px] md:w-[60px] 2xl:w-[80px]' />
				<div>
					<h1 className='text-xl sm:text-2xl lg:text-4xl text-white font-bold'>
						{heading}
					</h1>
					<p className='max-w-[896px]'>
						{subHeading}
					</p>
				</div>
				<Link href={"/contact"}>
					<Button>Start Project</Button>
				</Link>
			</div>
		</div>
	)
}
