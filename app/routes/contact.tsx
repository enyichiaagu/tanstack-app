import { useState } from 'react';
import { createServerFn } from '@tanstack/react-start';
import { createFileRoute } from '@tanstack/react-router';
import nodemailer from 'nodemailer';
import { FaCheck } from 'react-icons/fa';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: import.meta.env.VITE_EMAIL_ADDRESS,
    pass: import.meta.env.VITE_EMAIL_PASSWORD,
  },
});

const sendEmailMessage = async ({ email, message }) => {
  const res = await transporter.sendMail({
    from: import.meta.env.VITE_EMAIL_ADDRESS,
    to: import.meta.env.VITE_EMAIL_ADDRESS,
    subject: `Message from ${email}, sent from Portfolio Website`,
    text: message,
    replyTo: email,
  });
  return res;
};

const submitForm = createServerFn({ method: 'POST' })
  .validator((data: FormData) => {
    const email = data.get('email');
    const message = data.get('message');

    if (!email || !message) {
      throw new Error('Email and Message are required');
    }

    return { email: email.toString(), message: message.toString() };
  })
  .handler(async (ctx) => {
    return await sendEmailMessage(ctx.data);
  });

function Contact() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <>
      <p className='text-2xl'>Contact Me</p>
      {isSuccess && (
        <div className='bg-green-50 text-green-900 px-6 py-3 rounded w-md mt-5'>
          <FaCheck className='inline' /> Email Sent Successfully
        </div>
      )}
      <form
        method='post'
        className='mt-5'
        onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form: HTMLFormElement = event.currentTarget;
          const formData = new FormData(form);
          await submitForm({ data: formData });
          setIsSuccess(true);
          return form.reset();
        }}
      >
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            required
            className='border border-gray-400 w-md px-3 py-1.5'
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='message'>Message</label>
          <br />
          <textarea
            name='message'
            id='message'
            placeholder='Write me a message'
            required
            className='border border-gray-400 w-md px-3 py-1.5 h-50'
          ></textarea>
        </div>
        <button className='bg-blue-900 text-gray-50 px-4 py-2 rounded'>
          Send
        </button>
      </form>
    </>
  );
}
