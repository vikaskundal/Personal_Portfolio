'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Zap, Shield, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Building beautiful, functional websites tailored to your needs using modern technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'User-Friendly Interfaces',
      description: 'Creating intuitive and easy-to-use interfaces that provide excellent user experience across all devices and screen sizes.',
      features: ['Mobile Responsive', 'Intuitive Navigation', 'Accessibility', 'Fast Loading'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and functional user interfaces that are both aesthetically pleasing and highly usable.',
      features: ['Modern Design', 'User Research', 'Wireframing', 'Prototyping'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'Fast & Optimized',
      description: 'Building high-performance websites that load quickly and provide smooth user experiences, optimized for speed and efficiency.',
      features: ['Fast Loading', 'Optimized Assets', 'Caching Strategy', 'CDN Integration'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services from frontend to backend, including APIs, databases, and cloud deployment.',
      features: ['Frontend & Backend', 'API Development', 'Database Design', 'Cloud Deployment'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly, secure, and up-to-date with latest features.',
      features: ['Regular Updates', 'Security Patches', 'Bug Fixes', 'Technical Support'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building websites that are not just beautiful, but also easy to use and understand.
            I create solutions that your users will love.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
