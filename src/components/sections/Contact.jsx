import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent Successfully");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => alert("Oops, something went wrong. Please try again."));
    };

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className='px-4 w-full md:w-150'>
                    <div className="text-center mb-8">
                        <style>
                            {`
                                .animated-gradient-text-contact {
                                    background: linear-gradient(to right, #0066ff, #00ffff);
                                    -webkit-background-clip: text;
                                    background-clip: text;
                                    color: transparent;
                                    background-size: 300% auto;
                                    animation: gradient 2s ease-in-out infinite;
                                }

                                @keyframes gradient {
                                    0% { background-position: 0% 50%; }
                                    50% { background-position: 100% 50%; }
                                    100% { background-position: 0% 50%; }
                                }

                                .gradient-button {
                                    background: linear-gradient(to right, #0066ff, #00ffff);
                                    background-size: 200% auto;
                                    color: white;
                                    border: none;
                                    border-radius: 5px;
                                    padding: 12px 24px;
                                    font-size: 16px;
                                    font-weight: bold;
                                    transition: transform 0.3s ease;
                                    animation: gradient 2s ease-in-out infinite;
                                }

                                .gradient-button:hover {
                                    transform: translateY(-2px);
                                }
                            `}
                        </style>
                        <h2 className="text-4xl font-bold mb-4 animated-gradient-text-contact">
                            Get In Touch
                        </h2>
                    </div>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='relative'>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Name...'
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className='relative'>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                value={formData.email}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='example@gmail.com'
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className='relative'>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                value={formData.message} 
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Your Message...'
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className='w-full gradient-button'>
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};