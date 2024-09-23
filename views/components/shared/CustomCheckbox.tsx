import React from 'react'
import { Checkbox } from './Checkbox'

export default function CustomCheckbox({ name, text, ...rest }: { name: string, text?: string }) {
	return (
		<div className="flex items-center space-x-3">
			<Checkbox id={name} name={name} defaultChecked={false} {...rest} />
			<label
				htmlFor={name}
				className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm md:text-base 2xl:text-lg capitalize"
			>
				{text || name}
			</label>
		</div>
	)
}
