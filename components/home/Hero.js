import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Helo, I'm yoonju!
                    <br className="hidden lg:inline-block" />Welcome to My Digital Playground.
                </h1>
                <p className="mb-8 leading-relaxed">
                    Here, you’ll find the work I’ve done so far and the endless possibilities that lie ahead. New projects and challenges always bring me excitement and inspiration. I’m always looking forward to collaborative efforts that push boundaries with innovative technologies. Let’s create something amazing together!
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        See my projects
                    </button>
                </div>
            </div>
        </>
    )
}
