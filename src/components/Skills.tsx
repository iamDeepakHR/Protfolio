import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 70, icon: 'fab fa-python', color: 'text-yellow-400' },
        { name: 'Java', level: 50, icon: 'fab fa-java', color: 'text-orange-400' },
        { name: 'JavaScript', level: 50, icon: 'fab fa-js-square', color: 'text-yellow-300' },
        { name: 'SQL', level: 70, icon: 'fas fa-database', color: 'text-blue-400' }
      ]
    },
    {
      title: 'Libraries & Frameworks',
      skills: [
        {
          name: 'NumPy',
          level: 80,
          icon: 'fa-solid fa-square-root-variable', // mathematical operations icon
          color: 'text-blue-400',
        },
        {
          name: 'Pandas',
          level: 70,
          icon: 'fa-solid fa-table-cells-large', // data table/grid representation
          color: 'text-yellow-400',
        },
        {
          name: 'Matplotlib',
          level: 75,
          icon: 'fa-solid fa-chart-pie', // chart visualization icon
          color: 'text-red-400',
        },
        {
          name: 'Scikit-learn',
          level: 70,
          icon: 'fa-solid fa-brain', // ML-related icon
          color: 'text-green-400',
        },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'AI Tools', level: 85, icon: 'fas fa-stream', color: 'text-red-400' },
        { name: 'ServiceNow', level: 70, icon: 'fas fa-cogs', color: 'text-blue-600' },
        { name: 'Figma', level: 65, icon: 'fab fa-figma', color: 'text-purple-400' },
        { name: 'Git', level: 80, icon: 'fab fa-git-alt', color: 'text-orange-600' }
      ]
    }
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 85 },
    { name: 'Team Leadership', level: 80 },
    { name: 'Communication', level: 70 },
    { name: 'Critical Thinking', level: 80 }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          
          {/* Technical Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <i className={`${skill.icon} ${skill.color} text-xl`}></i>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ 
                            boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                            scale: 1.02
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Soft Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Circular Progress */}
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 251.2" }}
                        animate={inView ? { strokeDasharray: `${(skill.level * 251.2) / 100} 251.2` } : {}}
                        transition={{ duration: 2, delay: 0.8 + index * 0.1 }}
                        className="group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-500/50"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00ffff" />
                          <stop offset="100%" stopColor="#0080ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Skill Orbs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['AI/ML', 'Web Design', 'Data Science', 'Data Structure'].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="glass-card p-6 text-center group cursor-pointer"
                >
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl text-black font-bold"
                  >
                    {index === 0 && <i className="fas fa-brain"></i>}
                    {index === 1 && <i className="fas fa-laptop-code"></i>}
                    {index === 2 && <i className="fas fa-chart-line"></i>}
                    {index === 3 && <i className="fas fa-project-diagram"></i>}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
