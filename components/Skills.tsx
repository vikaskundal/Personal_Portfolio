'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap, Smartphone, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT'],
    },
    {
      icon: Globe,
      title: 'Full Stack',
      color: 'from-green-500 to-emerald-500',
      skills: ['MERN Stack', 'Next.js Full Stack', 'API Integration', 'Authentication', 'Authorization'],
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'VS Code', 'npm', 'Responsive Design'],
    },
    {
      icon: Smartphone,
      title: 'UI/UX',
      color: 'from-pink-500 to-rose-500',
      skills: ['Framer Motion', 'User Experience', 'Accessibility', 'Performance Optimization'],
    },
    {
      icon: Cloud,
      title: 'Deployment',
      color: 'from-indigo-500 to-purple-500',
      skills: ['Vercel', 'Netlify', 'MongoDB Atlas', 'Cloud Hosting'],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
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
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-white/90 dark:text-white/80 text-lg">
              Currently improving my skills in scalable SaaS products, TypeScript, 
              and advanced Next.js patterns. Open to learning new technologies and frameworks!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
