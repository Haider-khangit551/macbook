import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import MacContainer from './MacContainer'
// import { div } from 'three/webgpu'

const App = () => {
  return (
    <div className='w-full h-screen text-white'>

      <div className ='navbar flex gap-5 text-white absolute top-0 py-5 left-1/2 -translate-x-1/2'>
        {["iPhone", "ios", "iPad", "Services", "Products", "iPhone", "ios", "iPad", "Services", "Products"].map((e)=>(
          <a className = " cursor-pointer text-white text-sm" href="">{e}</a>
        ))}
      </div>

    <div className='absolute flex flex-col items-center top-16 left-1/2 -translate-x-1/2'>
      <h3 className='glow-text text-7xl tracking-tighter'>macBook pro</h3>
      <h5>oh soo pro!</h5>
      <p className='text-center w-[400px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt maxime praesentium repudiandae culpa? Similique ad ex vitae mollitia sapiente molestiae.</p>
    </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]} />
        <ScrollControls pages={3}> 
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>

  )
}

export default App
