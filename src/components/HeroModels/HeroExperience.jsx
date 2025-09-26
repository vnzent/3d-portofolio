import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';

const HeroExperience = () => {
    const isTablet  = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile  = useMediaQuery({ query: '(max-width: 768x)'});

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45}}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls 
            enablePan={false}
            enableZoom={!isTablet}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh> */}
        <Room />
    </Canvas>
  )
}

export default HeroExperience