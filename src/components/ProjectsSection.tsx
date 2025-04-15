
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for analytics and management of social media accounts across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Chakra UI'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A weather application providing real-time forecasts, historical data, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">My Projects</h2>
          <p className="section-subtitle">
            Here's a selection of my recent work. Each project presented unique challenges and opportunities to grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md group"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-slate-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      Source <Github size={14} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
