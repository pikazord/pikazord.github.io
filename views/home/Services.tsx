import React from 'react'
import HeadingWithBG from '../components/shared/HeadingWithBG'
import { services } from '@/public/data'
import ServiceCard from './components/ServiceCard'

export default function Services() {
	return (
		<section>
			<HeadingWithBG
				heading='Our Services'
				subHeading='Transform your brand with our innovative digital solutions that captivate and engage your audience.'
				src='/images/Services-Section.png' />
			<div className='grid grid-cols-1 lg:grid-cols-3'>
				{services.map((service, index) =>
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						icon={service.icon} />
				)}
			</div>
		</section>
	)
}
