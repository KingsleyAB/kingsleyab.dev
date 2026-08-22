'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { personal, contact } from '@/lib/data';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Contact section.
 *
 * Layout: two columns on desktop — contact info on the left, message form
 * on the right. Stacks on mobile.
 *
 * The form submits directly to Formspree.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-24 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="h-section mb-12"
        >
          {contact.heading}
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-ink-soft leading-relaxed">{contact.body}</p>

            <ul className="space-y-4">
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                value={personal.email}
                href={`mailto:${personal.email}`}
              />
              <ContactRow
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                value="linkedin.com/in/boateng-kingsley"
                href={personal.linkedin}
                external
              />
              <ContactRow
                icon={<Github size={16} />}
                label="GitHub"
                value="github.com/KingsleyAB"
                href={personal.github}
                external
              />
              <ContactRow
                icon={<MapPin size={16} />}
                label="Location"
                value={personal.location}
              />
            </ul>

            <p className="text-ink-muted text-sm italic leading-relaxed">
              {contact.closing}
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  const inner = (
    <div className="group flex items-start gap-4">
      <span className="mt-1 text-accent">{icon}</span>
      <div>
        <p className="font-mono text-[10px] tracking-extra-wide uppercase text-ink-muted">
          {label}
        </p>
        <p
          className={`text-ink ${
            href ? 'group-hover:text-accent transition-colors' : ''
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return <li>{inner}</li>;

  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {inner}
      </a>
    </li>
  );
}

/* -------------------------------------------------------------------------- */

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const isValid = name.trim() && /^\S+@\S+\.\S+$/.test(email) && message.trim().length > 4;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || state === 'sending') return;

    setState('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://formspree.io/f/mlgvdlak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Send failed');

      setState('sent');
      setName('');
      setEmail('');
      setMessage('');

      // Reset to idle after a few seconds so the user can send again.
      setTimeout(() => setState('idle'), 4000);
    } catch {
      setState('error');
      setErrorMsg('Something went wrong. Please email me directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Field
        label="Name"
        id="name"
        value={name}
        onChange={setName}
        placeholder="Your name"
        disabled={state === 'sending'}
      />
      <Field
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        disabled={state === 'sending'}
      />
      <TextareaField
        label="Message"
        id="message"
        value={message}
        onChange={setMessage}
        placeholder="What's on your mind?"
        disabled={state === 'sending'}
      />

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={!isValid || state === 'sending' || state === 'sent'}
          className="btn-pill border-accent/40 text-accent hover:border-accent hover:bg-accent/5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {state === 'idle' && (
            <>
              <Send size={13} />
              <span>Send message</span>
            </>
          )}
          {state === 'sending' && (
            <>
              <span className="block h-3 w-3 rounded-full border-2 border-accent border-r-transparent animate-spin" />
              <span>Sending...</span>
            </>
          )}
          {state === 'sent' && (
            <>
              <Check size={13} />
              <span>Sent</span>
            </>
          )}
          {state === 'error' && (
            <>
              <AlertCircle size={13} />
              <span>Try again</span>
            </>
          )}
        </button>

        {state === 'sent' && (
          <p className="font-mono text-[11px] text-accent">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
        {state === 'error' && errorMsg && (
          <p className="font-mono text-[11px] text-red-400">{errorMsg}</p>
        )}
      </div>

    </form>
  );
}

/* -------------------------------------------------------------------------- */

interface FieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

function Field({ label, id, type = 'text', value, onChange, placeholder, disabled }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-extra-wide uppercase text-ink-muted mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-transparent border-b border-line py-2 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
      />
    </div>
  );
}

function TextareaField({
  label,
  id,
  value,
  onChange,
  placeholder,
  disabled,
}: Omit<FieldProps, 'type'>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] tracking-extra-wide uppercase text-ink-muted mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={5}
        className="w-full bg-transparent border-b border-line py-2 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
      />
    </div>
  );
}
