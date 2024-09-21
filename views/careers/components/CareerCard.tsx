import { Card, CardContent, CardHeader, CardTitle } from '@/views/components/shared/Card'
import React from 'react'

export default function CareerCard({ title, description }: { title: string, description: string }) {
	return (
		<Card className="p-[30px] md:p-[40px] 2xl:p-[50px]">
			<CardHeader className='flex-row justify-start space-y-0 space-x-4 text-primary-80'>
				<div className='flex w-full h-auto justify-start items-center border-b '>
					<CardTitle className="text-[22px] md:text-[26px] 2xl:text-[38px]">{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="text-sm md:text-base 2xl:text-lg pt-3 text-secondary-60">
				{description}
			</CardContent>
		</Card>
	)
}
