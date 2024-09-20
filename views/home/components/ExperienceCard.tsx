import { Card, CardContent, CardHeader, CardTitle } from '@/views/components/shared/Card'
import Icon from '@/views/components/shared/Icon'
import React from 'react'

export default function ExperienceCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
	return (
		<Card className="p-[30px] md:p-[60px] 2xl:p-[80px]">
			<CardHeader className="flex-row items-center justify-start space-y-0 space-x-4">
				<Icon icon={icon} className="max-w-max" />
				<CardTitle className="text-xl 2xl:text-[26px]">{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-sm md:text-base 2xl:text-xl pt-3">
				{description}
			</CardContent>
		</Card>
	)
}
