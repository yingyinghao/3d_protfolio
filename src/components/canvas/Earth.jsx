import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'



const Earth = () => {
  const earth = useGLTF('/planet/earth.gltf')

  return (
    <primitive
    object = {earth.scene}
    scale = {2.5}
    position = {[0]}

    />
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true}}
   camera={{}}
   >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
      outoRotate
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Earth/>
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas