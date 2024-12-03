
'use client'
import React from 'react'
import Lottie from 'react-lottie-player'

export default function AnimationLottie({ animation }) {
    if (!Lottie) {
        return null; // Lottie가 로드되지 않으면 아무것도 렌더링하지 않음
    }
    return (
        <Lottie
            loop
            animationData={animation}
            play
        />
    )
}