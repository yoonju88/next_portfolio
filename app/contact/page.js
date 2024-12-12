import React from 'react'
import ContactForm from '@/components/contact/Contact'


export default function contactPage() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-background rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="bg-background relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Poisy, 74330 FRANCE </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold tracking-widest text-xs">EMAIL</h2>
                            <a className="text-primary leading-relaxed">hoyoonju2@email.com</a>
                            <h2 className="title-font font-semibold tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">06-23-45-41-57</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-bacjground flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="text-3xl mb-4 font-medium title-font">Contact Me</h1>
                    <p className="leading-relaxed mb-5">Would you like to start an amazing web project with me?</p>
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}
