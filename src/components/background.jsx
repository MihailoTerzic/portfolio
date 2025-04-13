// Background.jsx
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from './model'

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
      <Canvas className="!w-full !h-full bg-white">
        <ambientLight intensity={0.1} />
        <Model scale={3} cameraSet={[0, 0, 3]} />
      </Canvas>
    </div>
  )
}
