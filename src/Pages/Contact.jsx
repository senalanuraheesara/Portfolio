import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cardElevated, cn, iconTileMuted, inputField, panelHighlight, sectionBand } from '../designTokens';

const Contact = () => {
    const form = useRef();
    const reduceMotion = useReducedMotion();
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
        <div
            id="contact"
            className={cn(
                'flex min-h-screen items-center justify-center overflow-x-clip py-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:py-20',
                sectionBand,
            )}
        >
            <div className="w-full min-w-0 max-w-6xl">
                <motion.div
                    className="mb-16 text-center"
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="mb-4 px-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-2xl px-1 text-base text-gray-600 dark:text-gray-400 sm:text-lg">Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <motion.div
                        className="space-y-8"
                        initial={reduceMotion ? false : { opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className={cn('flex h-full min-w-0 flex-col justify-between p-6 sm:p-8', cardElevated)}>
                            <div>
                                <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className={iconTileMuted}>
                                            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Email</p>
                                            <a href="mailto:senalanuraheesara@gmail.com" className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors break-all sm:break-normal">
                                                senalanuraheesara@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className={iconTileMuted}>
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
                                        <div className={iconTileMuted}>
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
                            <div className={cn('mt-12', panelHighlight)}>
                                <div className="mb-2 flex flex-wrap items-start gap-3">
                                    <span className="relative mt-1 flex h-3 w-3 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500"></span>
                                    </span>
                                    <h4 className="min-w-0 text-base font-semibold leading-snug text-gray-900 dark:text-white sm:text-lg">Currently Available for Internships</h4>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    I'm currently seeking internship opportunities in software engineering, web development, and data science. Open to discussing how I can contribute to your team.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cn('min-w-0 p-6 sm:p-8', cardElevated)}
                        initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.08 }}
                    >
                        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Send Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="John Doe"
                                        required
                                        className={inputField}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="john@example.com"
                                        required
                                        className={inputField}
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
                                    className={inputField}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    required
                                    className={inputField}
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg transition-colors hover:bg-orange-600 hover:shadow-orange-500/35 disabled:cursor-not-allowed disabled:opacity-70"
                                whileHover={reduceMotion || status === 'sending' ? undefined : { scale: 1.02 }}
                                whileTap={reduceMotion || status === 'sending' ? undefined : { scale: 0.98 }}
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
                            </motion.button>
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
