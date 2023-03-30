import { CircleGeometry } from 'three'
import Ball from './Ball'

const Circle = () => {
  return (
    <>
      <CircleGeometry attach="geometry" args={[10, 32]} />
      <meshStandardMaterial attach="material" color="green" />
      <Ball position={[-5, 0, 0]} />
      <Ball position={[-15, 0, 0]} />
      <Ball position={[5, 0, 0]} />
      <Ball position={[15, 0, 0]} />
      <Ball position={[25, 0, 0]} />
      <Ball position={[-25, 0, 0]} />
    </>
  )
}
export default Circle
