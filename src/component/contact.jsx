import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Layout from './Layout';


function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_6kp7cf9', 'template_nv5ndmb', e.target, 'XhXCYdnSwaf_76lqV')
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
        <Layout>
            {/* <div className="contact-me">
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
            </div> */}

            <div className="contact-me flex flex-col justify-center items-center ">
                <div className="text-3xl font-medium ">Contact Me</div>
                <div className='w-[300px] sm:w-[620px]'>
                    <form onSubmit={handleSubmit} className=" bg-white p-6 rounded-md shadow-md">
                        <div className="space-y-4">
                            <div className='hover:scale-105 shadow-sm'>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                            <div className='hover:scale-105 shadow-sm'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                            <div className='hover:scale-105 shadow-sm'>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                            <div className=' text-center'>
                                <button
                                    type="submit"
                                    className=" bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                                >
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                            {success && <p className="text-green-500">Your message has been sent! I'll get back to you soon!</p>}
                            {error && <p className="text-red-500">Something went wrong. Please try again later.</p>}
                        </div>
                    </form>
                </div>
                <div className="contact-info mt-6 text-center">
                    <p>Or contact me via email:</p>
                    <a href="mailto:codingdevesh@gmail.com" className="text-blue-500">
                        codingdevesh@gmail.com
                    </a>
                </div>
            </div>
        </Layout>
    );
}

export default ContactMe;