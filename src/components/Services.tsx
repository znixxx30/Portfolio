import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Server, Database, Cpu, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Globe,
    desc: 'Building responsive and high-performance websites using modern frameworks.',
  },
  {
    title: 'UI/UX Design',
    icon: Layout,
    desc: 'Creating intuitive and visually stunning user interfaces and experiences.',
  },
  {
    title: 'Backend Development',
    icon: Server,
    desc: 'Developing robust server-side logic and scalable API architectures.',
  },
  {
    title: 'API Development',
    icon: Code,
    desc: 'Designing and implementing secure and efficient RESTful and GraphQL APIs.',
  },
  {
    title: 'Database Design',
    icon: Database,
    desc: 'Optimizing data structures and management for high-load applications.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-card-bg border border-border-subtle rounded-3xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="text-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                {service.title}
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-accent" />
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
