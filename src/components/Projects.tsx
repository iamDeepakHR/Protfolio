import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: 'AI-DRS LBW Detection System',
      description: 'Advanced cricket LBW detection using YOLOv8, LSTM, and XGBoost for real-time decision support in cricket matches.',
      longDescription: 'This innovative system combines computer vision and machine learning to analyze cricket footage and predict LBW decisions with high accuracy. The system uses YOLOv8 for ball tracking, LSTM for temporal analysis, and XGBoost for final decision making.',
      image: '/api/placeholder/400/300',
      technologies: ['YOLOv8', 'LSTM', 'XGBoost', 'Python', 'OpenCV', 'TensorFlow'],
      features: [
        'Real-time ball tracking and trajectory analysis',
        'Temporal pattern recognition using LSTM networks',
        'High accuracy LBW decision prediction',
        'Integration with cricket broadcasting systems'
      ],
      github: '#',
      demo: '#',
      status: 'InProgress',
      category: 'AI/ML'
    },
    {
      title: 'AI-Powered Product Analysis Dashboard',
      description: 'AI-driven Streamlit dashboard for analyzing bottle products using TensorFlow models and Google Gemini AI.',
      longDescription: 'This interactive system classifies and analyzes bottle images to predict multiple attributes such as category, subtype, morphological features, functional factors, and real-world traits. It integrates TensorFlow for model predictions and Google Gemini AI for intelligent visual reasoning and natural language analysis.',
      image: '/api/placeholder/400/300',
      technologies: ['Streamlit', 'TensorFlow', 'Keras', 'Google Gemini AI', 'Python', 'NumPy', 'Pillow', 'Matplotlib', 'Seaborn'],
      features: [
        'Master category and subtype prediction for bottle products',
        'Morphological feature detection (shape, size, structure)',
        'Functional factor and real-world usage analysis',
        'Gemini AI-powered interactive assistant for insights',
        'Comparison module for side-by-side bottle analysis',
        'Visualizations with Matplotlib and Seaborn',
        'Feedback system for user suggestions'
      ],
      github: 'https://github.com/iamDeepakHR/AI-Powered-Product-Analysis-Dashboard-using-TensorFlow-and-Gemini-AI',
      demo: 'https://iamdeepakhr-ai-powered-product-analysis-dashboard-us-app-htgqfx.streamlit.app',
      status: 'Completed',
      category: 'AI/ML'
    }
    ,
    {
      title: 'Stock Market Prediction using LSTM',
      description: 'LSTM-based neural network for accurate stock price prediction and trend analysis using historical market data.',
      longDescription: 'A sophisticated time-series prediction model that analyzes historical stock data to forecast future price movements. The system uses LSTM networks to capture long-term dependencies in financial data.',
      image: '/api/placeholder/400/300',
      technologies: ['LSTM', 'Python', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Time-series data preprocessing and feature engineering',
        'LSTM network architecture for sequence modeling',
        'Multiple stock prediction with portfolio analysis',
        'Interactive visualization dashboard'
      ],
      github: '#',
      demo: '#',
      status: 'Completed',
      category: 'Data Science'
    },
    {
      title: 'AI Chatbot & Image Analysis using Gemini API',
      description: 'Intelligent chatbot with image analysis capabilities using Gemini API for multimodal interactions and content understanding.',
      longDescription: 'A cutting-edge conversational AI system that can process both text and images, providing intelligent responses and analysis. Built using Google\'s Gemini API for advanced multimodal understanding.',
      image: '/api/placeholder/400/300',
      technologies: ['Gemini API', 'Python', 'Streamlit', 'OpenAI', 'PIL', 'Requests'],
      features: [
        'Multimodal conversation capabilities',
        'Image analysis and description generation',
        'Context-aware responses and memory',
        'Real-time chat interface with file upload'
      ],
      github: 'https://github.com/iamDeepakHR/Advanced-AI-Chatbot-Using-Python/',
      demo: 'https://advanced-ai-chatbot-using-python-nubwdtvcxbmyhrpbwl9ale.streamlit.app/',
      status: 'Completed',
      category: 'AI/ML'
    }
  ]

  const projectVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      rotateY: 15,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projects.map((project, index) => (
              <motion.button
                key={project.title}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold'
                    : 'glass-card text-white hover:text-cyan-400'
                }`}
              >
                {project.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="glass-card p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Project Image/Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-6xl text-cyan-400 mb-6 overflow-hidden">
                      {activeProject === 0 && <i className="fas fa-eye"></i>}
                      {activeProject === 1 && <i className="fas fa-chart-line"></i>}
                      {activeProject === 2 && <i className="fas fa-robot"></i>}
                      {activeProject === 3 && <i className="fas fa-cogs"></i>}
                    </div>
                    
                    {/* Status Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                        projects[activeProject].status === 'Completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {projects[activeProject].status}
                    </motion.div>
                  </motion.div>

                  {/* Project Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                        {projects[activeProject].title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {projects[activeProject].longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {projects[activeProject].features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                            className="flex items-center space-x-3 text-gray-300"
                          >
                            <i className="fas fa-check-circle text-cyan-400"></i>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex flex-wrap gap-4 pt-6"
                    >
                      <motion.a
                        href={projects[activeProject].github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <i className="fab fa-github"></i>
                        <span>View Code</span>
                      </motion.a>
                      
                      <motion.a
                        href={projects[activeProject].demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies Mastered' },
              { number: '1+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
