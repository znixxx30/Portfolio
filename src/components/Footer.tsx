import React from 'react';
import { Github, Linkedin, Twitter, Dribbble, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white">
              <Cpu size={18} />
            </div>
            <span className="tracking-tighter"></span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-text-muted">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Github, href: 'https://github.com/znixxx30' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/anshumanit/' },
              { Icon: Twitter, href: 'https://x.com/AnshumanSi57943' },
              { Icon: Dribbble, href: '#' }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle text-center text-text-muted text-sm">
          <p>© 2026 Anshuman Singh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
