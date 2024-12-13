'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from '@/utils/api'
import { ContactSchema } from '@/utils/schema'


export default function ContactForm() {
    const { toast } = useToast()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            const res = await sendEmail(ContactSchema, data)
            setIsLoading(false)
            if (res.status === 200) {
                toast({
                    title: "Success",
                    description: "Your message sent successfully",
                })
            }
        } catch (error) {
            setIsLoading(false)
            toast({
                title: "Error",
                description: error.message || "Error",
            })
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
                <label
                    htmlFor="name"
                    className="leading-7 text-sm text-foreground"
                >
                    Name
                </label>
                <input
                    type="text"
                    id='name'
                    {...register('name', { required: true })}
                    className="w-full bg-background rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200"
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="email"
                    className="leading-7 text-sm text-foreground"
                >
                    Email
                </label>
                <input
                    type="email"
                    id='email'
                    {...register('email', { required: true })}
                    className="w-full bg-background rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 "
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="message"
                    className="leading-7 text-sm text-foreground"
                >
                    Message
                </label>
                <textarea
                    rows={4}
                    id='message'
                    {...register('message', { required: true })}
                    className="w-full bg-background rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-foreground py-1 px-3 resize-none leading-6 transition-colors duration-200"
                />
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className={`text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg flex`}
            >
                {isLoading ? 'Sending...' : 'Send'}
            </button>
        </form>
    )
}