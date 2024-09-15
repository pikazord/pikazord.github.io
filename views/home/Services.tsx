import React from 'react'
import Heading from '../components/shared/Heading'
import ServiceCard from './components/ServiceCard'
import serviceData from "../../public/data/services.json"

export default function Services() {
	return (
		<section id='services' className='container mt-16 opacity-0 animate-slide-in-up delay-700'>
			<Heading text="Services" />
			<div className='mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
				{
					serviceData.map((service, index) => (
						<ServiceCard key={index} title={service.title} description={service.description} />
					))
				}
			</div>
		</section>
	)
}
