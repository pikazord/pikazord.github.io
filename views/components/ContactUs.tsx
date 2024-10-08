'use client'

import React, { useState } from 'react'
import ContainerWithBG from './shared/ContainerWithBG'
import FormFieldWrapper from './shared/FormFieldWrapper'
import { Input } from './shared/Input'
import CustomCheckbox from './shared/CustomCheckbox'
import { Textarea } from './shared/Textarea'
import { DualRangeSlider } from './shared/DualRangeSlider'
import { Button } from './shared/Button'
import { Form, Formik, FormikHelpers } from 'formik'
import { contactFormSchema } from '@/validations'
import { sendMail } from '@/lib/mailer'
import { useToast } from '@/hooks/use-toast'

export default function ContactUs() {
	const { toast } = useToast()
	const [rangeValues, setRangeValues] = useState([100, 5000]);

	const initialValues = {
		name: "",
		email: "",
		website: false,
		automation: false,
		mobileApp: false,
		others: false,
		message: ""
	}

	const handleSubmit = async (values: typeof initialValues, formikHelpers: FormikHelpers<typeof initialValues>) => {
		const response = await sendMail({
			subject: 'New Contact Form Submission',
			html: `
		    <h1>New Contact Form Submission</h1>
		    <p>Name: ${values.name}</p>
		    <p>Email: ${values.email}</p>
		    <p>Website: ${values.website ? 'Yes' : 'No'}</p>
		    <p>Mobile app: ${values.website ? 'Yes' : 'No'}</p>
		    <p>Automation: ${values.automation ? 'Yes' : 'No'}</p>
		    <p>Budget: ${rangeValues[0]} - ${rangeValues[1]}</p>
		    <p>Message: ${values?.message || "No message"}</p>
		  `,
		})

		if (response?.messageId) {
			toast({
				title: "Mail sent successfully",
				description: "We will get back to you soon",
			})
			formikHelpers.resetForm();
		} else {
			toast({
				variant: "destructive",
				description: "Failed to send mail",
			})
		}
	};
	return (
		<section className='border-r border-l'>
			<ContainerWithBG
				heading='Thank you for your Interest in Pikazord.'
				subHeading='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.' />
			<Formik initialValues={initialValues} validationSchema={contactFormSchema} onSubmit={handleSubmit} enableReinitialize className='px-2 md:px-0'>
				{({ setFieldValue }) => (
					<Form>
						<div className='max-w-screen-lg mx-auto flex flex-col border-r border-l p-[24px] md:p-[60px] 2xl:p-[80px] gap-[30px] 2xl:gap-[40px]'>
							<div className='flex flex-col md:flex-row justify-center items-center gap-[30px] 2xl:gap-[40px] w-full'>
								<FormFieldWrapper label="Full Name">
									<Input name='name' required />
								</FormFieldWrapper>
								<FormFieldWrapper label="Email">
									<Input type='email' name='email' required />
								</FormFieldWrapper>
							</div>
							<FormFieldWrapper label="Why are you contacting us?">
								<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
									<CustomCheckbox name='website' setFieldValue={setFieldValue} />
									<CustomCheckbox name='automation' setFieldValue={setFieldValue} />
									<CustomCheckbox name='mobileApp' setFieldValue={setFieldValue} text='mobile app' />
									<CustomCheckbox name='others' setFieldValue={setFieldValue} />
								</div>
							</FormFieldWrapper>
							<FormFieldWrapper label="Your Budget" className='py-12 md:py-12 2xl:py-12'>
								<DualRangeSlider
									label={(value) => <span>${value}</span>}
									labelPosition="bottom"
									value={rangeValues}
									onValueChange={setRangeValues}
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
					</Form>
				)}
			</Formik>

		</section>
	)
}
