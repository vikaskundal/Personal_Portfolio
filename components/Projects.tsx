'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, CheckCircle, Wrench, Cloud, CheckSquare, ShoppingCart } from 'lucide-react';
import { Project } from '@/lib/models/Project';

const projects: Project[] = [
    {
      title: 'Direct Import Outlet (DIO)',
      description: 'Marketing site for a Seven Hills repair shop—phone & laptop repairs, services, reviews, and contact.',
      longDescription: 'A fast, trustworthy web presence for Direct Import Outlet: hero CTAs, service highlights, Google reviews, and store details. Built with Next.js and a mobile-first layout.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://www.diosevenhills.com.au/',
      category: 'fullstack',
      featured: true,
    },
    {
      title: 'Weather App',
      description: 'A live weather application that provides real-time weather information.',
      longDescription: 'Built with JavaScript, fetching data from weather APIs to display current conditions and forecasts.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: 'https://myweatherapp-kundal7.netlify.app/',
      category: 'frontend',
      featured: true,
    },
    {
      title: 'Full-Stack ToDo App',
      description: 'A complete full-stack task management application with user authentication.',
      longDescription: 'Built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, CRUD operations, and a modern UI.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
      liveUrl: 'https://mytodo-project.vercel.app',
      category: 'fullstack',
      featured: true,
    },
    {
      title: 'Mobile Repair Shop Management System',
      description: 'A full-stack repair ticket management platform designed for mobile phone repair businesses.',
      longDescription: 'A full-stack repair management platform that allows repair shops to create repair tickets, track device diagnostics, manage parts and repair costs, record device pre-condition checks, and maintain warranty records. The system is built using Next.js (App Router), Prisma ORM, PostgreSQL (Neon), and Tailwind CSS, and deployed on Vercel with a server-rendered architecture for high performance.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Neon', 'Vercel'],
      liveUrl: 'https://fixtrack-mu.vercel.app',
      category: 'fullstack',
      featured: true,
    },
  ];

export default function Projects() {
  const displayProjects = projects;
  const featuredProjects = displayProjects.filter((p) => p.featured);
  const otherProjects = displayProjects.filter((p) => !p.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone size={20} />;
      case 'backend':
        return <Code2 size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack':
        return 'from-blue-500 to-purple-500';
      case 'frontend':
        return 'from-cyan-500 to-blue-500';
      case 'backend':
        return 'from-purple-500 to-pink-500';
      case 'mobile':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getProjectImage = (project: Project) => {
    const title = project.title.toLowerCase();
    
    if (
      title.includes('direct import') ||
      title.includes('dio') ||
      title.includes('sydney tech') ||
      title.includes('repair')
    ) {
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-lg rotate-12"></div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-lg rotate-45"></div>
            <div className="absolute bottom-6 left-8 w-10 h-10 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-lg -rotate-12"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
              <Smartphone className="text-white" size={48} />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
              <Wrench className="text-white" size={32} />
            </div>
          </div>
        </div>
      );
    }
    
    if (title.includes('weather')) {
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-cyan-400 via-blue-500 to-sky-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-8 w-20 h-20 bg-white rounded-full"
            />
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-12 right-12 w-16 h-16 bg-white rounded-full"
            />
            <motion.div
              animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-8 left-12 w-14 h-14 bg-white rounded-full"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-3">
            <Cloud className="text-white" size={64} />
            <div className="flex gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (title.includes('todo') || title.includes('task')) {
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 left-6 w-32 h-1 bg-white rounded"></div>
            <div className="absolute top-12 left-6 w-28 h-1 bg-white rounded"></div>
            <div className="absolute top-20 left-6 w-36 h-1 bg-white rounded"></div>
            <div className="absolute bottom-12 left-6 w-24 h-1 bg-white rounded"></div>
            <div className="absolute bottom-6 left-6 w-32 h-1 bg-white rounded"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30 mb-2">
              <CheckSquare className="text-white" size={56} />
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/70 rounded-full"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      );
    }
    
    if (title.includes('ecommerce') || title.includes('shopping') || title.includes('mobile phone')) {
      return (
        <div className="relative h-full w-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-16 h-20 bg-white rounded-lg rotate-6"></div>
            <div className="absolute top-6 right-6 w-14 h-18 bg-white rounded-lg -rotate-6"></div>
            <div className="absolute bottom-6 left-6 w-12 h-16 bg-white rounded-lg rotate-12"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
              <ShoppingCart className="text-white" size={48} />
            </div>
            <Smartphone className="text-white" size={40} />
          </div>
        </div>
      );
    }
    
    // Default fallback
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
        <Code2 className="text-white opacity-30" size={64} />
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one showcases different skills and technologies.
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-2"
            >
              <CheckCircle className="text-green-500" size={24} />
              Featured Projects
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {getProjectImage(project)}
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-white text-xs font-semibold flex items-center gap-1 shadow-lg`}>
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            >
              Other Projects
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {getProjectImage(project)}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm"
                        >
                          <ExternalLink size={16} />
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
