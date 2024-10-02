import { cn } from '@/lib/utils'
import React from 'react'
import "@/styles/icon.css"

export default function Icon({ icon, className }: { icon: React.ReactNode, className?: string }) {
	return (
		<div className={cn("inline-flex items-center justify-center text-primary rounded-lg p-4 md:p-5 2xl:p-6 text-2xl 2xl:text-[40px] icon h-[58px] lg:h-[70px]", className)}>
			{icon}
		</div>
	)
}
