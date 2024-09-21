import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

export default function NumberedCard({ index, title, description }: { index: number, title: string, description: string }) {
	return (
		<Card className="p-[30px] md:p-[40px] 2xl:p-[50px]">
			<CardHeader className='flex-row justify-start space-y-0 space-x-4 text-primary-80'>
				<p className='text-[80px] md:text-[120px] 2xl:text-[150px] font-semibold leading-none tracking-tighter -my-2.5 md:-my-3 2xl:-my-4'>
					{index < 10 ? '0' + index : index}
				</p>
				<div className='flex w-full h-auto justify-start items-center border-b '>
					<CardTitle className="text-[22px] md:text-[26px] 2xl:text-[38px]">{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="text-sm md:text-base 2xl:text-lg pt-3 text-secondary-60 ml-2 md:ml-3">
				{description}
			</CardContent>
		</Card>
	)
}
