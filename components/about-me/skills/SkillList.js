
import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import Image from 'next/image'

export default function SkillList({ title, icon, filtered }) {
    const [style, api] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(-20px)',
        config: { tension: 170, friction: 30, duration: 300 },
    }))

    React.useEffect(() => {
        api.start({
            opacity: filtered ? 1 : 0,
            transform: filtered ? 'translateY(0px)' : 'translateY(-20px)',
            config: {
                tension: 170,
                friction: 30,
                duration: 300, // 500ms로 애니메이션 지속 시간 설정
            },
        })
    }, [filtered, api])

    return (
        <animated.div
            className="group h-28 w-32 rounded-lg border-2  border-gray-300 flex flex-col justify-center items-center relative overflow-hidden 
                hover:border-primary/70 hover:bg-primary/60 set-shadow transform transition-all duration-300 hover:scale-110"
            style={style}
        >
            <Image
                src={icon}
                alt='icon'
                width="100"
                height="100"
                className="w-11 object-cover grayscale group-hover:grayscale-0 rounded-md group-hover:scale-110"
                loading="lazy"
            />
            < h4 className="mt-3 text-sm text-foreground/80 group-hover:text-white">{title}</h4>
        </animated.div >
    )
}
