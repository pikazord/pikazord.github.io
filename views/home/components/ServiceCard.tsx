import { Button } from '@/views/components/shared/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/views/components/shared/Card'
import Icon from '@/views/components/shared/Icon'
import Link from 'next/link'
import React from 'react'

export default function ServiceCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
	return (
		<Card className="p-[30px] md:p-[40px] 2xl:p-[50px]">
			<CardHeader className='flex-row md:flex-col items-center md:items-start justify-start md:justify-normal md:space-y-0 space-x-4 md:space-x-0'>
				<Icon icon={icon} className="max-w-max md:mb-4" />
				<CardTitle className="text-xl md:text-2xl 2xl:text-3xl">{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-sm md:text-base 2xl:text-lg pt-3">
				{description}
			</CardContent>
			<CardFooter className='mt-10 2xl:mt-12'>
				<Link href={'/services'} className="flex w-full">
					<Button className='w-full' variant={"secondary"} size={"md"}>Learn More</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
