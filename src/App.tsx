import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

// Components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackgroundMusic from './components/BackgroundMusic'

// 3D Background
import Scene3D from './components/3D/Scene3D'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* 3D Background */}
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Contact />
          <Footer />
        </div>

        {/* Utility Components */}
        <ScrollToTop />
        <BackgroundMusic />
      </div>
    </Router>
  )
}

export default App
