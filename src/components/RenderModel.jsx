"use client"
import { Environment } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense, useRef } from 'react'


const RotatingModel = ({children}) => {
  const modelRef = useRef();

  // Apply continuous rotation to the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;  // Rotate model on the Y-axis
    }
  });

  return <group ref={modelRef}>{children}</group>;
}
  

const RenderModel = ({children, className}) => {

  return (
    <Canvas
  className={clsx("w-screen h-screen relative group-hover:pause", className)}
  style={{ zIndex: 9, pointerEvents: 'none' }}
>
    
  <Suspense fallback={null}>
     {/* RotatingModel component that handles rotation logic */}
    <RotatingModel>{children}</RotatingModel>
  </Suspense>
  <Environment preset="dawn" />
</Canvas>

  )
}

export default RenderModel
