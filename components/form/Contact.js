'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from '@/utils/api'
import { ContactSchema } from '@/utils/schema'
import { CgSpinner } from "react-icons/cg"; //  add animate-spin 
import { ButtonSubmit } from './Buttons'


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
                    placeholder='Last name, first name'
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
                    placeholder='id@email.com'
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
                    placeholder='Your message...'
                />
            </div>
            <div className="flex justify-center">
                <ButtonSubmit
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <CgSpinner className='animate-spin size-6 text-white ' />
                            Sending...
                        </>
                    ) : "Send"
                    }
                </ButtonSubmit>
            </div>
        </form >
    )
}
