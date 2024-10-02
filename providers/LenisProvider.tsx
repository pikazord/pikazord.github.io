'use client'

import React from 'react'
import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis root options={
			{
				duration: 1.5,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			}
		}>{children}</ReactLenis>
	)
}
