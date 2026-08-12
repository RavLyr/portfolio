'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Fill these in your .env.local:
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID=default_service (or your service ID)
//   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
//   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'default_service';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      console.log('EmailJS success:', result);
      setStatus('sent');
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage(JSON.stringify(error));
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-on-surface-variant" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="from_name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full bg-surface border-b border-surface-container-highest focus:border-primary px-4 py-3 text-on-surface font-body-md outline-none transition-colors"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-on-surface-variant" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="reply_to"
          type="email"
          required
          placeholder="john@example.com"
          className="w-full bg-surface border-b border-surface-container-highest focus:border-primary px-4 py-3 text-on-surface font-body-md outline-none transition-colors"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-on-surface-variant" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Hello Ravly, I would like to..."
          className="w-full bg-surface border-b border-surface-container-highest focus:border-primary px-4 py-3 text-on-surface font-body-md outline-none transition-colors resize-none"
        />
      </div>
      
      <motion.button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="self-start mt-2 btn-primary disabled:opacity-50"
        whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
        whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
      >
        {status === 'idle' && 'Send Message'}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && '✓ Message Sent'}
        {status === 'error' && 'Error — Try Again'}
      </motion.button>
      
      {status === 'error' && errorMessage && (
        <p className="text-xs text-error break-all">
          {errorMessage}
        </p>
      )}
      
      {status === 'sent' && (
        <p className="text-xs text-primary">
          Thanks! I'll get back to you soon.
        </p>
      )}
    </form>
  );
}
