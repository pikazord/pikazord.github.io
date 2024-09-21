import React from 'react'

export default function Heading({ title, description, tagline = "" }: { title: string, description: string, tagline?: string }) {
	return (
		<div className='border-b px-[30px] md:px-[40px] 2xl:px-[50px] flex flex-col space-y-8 lg:space-y-10 2xl:space-y-12'>
			<div>
				<h1 className='font-semibold text-[28px] lg:text-[38px] 2xl:text-5xl'>
					{title}
				</h1>
				<p className='mt-[6px] lg:mt-[10px] 2xl:mt-[14px] text-secondary text-sm lg:text-base 2xl:text-lg'>
					{description}
				</p>
			</div>
			{
				tagline &&
				<div className='rounded-lg bg-secondary-15 px-[10px] 2xl:px-[14px] py-[10px] 2xl:py-3 max-w-max'>
					<p>{tagline}</p>
				</div>
			}

		</div>
	)
}
