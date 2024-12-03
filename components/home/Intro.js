import React from 'react'
import { AnimationCode } from './DynamicMap'
import { ButtonNavigate } from '../Buttons'

export default function Intro() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-foreground">Hello, I'm yoonju!
                    <br className="hidden lg:inline-block" />Welcome to My Digital Playground.
                </h1>
                <p className="mb-7 leading-relaxed text-foreground">
                    Here, you’ll find the work I’ve done so far and the endless possibilities that lie ahead. New projects and challenges always bring me excitement and inspiration. I’m always looking forward to collaborative efforts that push boundaries with innovative technologies. Let’s create something amazing together!
                </p>
                <div className='flex gap-6'>
                    <ButtonNavigate
                        name="web project"
                        href="/works/web"
                        variant='link'
                        size="sm"
                    >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </ButtonNavigate>
                    <ButtonNavigate
                        name="graphic project"
                        href="/works/design"
                        variant='link'
                        size="sm"
                    >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </ButtonNavigate>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <AnimationCode />
            </div>
        </>
    )
}
