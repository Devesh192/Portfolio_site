import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                setError(false);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
                setError(true);
            });
    }

    return (
        <div className="contact-me">
            <div className='text-center font-medium '>
                Contact Me
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mx-10 space-y-10'>
                    <div className='bg-teal-300 border-spacing-10 border-green-800 border-4'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>

                    <button type="submit">Send</button>

                    {success && <p>Your message has been sent! I'll get back to you soon!</p>}
                    {error && <p>Something went wrong :</p>}
                </div>
            </form>

            <div className="contact-info">
                <p>Or text me at:</p>
                <a href="mailto:YOUR_EMAIL_ADDRESS">YOUR_EMAIL_ADDRESS</a>
            </div>
        </div>
    );
}

export default ContactMe;