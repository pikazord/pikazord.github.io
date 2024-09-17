import Image from 'next/image'
import React from 'react'

export default function Logo({ className = '' }) {
	return (
		<div className='flex justify-center items-center text-3xl select-none font-nunito'>
			<Image src="images/pikazord_p.svg" alt='logo' width={45} height={31} />
			<p className={`text-slate-200 ml-[1px] ${className}`}>ikazord</p>
		</div>
	)
}
