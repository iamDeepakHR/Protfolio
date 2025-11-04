import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Certifications' },
    { number: '100+', label: 'LeetCode Problems' }
  ]

  const skills = [
    { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-orange-400' },
    { name: 'Web Design', icon: 'fas fa-laptop-code', color: 'text-orange-500' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-400' }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Motivated Computer Science Graduate with hands-on experience in AI, Data Analytics, 
                  and Software Development. Passionate about building intelligent systems that make 
                  real-world impact and drive innovation in the tech industry.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Skilled in Python, Java, and Machine Learning frameworks. I love solving complex 
                  problems and creating solutions that bridge the gap between AI research and practical 
                  applications.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Icons */}
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass-card p-4 flex items-center space-x-3 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - 3D Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* 3D Avatar Placeholder */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative"
                >
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-6xl text-black font-bold animate-glow">
                    <i className="fas fa-user"></i>
                  </div>
                  
                  {/* Floating Elements */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 360, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      <i className={`fas ${
                        i === 0 ? 'fa-brain' : 
                        i === 1 ? 'fa-code' : 
                        i === 2 ? 'fa-robot' : 'fa-chart-line'
                      } text-cyan-400`}></i>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                My Mission
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                "Building intelligent systems, one model at a time. I believe in the power of AI 
                to solve real-world problems and create meaningful impact. Every project is an 
                opportunity to learn, innovate, and push the boundaries of what's possible."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
