import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch(e => {
          console.log('Autoplay prevented:', e)
          setIsMuted(true)
        })
        setIsPlaying(true)
        setIsMuted(false)
      }
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        preload="metadata"
      >
        <source src="/assets/background-music.mp3" type="audio/mpeg" />
        <source src="/assets/background-music.ogg" type="audio/ogg" />
      </audio>

      {/* Music Controls */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col space-y-4">
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMusic}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black' 
              : 'bg-white/20 text-cyan-400 hover:bg-white/30'
          }`}
        >
          <motion.i
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
            className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-lg`}
          />
        </motion.button>

        {/* Mute/Unmute Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isMuted 
              ? 'bg-white/20 text-gray-400 hover:bg-white/30' 
              : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
          }`}
        >
          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-lg`} />
        </motion.button>

        {/* Volume Indicator */}
        {isPlaying && !isMuted && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-2 h-8 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-full"
          >
            <motion.div
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full bg-white rounded-full"
            />
          </motion.div>
        )}
      </div>

      {/* Music Info */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-8 left-24 z-50 glass-card p-4 max-w-xs"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-music text-black text-sm" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-white">Ambient Synthwave</p>
              <p className="text-xs text-gray-400">Background Music</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default BackgroundMusic
