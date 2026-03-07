import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Dribbble, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjgakgpn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Let's Talk About<br />Your Next Project</h2>
            <p className="text-text-secondary mb-10 leading-relaxed">
              I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-lg font-bold">anshuman.itpro@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-lg font-bold">+91 8840066340</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-bold">Greater Noida, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { Icon: Github, href: 'https://github.com/znixxx30' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/anshumanit/' },
                { Icon: Twitter, href: 'https://x.com/AnshumanSi57943' },
                { Icon: Dribbble, href: '#' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg border border-border-subtle p-8 md:p-12 rounded-[40px]"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-text-secondary mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-primary-bg border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Anshuman Singh"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-primary-bg border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="anshuman.itpro@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Subject</label>
                  <input
                    required
                    name="subject"
                    type="text"
                    className="w-full bg-primary-bg border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-primary-bg border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  disabled={status === 'loading'}
                  className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again later.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
