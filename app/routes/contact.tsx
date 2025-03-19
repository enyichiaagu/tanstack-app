import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

// Send the email with a header of portfolio and body of Text, then a footer that references the email of the sender, a kind of reply
// Check to use Re:

function Contact() {
  return (
    <>
      <p>Contact Me</p>
      <form action='' method='post'>
        <label htmlFor=''>Email</label>
        <input type='email' name='' id='' />
        <label htmlFor=''>Message</label>
        <textarea name='' id='' placeholder='Write me a message'></textarea>
        <button>Send</button>
      </form>
    </>
  );
}
