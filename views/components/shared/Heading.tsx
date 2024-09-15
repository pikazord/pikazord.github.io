import React from 'react'

export default function Heading({ text }: { text: string }) {
	return (
		<h1 className='text-left text-balance text-xl sm:text-2xl lg:text-4xl text-white font-bold inline-block'>
			{text.toUpperCase()}
		</h1>
	)
}
