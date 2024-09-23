import React from 'react'
import { FAQ } from '@/public/data'
import FaqAccordionItem from './FaqAccordionItem'
import { Accordion } from '../shared/Accordion'
import HeadingWithBG from '../shared/HeadingWithBG'

export default function Faq() {
	return (
		<section>
			<HeadingWithBG
				src='/images/FAQ-Section.png'
				heading='Frequently Asked Questions'
				subHeading='Still you have any questions? Contact our Team via hello@pikazord.com'
			/>
			<Accordion type="single" collapsible className="w-full border">
				<div className="grid grid-cols-1 md:grid-cols-2 [&>*:nth-child(odd)]:border-r">
					{
						FAQ.map((f, index) => <FaqAccordionItem key={index} value={index + 1} question={f.question} answer={f.answer} />)
					}
				</div>
			</Accordion></section>
	)
}
