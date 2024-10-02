import React from 'react'

export default function CategoryHeading({ title }: { title: string }) {
	return (
		<h3 className='border-r border-l text-secondary-60 font-medium text-center lg:text-left text-[20px] lg:text-[22px] 2xl:text-[28px] py-10 2xl:py-[50px] px-[30px] md:px-[40px] 2xl:px-[50px]'>{title}</h3>
	)
}
