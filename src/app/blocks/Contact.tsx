'use client';

import { useState } from 'react';
import img2 from '@/imports/image-2.png';
import SectionLabel from '@/app/components/SectionLabel';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    try {
      const res = await fetch(
        'https://discord.com/api/webhooks/1507554476318527659/sGSbT89uwxPBWhnVqiq4snWeD7gfdRgNg6bKEYDM_hldoj5fWcV3OboSgkuOsP_7Lgzh',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [
              {
                title: 'New Contact Form Submission',
                color: 0x000000,
                fields: [
                  { name: 'Name', value: name, inline: true },
                  { name: 'Email', value: email, inline: true },
                  { name: 'Message', value: message },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        },
      );
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative bg-signal text-black border-b-2 border-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative px-6 md:px-10 py-20 md:py-32">
        <SectionLabel num="005" label="Contact" />
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8 h-full flex flex-col justify-center">
            <h2 className="text-[14vw] md:text-[8vw] leading-display tracking-display font-black uppercase">
              Ready to
              <br />
              build
              <br />
              <span className="italic font-normal">something</span>
              <br />
              that holds up?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 space-y-6">
            <a
              href="mailto:hello@sawt.com.au"
              className="block bg-black text-canvas p-6 hover:bg-canvas hover:text-black border-2 border-black transition-colors mt-8"
            >
              <div className="font-mono text-micro tracking-caps uppercase opacity-70 mb-2">Get In Touch</div>
              <div className="text-[15px] sm:text-base md:text-lg lg:text-2xl leading-none font-black">
                hello@sawt.com.au
              </div>
            </a>
            {status === 'sent' ? (
              <div className="border-2 border-black px-6 py-8 font-mono text-sm text-center">
                Message sent. We&apos;ll be in touch.
              </div>
            ) : (
              <form className="space-y-4 border-2 border-black p-6 bg-black text-canvas" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-mono text-micro tracking-caps uppercase opacity-70 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-canvas focus:bg-white placeholder:text-black/40 text-black border-2 border-black focus:outline-signal transition-all  px-4 py-3 font-mono text-sm focus:outline-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-micro tracking-caps uppercase opacity-70 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-canvas focus:bg-white placeholder:text-black/40 text-black border-2 border-black focus:outline-signal transition-all  px-4 py-3 font-mono text-sm focus:outline-2"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-micro tracking-caps uppercase opacity-70 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-canvas focus:bg-white placeholder:text-black/40 text-black border-2 border-black focus:outline-signal transition-all  px-4 py-3 font-mono text-sm focus:outline-2 resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                {status === 'error' && (
                  <p className="font-mono text-micro text-red-700">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-canvas cursor-pointer text-black px-6 py-4 font-mono text-micro tracking-caps uppercase hover:bg-signal hover:text-black border-2 border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
