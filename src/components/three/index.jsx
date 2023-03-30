import React, { useRef, useEffect } from 'react'
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { angleToRadius } from '../../utils/angle'
import * as THREE from 'three'
import gsap from 'gsap'

const Three = () => {
  // code to move camera around
  const orbitControlsRef = useRef(null)
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadius(90))
      orbitControlsRef.current.setPolarAngle(y + 1 * angleToRadius(90 - 30))
      orbitControlsRef.current.update()
    }
  })

  // Animation
  const ballRef = useRef(null)
  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current)

      // Timeline
      const timeline = gsap.timeline({ paused: true })

      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: 'power2.out'
      })

      // y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: 'bounce.out'
        },
        '<'
      )

      // const coefficient = 0.8

      // for (let i = 1; i <= 4; i++) {
      //   // Going up
      //   timeline.to(
      //     ballRef.current.position,
      //     {
      //       y: Math.pow(coefficient, i) * 1.5,
      //       duration: 0.3,
      //       ease: 'power2.out'
      //     },
      //     '>'
      //   )

      //   // Coming back down
      //   timeline.to(
      //     ballRef.current.position,
      //     {
      //       y: 0.5,
      //       duration: 0.3,
      //       ease: 'power2.in'
      //     },
      //     '>'
      //   )
      // }

      // Play
      timeline.play()
    }
  }, [ballRef])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadius(60)} maxPolarAngle={angleToRadius(80)} />
      {/* Ball */}
      <mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Floor */}
      <mesh rotation={[-angleToRadius(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial attach="material" color="#2596be" />
      </mesh>
      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.1]} />

      {/* Spotlight light */}
      <spotLight args={['#ffffff', 1.5, 7, angleToRadius(45), 0.4]} position={[-3, 1, 0]} castShadow />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#abdbe3" />
        </mesh>
      </Environment>
    </>
  )
}
export default Three
