import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req) {
    const body = await req.json()
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST, //gmail SMTP server
        port: process.env.SMTP_PORT, // TLS secure activate basically on this port
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailData = {
        from: body.email,
        to: process.env.MY_EMAIL,
        subject: `Message from ${body.name}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
    }
    try {
        const info = await transport.sendMail(mailData)
        console.log('Email sent:', info.response)
        return NextResponse.json({ message: 'Email sent' })
    } catch (err) {
        console.error('Error occurred:', err)
        return NextResponse.json({ error: 'Failed to send email', details: err.message })
    }
}