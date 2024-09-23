/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeadingWithBG({ heading, subHeading, src }: { heading: string, subHeading: string, src: string }) {
	return (
		<div className='relative flex flex-col justify-center items-center text-center w-full py-12 md:py-24 2xl:py-28 border-r border-l'>
			<img src={src} alt="" className='w-full h-full absolute -z-20 opacity-20' />
			<h1 className='text-xl sm:text-2xl lg:text-4xl text-white font-bold mb-2 text-nowrap'>
				{heading}
			</h1>
			<p>
				{subHeading}
			</p>
		</div>
	)
}
