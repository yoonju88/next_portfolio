
'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'


export default function AnimationCode() {
    const [Lottie, setLottie] = useState(null);

    useEffect(() => {
        import('react-lottie-player').then((module) => {
            setLottie(module.default); // 클라이언트에서만 Lottie 컴포넌트를 로드
        });
    }, []);

    if (!Lottie) {
        return null; // Lottie가 로드되지 않으면 아무것도 렌더링하지 않음
    }

    return (
        <Lottie
            loop
            animationData={require('@/public/animation_2.json')}
            play
        />
    )
}