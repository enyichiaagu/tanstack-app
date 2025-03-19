import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

// Send the email with a header of portfolio and body of Text, then a footer that references the email of the sender, a kind of reply
// Check to use Re:

function Contact() {
  return (
    <>
      <p className='text-2xl'>Contact Me</p>
      <form action='' method='post' className='mt-5'>
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
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
