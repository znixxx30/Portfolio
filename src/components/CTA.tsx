import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-bg via-transparent to-primary-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          I'm Available for Freelancing
        </h2>
        <p className="text-text-secondary text-xl mb-12 max-w-2xl mx-auto">
          Have a vision for a project? Let's turn it into a reality with cutting-edge technology and exceptional design.
        </p>
        <a 
          href="#contact"
          className="inline-block bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-accent/40"
        >
          Hire Me Now
        </a>
      </div>
    </section>
  );
}
