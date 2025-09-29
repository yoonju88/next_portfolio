'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from '@/utils/api'
import { ContactSchema } from '@/utils/schema'
import { CgSpinner } from "react-icons/cg"; //  add animate-spin 
import { ButtonSubmit } from './Buttons'


export default function ContactForm({ name, namePh, email, message, messagePh, bt, loading }) {
    const { toast } = useToast()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const inputStyle = "w-full text-color input_style rounded  text-base outline-none py-1 px-3 leading-8 transition-colors duration-300"
    const labelStyle = "leading-7 text-sm border-color animate-slide-down-soft"
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
                    className={`${labelStyle} [animation-delay:700ms]`}
                >
                    {name}
                </label>
                <input
                    type="text"
                    id='name'
                    {...register('name', { required: true })}
                    placeholder={namePh}
                    className={`${inputStyle} animate-slide-down-soft [animation-delay:900ms]`}
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="email"
                    className={`${labelStyle} [animation-delay:1100ms]`}
                >
                    {email}
                </label>
                <input
                    type="email"
                    id='email'
                    {...register('email', { required: true })}
                    className={`${inputStyle} animate-slide-down-soft [animation-delay:1300ms]`}
                    placeholder='id@email.com'
                />
            </div>
            <div className="relative mb-4">
                <label
                    htmlFor="message"
                    className={`${labelStyle} [animation-delay:1500ms]`}
                >
                    {message}
                </label>
                <textarea
                    rows={4}
                    id='message'
                    {...register('message', { required: true })}
                    className={`h-32  resize-none ${inputStyle} animate-slide-down-soft [animation-delay:1800ms]`}
                    placeholder={messagePh}
                />
            </div>
            <div className="flex justify-center animate-slide-down-soft [animation-delay:2100ms]">
                <ButtonSubmit
                    type="submit"
                    disabled={isLoading}
                    loading={isLoading}
                >
                    {isLoading ? (
                        <>
                            <CgSpinner className='animate-spin size-7 text-white' />
                            <span className="text-white">{loading}</span>
                        </>
                    ) : <>{bt}</>
                    }
                </ButtonSubmit>
            </div>
        </form >
    )
}
