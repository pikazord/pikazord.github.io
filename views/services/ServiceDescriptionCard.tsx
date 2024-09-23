import { Card, CardContent, CardHeader } from '@/views/components/shared/Card'
import Icon from '@/views/components/shared/Icon'
import React from 'react'

export default function ServiceDescriptionCard({ description, icon }: { description: string, icon: React.ReactNode }) {
	return (
		<Card className="p-[30px] md:p-[60px] 2xl:p-[80px]">
			<CardHeader className="flex-row items-center justify-start space-y-0 space-x-4">
				<Icon icon={icon} className="max-w-max" />
			</CardHeader>
			<CardContent className="text-base 2xl:text-xl pt-3 font-medium">
				{description}
			</CardContent>
		</Card>
	)
}
