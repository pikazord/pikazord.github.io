import React from 'react'
import Heading from '../components/shared/Heading'
import dynamic from 'next/dynamic';

// Dynamically import Lottie player without SSR
const LottiePlayer = dynamic(
	() => import('./components/LottiePlayer'),
	{ ssr: false }
);

export default function AboutUs() {
	return (
		<section id='about' className='container mt-16'>
			<div className='flex flex-col lg:flex-row justify-between items-center'>
				<div className=' lg:w-1/2'>
					<Heading text="About Us" />
					<p className='text-balance text-base xl:text-lg font-semibold mt-2'>We are a dynamic softwre firm with a fresh approach, but our team brings a wealth of experience to the table. Our CTO has over 10 years of industry expertise, leading the technical vision of the company with a focus on cutting-edge technologies. Our other team members have an average of 3 to 4 years of experience, specializing in areas like automation, web development, and blockchain. We also have a dedicated UI/UX designer with 4 years of experience, ensuring our solutions are as user-friendly as they are technically robust. Together, we&apos;re passionate about delivering innovative solutions tailored to our clients needs.</p>
				</div>
				<div className='hidden lg:w-1/2 lg:block'>
					<LottiePlayer />
				</div>
			</div>
		</section>
	)
}
