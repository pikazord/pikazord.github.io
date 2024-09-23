import React from 'react'
import HeadingWithBG from '../components/shared/HeadingWithBG'
import { choosingReasons } from '@/public/data'
import ExperienceCard from './components/ExperienceCard'

export default function Choose() {
	return (
		<section>
			<HeadingWithBG
				heading='Why Choose Pikazord?'
				subHeading='Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.'
				src='/images/Services-Section.png' />
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				{
					choosingReasons.map((reason, index) =>
						<ExperienceCard
							key={index}
							title={reason.title}
							description={reason.description}
							icon={reason.icon} />)
				}
			</div>
		</section>
	)
}
