'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey! I&apos;m <strong>Vikas Kundal</strong>, a final-year Bachelor of IT (Software Development) 
              student at Federation University, graduating in August 2026. I&apos;m based in Sydney, NSW, 
              and I&apos;m passionate about full-stack development, especially with the{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js).
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;ve been working with JavaScript for several years and recently started diving into{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">TypeScript</span> and{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Next.js</span> to sharpen my skills further. 
              I enjoy building user-friendly, real-world applications that solve actual problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I&apos;m improving my mobile ecommerce project and learning how to build scalable 
              SaaS products. I&apos;m actively looking for{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">internships or junior developer roles</span> in 
              Sydney — open to full-time, part-time, or hybrid positions.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <GraduationCap className="text-blue-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Education</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">B. IT (Software Development)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Federation University</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700"
              >
                <MapPin className="text-purple-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Location</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sydney, NSW</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Australia</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-4 rounded-lg border border-pink-200 dark:border-pink-700"
              >
                <Calendar className="text-pink-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Graduation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">August 2026</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Final Year</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg border border-green-200 dark:border-green-700"
              >
                <Briefcase className="text-green-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Status</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Open to Opportunities</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-time/Part-time</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Projects</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <span className="text-2xl">🌦️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Live Weather App</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Built with JavaScript</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Full-Stack ToDo App</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MERN Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Mobile Phone Ecommerce</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">React + Node.js</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <span className="text-2xl">🛠️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Direct Import Outlet (DIO)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js · Seven Hills, NSW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
