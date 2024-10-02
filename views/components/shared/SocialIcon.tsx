import { cn } from '@/lib/utils'
import React from 'react'

export default function SocialIcon({ icon, className }: { icon: React.ReactNode, className?: string }) {
	return (
		<div className={cn("inline-flex items-center justify-center text-primary rounded-lg p-4 2xl:p-5 text-xl 2xl:text-2xl faq-number", className)}>
			{icon}
		</div>
	)
}
