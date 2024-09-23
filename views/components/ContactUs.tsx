'use client'

import React, { useState } from 'react'
import ContainerWithBG from './shared/ContainerWithBG'
import FormFieldWrapper from './shared/FormFieldWrapper'
import { Input } from './shared/Input'
import CustomCheckbox from './shared/CustomCheckbox'
import { Textarea } from './shared/Textarea'
import { DualRangeSlider } from './shared/DualRangeSlider'
import { Button } from './shared/Button'

export default function ContactUs() {
	const [values, setValues] = useState([100, 5000]);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// from chatgpt
		const target = e.target as typeof e.target & {
			name: { value: string };
			email: { value: string };
			// website: { value: boolean };
			// automation: { value: boolean };
			// mobileApp: { value: boolean };
			// others: { value: boolean };
			message: { value: string };
		};
		const data = {
			name: target.name.value,
			email: target.email.value,
			// website: target.website.value,
			// automation: target.automation.value,
			// mobileApp: target.mobileApp.value,
			// others: target.others.value,
			range: `${values[0]} - ${values[1]}`,
			message: target.message.value,
		};
		console.log('Form Data:', data);

	}
	return (
		<section className='border-r border-l'>
			<ContainerWithBG
				heading='Thank you for your Interest in Pikazord.'
				subHeading='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.' />
			<form onSubmit={handleSubmit} className='px-2 md:px-0'>
				<div className='max-w-screen-lg mx-auto flex flex-col border-r border-l p-[24px] md:p-[60px] 2xl:p-[80px] gap-[30px] 2xl:gap-[40px]'>
					<div className='flex flex-col md:flex-row justify-center items-center gap-[30px] 2xl:gap-[40px] w-full'>
						<FormFieldWrapper label="Full Name">
							<Input name='name' />
						</FormFieldWrapper>
						<FormFieldWrapper label="Email">
							<Input type='email' name='email' />
						</FormFieldWrapper>
					</div>
					<FormFieldWrapper label="Why are you contacting us?">
						<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
							<CustomCheckbox name='website' />
							<CustomCheckbox name='automation' />
							<CustomCheckbox name='mobileApp' text='mobile app' />
							<CustomCheckbox name='others' />
						</div>
					</FormFieldWrapper>
					<FormFieldWrapper label="Your Message" className='py-12 md:py-12 2xl:py-12'>
						<DualRangeSlider
							label={(value) => <span>${value}</span>}
							labelPosition="bottom"
							value={values}
							onValueChange={setValues}
							min={100}
							max={30000}
							step={100}

						/>
					</FormFieldWrapper>
					<FormFieldWrapper label="Your Message">
						<Textarea name='message' />
					</FormFieldWrapper>
					<div className='flex justify-center w-full'>
						<Button type='submit' className='w-full md:max-w-max md:px-[36px] 2xl:px-[44px]'>Submit</Button>
					</div>
				</div>
			</form>
		</section>
	)
}
