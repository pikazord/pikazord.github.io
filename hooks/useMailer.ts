import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import React, { useState } from "react";

interface ContactData {
    email: string;
    name: string;
    message: string;
};

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST as string,
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT as string, 10),
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER as string,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD as string,
    },
} as SMTPTransport.Options);


export default function useMailer() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<ContactData>({
        email: '',
        name: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const sendEmail = async (template: string) => {
        setLoading(true);
        try {
            await transporter.sendMail({
                from: process.env.NEXT_PUBLIC_EMAIL_FROM as string,
                to: process.env.NEXT_PUBLIC_EMAIL_TO as string,
                subject: 'New Contact Form Submission',
                html: template
            });
        } catch (err) {
            setError("Failed to send the email. Please try again.");
            console.log(err);
        }
        finally {
            setLoading(false);
            setData({
                email: '',
                name: '',
                message: '',
            });
        }
    };

    return {
        transporter,
        handleInputChange,
        sendEmail,
        loading,
        error,
        data,
    };
};