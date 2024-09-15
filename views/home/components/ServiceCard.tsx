import { Card, CardContent, CardHeader, CardTitle } from '@/views/components/shared/Card'
import React from 'react'

export default function ServiceCard({ title, description }: { title: string, description: string }) {
	return (
		<div className='glow'>
			<Card className='text-balance min-h-full'>
				<CardHeader>
					<CardTitle className='text-nowrap'>
						<p>
							<span className='text-3xl sm:text-5xl font-extrabold leading-none tracking-tight m-0 p-0 text-teal-300'>{title.split('')[0]}</span>
							<span>{title.split('').slice(1, title.length).join('')}</span>
						</p>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-sm lg:text-base'>
						{description}
					</p>
				</CardContent>
			</Card>
		</div>
	)
}
