
'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import LottieAnimation from '@/public/animation_2.json'

export default function AnimationCode() {
    if (!Lottie) {
        return null; // Lottie가 로드되지 않으면 아무것도 렌더링하지 않음
    }
    return (
        <Lottie
            loop
            animationData={LottieAnimation}
            play
        />
    )
}