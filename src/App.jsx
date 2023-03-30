import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import Three from './components/three'

const App = () => {
  return (
    <Canvas className="canvas" shadows="soft">
      <Html></Html>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App
