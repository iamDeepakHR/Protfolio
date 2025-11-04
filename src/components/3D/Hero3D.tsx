import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

// Floating Cubes for Hero
function HeroCubes() {
  const meshRef = useRef<THREE.Group>(null)
  const cubes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      speed: Math.random() * 0.01 + 0.005,
      color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6)
    }))
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.children.forEach((cube, i) => {
        cube.rotation.x += cubes[i].speed
        cube.rotation.y += cubes[i].speed
        cube.position.y += Math.sin(state.clock.elapsedTime + cube.position.x) * 0.005
        cube.position.x += Math.cos(state.clock.elapsedTime + cube.position.z) * 0.005
      })
    }
  })

  return (
    <group ref={meshRef}>
      {cubes.map((cube, i) => (
        <Box key={i} position={cube.position} rotation={cube.rotation}>
          <meshBasicMaterial 
            color={cube.color} 
            transparent 
            opacity={0.4} 
            wireframe 
          />
        </Box>
      ))}
    </group>
  )
}

// Glowing Spheres for Hero
function HeroSpheres() {
  const meshRef = useRef<THREE.Group>(null)
  const spheres = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ] as [number, number, number],
      speed: Math.random() * 0.008 + 0.003,
      amplitude: Math.random() * 1.5 + 0.5,
      color: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.8, 0.7)
    }))
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.children.forEach((sphere, i) => {
        sphere.position.y = spheres[i].position[1] + Math.sin(state.clock.elapsedTime * spheres[i].speed) * spheres[i].amplitude
        sphere.position.x = spheres[i].position[0] + Math.cos(state.clock.elapsedTime * spheres[i].speed * 0.7) * spheres[i].amplitude
        sphere.rotation.x += 0.005
        sphere.rotation.y += 0.005
      })
    }
  })

  return (
    <group ref={meshRef}>
      {spheres.map((sphere, i) => (
        <Sphere key={i} position={sphere.position} args={[0.2, 32, 32]}>
          <meshBasicMaterial 
            color={sphere.color} 
            transparent 
            opacity={0.3}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Neural Network for Hero
function HeroNeuralNetwork() {
  const linesRef = useRef<THREE.Group>(null)
  const nodeCount = 20
  const connectionCount = 30

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ] as [number, number, number]
    }))
  }, [])

  const connections = useMemo(() => {
    return Array.from({ length: connectionCount }, () => {
      const from = nodes[Math.floor(Math.random() * nodes.length)]
      const to = nodes[Math.floor(Math.random() * nodes.length)]
      return { from, to }
    })
  }, [nodes])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        const connection = connections[i]
        const geometry = line.geometry as THREE.BufferGeometry
        const positions = geometry.attributes.position.array as Float32Array
        
        // Update line positions with subtle movement
        positions[0] = connection.from.position[0] + Math.sin(state.clock.elapsedTime + i) * 0.1
        positions[1] = connection.from.position[1] + Math.cos(state.clock.elapsedTime + i) * 0.1
        positions[2] = connection.from.position[2]
        positions[3] = connection.to.position[0] + Math.sin(state.clock.elapsedTime + i + 1) * 0.1
        positions[4] = connection.to.position[1] + Math.cos(state.clock.elapsedTime + i + 1) * 0.1
        positions[5] = connection.to.position[2]
        
        geometry.attributes.position.needsUpdate = true
      })
    }
  })

  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                connection.from.position[0],
                connection.from.position[1],
                connection.from.position[2],
                connection.to.position[0],
                connection.to.position[1],
                connection.to.position[2]
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00ffff" transparent opacity={0.2} />
        </line>
      ))}
    </group>
  )
}

// Particle System for Hero
function HeroParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 500

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 30
      
      const color = new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005
      pointsRef.current.rotation.x += 0.0002
    }
  })

  return (
    <Points ref={pointsRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.4}
      />
    </Points>
  )
}

// Main Hero 3D Component
export default function Hero3D() {
  const { camera } = useThree()
  
  useFrame((state) => {
    // Subtle camera movement
    const mouseX = (state.mouse.x * 0.3)
    const mouseY = (state.mouse.y * 0.3)
    
    camera.position.x += (mouseX - camera.position.x) * 0.02
    camera.position.y += (-mouseY - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8000ff" />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#0080ff" />
      
      <HeroCubes />
      <HeroSpheres />
      <HeroParticles />
      <HeroNeuralNetwork />
    </>
  )
}
