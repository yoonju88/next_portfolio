import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request) {
    const { name, email, message } = await request.json()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com", //gmail SMTP server
        port: 465, // TLS secure activate basically on this port
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    })
    const mailOptions = {
        from: email,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,
    }
    try {
        const info = await transport.sendMail(mailOptions)
        console.log('Email sent:', info.response)
        return NextResponse.json({ message: 'Email sent' })
    } catch (err) {
        return NextResponse.json({ error: 'Faied', details: err.message })
    }
}