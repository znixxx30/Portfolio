import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Web', 'AI', 'Backend'];

const projects = [
  // {
  //   id: 1,
  //   title: 'Tonnie Johnson',
  //   category: 'Web',
  //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
  //   tags: ['React', 'Tailwind'],
  //   github: 'https://github.com/znixxx30',
  //   link: '#',
  // },
  {
    id: 2,
    title: 'AI Codebase Explainer',
    category: 'AI',
    image: 'https://i.ibb.co/prJFq9JZ/dashboard.png?q=80&w=1000&auto=format&fit=crop',
    tags: ['Python', 'FAISS', 'Gemini API'],
    github: 'https://github.com/znixxx30/ai-codebase-explainer.git',
    link: 'https://github.com/znixxx30/ai-codebase-explainer.git',
  },
  {
    id: 3,
    title: 'AI Model Monitoring Dashboard',
    category: 'AI',
    image: 'https://i.ibb.co/6JqfW2RS/dashboard-overview.png?q=80&w=1000&auto=format&fit=crop',
    tags: ['SQLlite', 'Power BI', 'Scikit-learn'],
    github: 'https://github.com/znixxx30/AI-model-monitoring-dashboard.git',
    link: 'https://github.com/znixxx30/AI-model-monitoring-dashboard.git',
  },
  // {
  //   id: 4,
  //   title: 'Cloud Dashboard',
  //   category: 'Backend',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  //   tags: ['Node.js', 'AWS'],
  //   github: 'https://github.com/znixxx30',
  //   link: '#',
  // },
  {
    id: 5,
    title: 'StockPilot',
    category: 'Backend',
    image: 'https://i.ibb.co/1Ggm8MwG/docker.png?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'Redis'],
    github: 'https://github.com/znixxx30/Stockpilot.git',
    link: 'https://github.com/znixxx30/Stockpilot.git',
  },
  // {
  //   id: 6,
  //   title: 'Modern Portfolio',
  //   category: 'Web',
  //   image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
  //   tags: ['React', 'Three.js'],
  //   github: 'https://github.com/znixxx30',
  //   link: '#',
  // },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Portfolio</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10">
            Explore latest projects and technical achievements across various domains.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                  ? 'bg-accent text-white'
                  : 'bg-card-bg text-text-secondary hover:text-white border border-border-subtle'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card-bg border border-border-subtle rounded-3xl overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-accent rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-accent rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-muted text-sm mt-1">{project.category} Project</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
