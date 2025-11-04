import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Certificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

  // Certificates Data
  const certificates = [
    {
      title: 'ServiceNow Certified System Administrator',
      issuer: 'ServiceNow',
      date: '2025',
      description: 'Expertise in IT Service Management and workflow automation.',
      icon: 'fa-solid fa-certificate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'ServiceNow Micro-Certification',
      issuer: 'ServiceNow',
      date: '2025',
      description: 'Demonstrated foundational knowledge of ServiceNow workflows and automation tools.',
      icon: 'fa-solid fa-microchip',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Cisco Certified Python Programming Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      description: 'Strong foundation in Python programming and data structures.',
      icon: 'fa-brands fa-python',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30',
    },
    {
      title: 'IBM Certified Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      description: 'Fundamentals of Machine Learning and AI for Data Science.',
      icon: 'fa-solid fa-brain',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
    },
    {
      title: 'VTU Certified Data Analytics with Python',
      issuer: 'Visvesvaraya Technological University (VTU)',
      date: '2024',
      description: 'Hands-on skills in data analysis and visualization using Python.',
      icon: 'fa-solid fa-chart-line',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
    },
    {
      title: 'Certified Programming in Java, DBMS & IoT',
      issuer: 'NPTEL',
      date: '2023',
      description: 'Comprehensive certification in core programming and database concepts.',
      icon: 'fa-solid fa-graduation-cap',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
    },
  ]

  // Achievements Data
  const achievements = [
    {
      title: '100+ LeetCode Problems Solved',
      description: 'Demonstrated strong problem-solving skills in Data Structures and Algorithms.',
      icon: 'fa-solid fa-code',
      level: 'Intermediate',
    },
    {
      title: 'Top 10% Coder Rank',
      description: 'Ranked among the top 10% coders in the Advanced Coding Program at Nagarjuna College of Engineering and Technology.',
      icon: 'fa-solid fa-trophy',
      level: 'Advanced',
    },
    {
      title: 'HackerRank 3-Star in Python',
      description: 'Achieved 3-star rating on HackerRank, showcasing Python programming proficiency.',
      icon: 'fa-brands fa-python',
      level: 'Intermediate',
    },
    {
      title: 'HackerRank 3-Star in MySQL',
      description: 'Earned 3-star rating in MySQL, demonstrating strong understanding of database concepts and queries.',
      icon: 'fa-solid fa-database',
      level: 'Intermediate',
    },
  ]

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certificates & Achievements</h2>
          
          {/* Certificates Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                onHoverStart={() => setHoveredCert(index)}
                onHoverEnd={() => setHoveredCert(null)}
                className={`glass-card p-6 relative overflow-hidden group cursor-pointer ${cert.bgColor} ${cert.borderColor} border-2`}
              >
                {/* Holographic Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={hoveredCert === index ? { opacity: 1 } : { opacity: 0 }}
                />
                
                {/* Certificate Icon */}
                <motion.div
                  animate={hoveredCert === index ? { 
                    rotateY: 360,
                    scale: 1.2 
                  } : { 
                    rotateY: 0,
                    scale: 1 
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-4"
                >
                  <i className={`${cert.icon} ${cert.color} text-4xl`}></i>
                </motion.div>

                {/* Certificate Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-cyan-400 font-semibold">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  animate={hoveredCert === index ? { 
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" 
                  } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl text-black font-bold group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <i className={achievement.icon}></i>
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-2">
                    {achievement.description}
                  </p>
                  
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-500/30">
                    {achievement.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Certification Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              
              <div className="space-y-8">
                {certificates.slice(0, 4).map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="glass-card p-4">
                        <h4 className="font-bold text-white">{cert.title}</h4>
                        <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                        <p className="text-gray-400 text-xs">{cert.date}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-dark-bg animate-pulse-slow"></div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
