import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6">
            Hello, I am
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-accent">Anshuman Singh</span>
          </h1>
          <p className="text-xl text-text-secondary mb-10 max-w-lg leading-relaxed">
            A Computer Science Student and Aspiring Software Engineer specializing in building futuristic digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1Jp1S4hWz2Rs6b22wuSRl1GlOL_kNksX6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-accent/20"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/10 aspect-[4/5] md:aspect-square">
            <img
              src="https://i.ibb.co/hxhv8ykD/1000124851-2.jpg"
              alt="Anshuman Singh"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Geometric Accents */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl -z-0" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl -z-0" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} className="text-accent" />
      </motion.div>
    </section>
  );
}
