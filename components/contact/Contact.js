'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        setIsLoading(true)
        fetch("/api/email", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                setIsLoading(false)
                if (res.status === 200) {
                    toast.success("Your message sent successfully 🙂")
                } else {
                    setIsLoading(false)
                    toast.error("Server issue... Please try again later 😟")
                }
            })
            .catch((error) => {
                setIsLoading(false)
            })
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-4">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id='name'
                        {...register('name', { required: true })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id='email'
                        {...register('email', { required: true })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Message
                    </label>
                    <textarea
                        row={6}
                        id='message'
                        {...register('message', { required: true })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{isLoading ? 'Sending...' : 'Send'}</button>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </form>
            <ToastContainer />
        </>
    )
}
