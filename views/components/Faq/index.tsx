import React from 'react'
import { FAQ } from '@/public/data'
import FaqAccordionItem from './FaqAccordionItem'
import { Accordion } from '../shared/Accordion'

export default function Faq() {
	return (
		<div>
			<Accordion type="single" collapsible className="w-full border">
				<div className="grid grid-cols-2 [&>*:nth-child(odd)]:border-r">
					{
						FAQ.map((f, index) => <FaqAccordionItem key={index} value={index + 1} question={f.question} answer={f.answer} />)
					}
				</div>
			</Accordion></div>
	)
}
