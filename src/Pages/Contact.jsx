import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setErrorMessage('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('Missing EmailJS keys in .env file');
            setStatus('config_error');
            setTimeout(() => setStatus(''), 8000);
            return;
        }

        setStatus('sending');

        // Debug log to check keys (hidden in production)
        console.log('Sending email with:', { serviceId, templateId, publicKey: publicKey ? '***' : 'missing' });

        emailjs
            .sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            )
            .then(
                () => {
                    setStatus('success');
                    e.target.reset();
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    setStatus('error');
                    // Extract meaningful error message
                    const msg = error.text || error.message || (error.status === 400 ? 'Invalid Keys or Configuration' : JSON.stringify(error));
                    setErrorMessage(msg);
                    console.error('FAILED...', error);
                    // Clear error after 10 seconds
                    setTimeout(() => {
                        setStatus('');
                        setErrorMessage('');
                    }, 10000);
                }
            );
    };

    return (
        <div id="contact" className="min-h-screen flex items-center justify-center py-10 md:py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="p-3 bg-gray-200 dark:bg-gray-800/50 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                                            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Email</p>
                                            <a href="mailto:senalanuraheesara@gmail.com" className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                                senalanuraheesara@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="p-3 bg-gray-200 dark:bg-gray-800/50 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                                            <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Phone</p>
                                            <a href="tel:+94769412240" className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                                +94 76 941 2240
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="p-3 bg-gray-200 dark:bg-gray-800/50 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                                            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Location</p>
                                            <p className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                                Colombo, Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Internship Status Card */}
                            <div className="mt-12 bg-white dark:bg-gray-800/30 p-6 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <h4 className="text-gray-900 dark:text-white font-semibold">Currently Available for Internships</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    I'm currently seeking internship opportunities in software engineering and web development. Open to discussing how I can contribute to your team.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-xl" data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-500 text-center text-sm font-medium mt-2 animate-fade-in">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <div className="mt-2 animate-fade-in">
                                    <p className="text-red-500 text-center text-sm font-medium">
                                        Failed to send message.
                                    </p>
                                    {errorMessage && (
                                        <p className="text-red-400 text-center text-xs mt-1">
                                            Error: {errorMessage}
                                        </p>
                                    )}
                                </div>
                            )}
                            {status === 'config_error' && (
                                <p className="text-red-600 text-center text-sm font-bold mt-2 animate-fade-in bg-red-100 p-2 rounded-lg">
                                    Configuration Error: Missing API Keys. Please check your .env file and restart the server.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
