import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

const publications = [
  {
    title: 'Object Detection Using Deep Learning: A Comparative Study of YOLOv8, YOLOv8+RCNN, and YOLOv8+EfficientDet',
    journal: 'Springer - International Conference on Advanced Computing',
    date: '2025',
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-04222-4_4',
    excerpt: 'This research paper presents a comprehensive comparative analysis of state of the art object detection models, evaluating performance metrics across YOLOv8, RCNN, and EfficientDet architectures.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Research & Publications</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Academic contributions and published research in the field of Computer Science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-card-bg border border-border-subtle rounded-[40px] overflow-hidden hover:border-accent/30 transition-all flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-10 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-accent mb-4 uppercase tracking-widest font-bold">
                  <Award size={16} />
                  <span>Conference Paper</span>
                  <span className="text-text-muted">•</span>
                  <span>{pub.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                  {pub.title}
                </h3>
                <p className="text-text-muted text-sm font-medium mb-4 italic">
                  Published in: {pub.journal}
                </p>
                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                  {pub.excerpt}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold text-sm transition-all w-fit shadow-lg shadow-accent/20"
                >
                  View Publication <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
