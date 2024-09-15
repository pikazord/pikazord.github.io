'use client'

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export default function LottiePlayer() {
	return (
		<Player
			autoplay
			loop
			src="/data/Animation - 1726424142023.json"
			style={{ height: '100%', width: '100%' }}
		>
		</Player>

	)
}
