import { cn } from '@/lib/utils'
import React from 'react'

export default function FormFieldWrapper({ label, description, className, children }: { label: string, description?: string, className?: string, children: React.ReactNode }) {
	return (
		<div className={cn('w-full flex flex-col gap-[14px] md:gap-4 2xl:gap-5 rounded-lg border bg-secondary-15/50 px-6 md:px-[30px] 2xl:px-10 py-[18px] md:py-5 2xl:py-6', className)}>
			<div>
				<label className='font-medium text-base md:text-lg 2xl:text-[22px]'>{label}</label>
				{description && <p className='text-sm md:text-base 2xl:text-lg'>{description}</p>}
			</div>
			{children}
		</div>
	)
}
