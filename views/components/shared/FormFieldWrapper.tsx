import React from 'react'

export default function FormFieldWrapper({ label, children }: { label: string, children: React.ReactNode }) {
	return (
		<div className='flex flex-col gap-[14px] md:gap-4 2xl:gap-5 rounded-lg border  bg-secondary-15/50 px-6 md:px-[30px] 2xl:px-10 py-[18px] md:py-5 2xl:py-6'>
			<label className='font-medium text-base md:text-lg 2xl:text-[22px]'>{label}</label>
			{children}
		</div>
	)
}
