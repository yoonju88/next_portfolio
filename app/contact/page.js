import React from 'react'
import ContactForm from '@/components/contact/Contact'


export default function contactPage() {
    return (
        <section className="w-[90%] relative overflow-hidden">
            <div className="absolute inset-0 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26899.95031897056!2d6.0343307144611575!3d45.92321629727834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b84ebfb378e1b%3A0x408ab2ae4ba9a40!2s74330%20Poisy!5e0!3m2!1sfr!2sfr!4v1734085156119!5m2!1sfr!2sfr"
                    width="1300"
                    height="760"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="container px-5 py-24 mx-auto flex ">
                <div className="lg:w-[40%] md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h1 className="text-3xl mb-4 font-medium title-font">Contact Me</h1>
                    <p className="leading-relaxed mb-5">Would you like to start an web project with me?</p>
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}
