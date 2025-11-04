import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: 'ToriiMinds Training Program',
      company: 'ToriiMinds',
      duration: '2023 - Present',
      type: 'Training Program',
      description: 'Advanced AI and Machine Learning training program focusing on real-world applications and industry best practices.',
      longDescription: 'Comprehensive training in ServiceNow, ITSM workflows, and JavaScript automation. Gained hands-on experience with enterprise-level AI solutions and machine learning model deployment.',
      responsibilities: [
        'ServiceNow platform development and customization',
        'ITSM workflow automation using JavaScript',
        'AI model integration and deployment',
        'Enterprise solution architecture design'
      ],
      technologies: ['ServiceNow', 'JavaScript', 'AI/ML', 'ITSM'],
      icon: 'fas fa-graduation-cap',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      title: 'Class Representative',
      company: 'CSE Department, College',
      duration: '2021 - 2023',
      type: 'Leadership Role',
      description: 'Led class activities and served as liaison between students and faculty for 60+ students.',
      longDescription: 'Coordinated academic activities, organized technical events, and facilitated communication between students and faculty. Managed class schedules, assignment submissions, and student feedback collection.',
      responsibilities: [
        'Coordinated academic activities for 60+ students',
        'Organized technical workshops and seminars',
        'Facilitated student-faculty communication',
        'Managed class schedules and assignments'
      ],
      technologies: ['Leadership', 'Communication', 'Event Management', 'Team Coordination'],
      icon: 'fas fa-users',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Event Volunteer',
      company: 'Tech Fests & Hackathons',
      duration: '2020 - 2022',
      type: 'Volunteer Work',
      description: 'Organized and managed various technical and cultural events at college for 200+ participants.',
      longDescription: 'Played a key role in organizing multiple tech fests, hackathons, and cultural events. Managed logistics, coordinated with participants, and ensured smooth event execution.',
      responsibilities: [
        'Organized tech fests for 200+ participants',
        'Coordinated hackathon logistics and judging',
        'Managed event registration and communication',
        'Ensured smooth event execution and participant experience'
      ],
      technologies: ['Event Management', 'Logistics', 'Communication', 'Teamwork'],
      icon: 'fas fa-calendar-alt',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
  ]

  const skills = [
    { name: 'Leadership', level: 90 },
    { name: 'Team Management', level: 85 },
    { name: 'Event Organization', level: 88 },
    { name: 'Communication', level: 92 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Project Management', level: 80 }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience & Leadership</h2>
          
          {/* Experience Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.title}
                onClick={() => setActiveExperience(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeExperience === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold'
                    : 'glass-card text-white hover:text-cyan-400'
                }`}
              >
                {exp.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-12 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Experience Info */}
              <div className="space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    <div className={`w-16 h-16 ${experiences[activeExperience].bgColor} rounded-full flex items-center justify-center`}>
                      <i className={`${experiences[activeExperience].icon} ${experiences[activeExperience].color} text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400">
                        {experiences[activeExperience].title}
                      </h3>
                      <p className="text-lg text-white">
                        {experiences[activeExperience].company}
                      </p>
                      <p className="text-gray-400">
                        {experiences[activeExperience].duration}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-4">Description</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experiences[activeExperience].longDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {experiences[activeExperience].responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={responsibility}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <i className="fas fa-check-circle text-cyan-400"></i>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right Side - Technologies & Skills */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">Leadership Skills</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Timeline View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              Experience Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="glass-card p-6 cursor-pointer"
                        onClick={() => setActiveExperience(index)}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <i className={`${exp.icon} ${exp.color} text-xl`}></i>
                          <h4 className="font-bold text-white">{exp.title}</h4>
                        </div>
                        <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-xs mb-3">{exp.duration}</p>
                        <p className="text-gray-300 text-sm">{exp.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-dark-bg cursor-pointer"
                      animate={{ 
                        boxShadow: activeExperience === index 
                          ? "0 0 20px rgba(0, 255, 255, 0.8)" 
                          : "0 0 10px rgba(0, 255, 255, 0.3)"
                      }}
                      onClick={() => setActiveExperience(index)}
                    />
                    
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

export default Experience
