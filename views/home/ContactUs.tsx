"use client"

import { render } from '@react-email/components';
import { Button } from '../components/shared/Button';
import Heading from '../components/shared/Heading';
import { Input } from '../components/shared/Input';
import { Textarea } from '../components/shared/Textarea';
import Email from '@/template/Email';
import useMailer from '@/hooks/useMailer';


export default function ContactUs() {

    const { error, handleInputChange, loading, sendEmail, data } = useMailer();

    const onsubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emailContent = await render(<Email {...data} />);
        await sendEmail(emailContent)
    };

    return (
        <section className="max-h-max mt-16" id="contact-us">
            <div className="container flex justify-between  h-full">
                <div className="border-r border-r-white w-[50%] max-h-full">
                    <Heading text='Get In Touch' />
                    <h3 className="w-[80%] text-xl my-3 leading-loose font-semibold">Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form.</h3>
                </div>
                <div className="w-[50%] flex py-5 justify-end">
                    <div className="w-[80%]">
                        <form onSubmit={onsubmit}>
                            <Input name='email' onChange={handleInputChange} value={data.email} className="border-teal-300 h-12 placeholder:text-lg" placeholder='Email' required aria-required />
                            <Input name='name' onChange={handleInputChange} value={data.name} className="border-teal-300 h-12 placeholder:text-lg mt-4" placeholder='Name' required aria-required />
                            <Textarea name='message' onChange={handleInputChange} value={data.message} className="border-teal-300 placeholder:text-lg mt-4 text-lg" placeholder='Name' required aria-required rows={7} />
                            <Button type='submit' className='w-full mt-4 capitalize text-base font-semibold'>
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}