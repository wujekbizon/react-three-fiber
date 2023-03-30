import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Ball = () => {
  const ref = useRef()

  useFrame(() => {
    ref.current.position.y = Math.sin(ref.current.position.x)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  )
}
export default Ball
