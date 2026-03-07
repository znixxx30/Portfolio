import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
  { category: 'Programming', skills: ['Python', 'JavaScript', 'C++'] },
  { category: 'Backend Development', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Databases', skills: ['MySQL', 'Redis'] },
  { category: 'DevOps', skills: ['Docker'] },
  { category: 'AI/ML', skills: ['TensorFlow', 'Keras', 'Computer Vision'] },
  { category: 'Web', skills: ['HTML', 'CSS'] },
  { category: 'Problem Solving', skills: ['Data Structures & Algorithms'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-border-subtle">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace"
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-3xl shadow-2xl text-center min-w-[160px]">
              <div className="text-4xl font-bold text-white mb-1">04</div>
              <div className="text-sm font-bold text-white/80 uppercase tracking-tighter">Years of<br/>Study</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Computer Science Student<br/>
              <span className="text-accent text-2xl block mt-2">Specializing in Artificial Intelligence</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I am a passionate Computer Science student dedicated to exploring the frontiers of Artificial Intelligence and Machine Learning. My academic journey is focused on developing intelligent systems that can solve complex real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {skillCategories.map((item) => (
                <div key={item.category} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent">{item.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="text-sm font-medium text-text-primary bg-card-bg border border-border-subtle px-3 py-1 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="#contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-bold transition-all text-center"
              >
                Hire Me!
              </a>
              <a 
                href="#about"
                className="border border-border-subtle hover:border-accent text-text-primary px-8 py-3 rounded-xl font-bold transition-all text-center"
              >
                About Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
