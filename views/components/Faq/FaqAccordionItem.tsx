import { AccordionContent, AccordionItem, AccordionTrigger } from '@/views/components/shared/Accordion'
import React from 'react'

export default function FaqAccordionItem({ value, question, answer }: { value: number, question: string, answer: string }) {
	return (
		<AccordionItem value={`item-${value}`} className="px-10 2xl:px-12 py-7 2xl:py-8">
			<AccordionTrigger>
				<div className='flex justify-start items-center text-left'>
					<div className="w-[68px] 2xl:w-[72px] inline-flex items-center justify-center text-primary rounded p-4 2xl:p-5 text-[24px] 2xl:text-[28px] faq-number font-semibold mr-4 2xl:mr-5">
						{value < 10 ? '0' + value : value}
					</div>
					<p>{question}</p>
				</div>
			</AccordionTrigger>
			<AccordionContent>
				{answer}
			</AccordionContent>
		</AccordionItem>
	)
}
