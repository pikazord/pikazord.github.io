import React from 'react'
import Heading from '../components/shared/Heading'

export default function AboutUs() {
	return (
		<section id='about' className='container mt-16'>
			<Heading text="About Us" />
			<div className='flex flex-col md:flex-row justify-between items-start'>
				<p className='text-lg font-semibold'>We are a dynamic softwre firm with a fresh approach, but our team brings a wealth of experience to the table. Our CTO has over 10 years of industry expertise, leading the technical vision of the company with a focus on cutting-edge technologies. Our other team members have an average of 3 to 4 years of experience, specializing in areas like automation, web development, and blockchain. We also have a dedicated UI/UX designer with 4 years of experience, ensuring our solutions are as user-friendly as they are technically robust. Together, we&apos;re passionate about delivering innovative solutions tailored to our clients needs.</p>
			</div>
		</section>
	)
}
