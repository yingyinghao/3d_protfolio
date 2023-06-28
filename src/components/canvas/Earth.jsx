import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei'
import CanvasLoader from '../Loader'



const Earth = () => {
  return (
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

export default Earth