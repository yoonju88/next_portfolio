import React from 'react'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">Yoonju.T</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Yoonju.T —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@portfolio</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="ml-3 text-gray-500" >
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
